#!/bin/bash
set -e

# Configuración
CLUSTER_NAME="onpe-cluster"
KIND_CONFIG="k8s/kind-config.yaml"

echo "=== 1. Creando cluster Kind: ${CLUSTER_NAME} ==="
if kind get clusters | grep -q "^${CLUSTER_NAME}$"; then
  echo "El cluster '${CLUSTER_NAME}' ya existe."
else
  kind create cluster --name "${CLUSTER_NAME}" --config "${KIND_CONFIG}"
fi

echo "=== 2. Construyendo imágenes locales ==="
docker build -t onpe-candidates-service:latest ../onpe-candidates-service
docker build -t onpe-results-service:latest ../onpe-results-service
docker build -t onpe-geography-service:latest ../onpe-geography-service
docker build -t onpe-nginx:latest -f Dockerfile.nginx ..

echo "=== 3. Cargando imágenes en Kind ==="
kind load docker-image onpe-candidates-service:latest --name "${CLUSTER_NAME}"
kind load docker-image onpe-results-service:latest --name "${CLUSTER_NAME}"
kind load docker-image onpe-geography-service:latest --name "${CLUSTER_NAME}"
kind load docker-image onpe-nginx:latest --name "${CLUSTER_NAME}"

echo "=== 4. Aplicando Manifiestos de Kubernetes ==="
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/secrets.yaml
kubectl apply -f k8s/configmap.yaml

echo "=== 5. Desplegando Bases de Datos e Infraestructura ==="
kubectl apply -f k8s/mysql/
kubectl apply -f k8s/postgres/
kubectl apply -f k8s/mongodb/
kubectl apply -f k8s/redis/
kubectl apply -f k8s/rabbitmq/

echo "=== Esperando a que las bases de datos estén listas ==="
kubectl wait --for=condition=ready pod -l app=mysql -n onpe --timeout=120s
kubectl wait --for=condition=ready pod -l app=postgres -n onpe --timeout=120s
kubectl wait --for=condition=ready pod -l app=mongodb -n onpe --timeout=120s

echo "=== 6. Desplegando Microservicios y API Gateway ==="
kubectl apply -f k8s/candidates-service/
kubectl apply -f k8s/results-service/
kubectl apply -f k8s/geography-service/
kubectl apply -f k8s/nginx/

echo "=== 7. Esperando a que todos los pods estén listos ==="
kubectl wait --for=condition=ready pod --all -n onpe --timeout=120s

echo "=== ¡Despliegue en K8s (Kind) Completado! ==="
echo "Acceso a la Aplicación: http://localhost:30080"
echo "RabbitMQ Management: http://localhost:30572 (user: onpe, pass: onpe2026)"
