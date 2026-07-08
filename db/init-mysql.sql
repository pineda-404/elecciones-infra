-- Esquema e inicialización MySQL para candidates-service

CREATE DATABASE IF NOT EXISTS onpe_candidates;
USE onpe_candidates;

CREATE TABLE IF NOT EXISTS partidos (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    nombre      VARCHAR(100) NOT NULL,
    siglas      VARCHAR(20) NOT NULL,
    logo_url    VARCHAR(255),
    color_hex   VARCHAR(7)
);

CREATE TABLE IF NOT EXISTS candidatos (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    nombres     VARCHAR(100) NOT NULL,
    apellidos   VARCHAR(100) NOT NULL,
    partido_id  INT NOT NULL,
    foto_url    VARCHAR(255),
    orden       INT NOT NULL DEFAULT 0,
    FOREIGN KEY (partido_id) REFERENCES partidos(id)
);

-- Seed Data
INSERT INTO partidos (id, nombre, siglas, logo_url, color_hex) VALUES
(1, 'Fuerza Popular', 'FP', '/static/fp.png', '#e85d26'),
(2, 'Juntos por el Perú', 'JPP', '/static/jpp.png', '#1a47a0')
ON DUPLICATE KEY UPDATE nombre=VALUES(nombre);

INSERT INTO candidatos (id, nombres, apellidos, partido_id, foto_url, orden) VALUES
(1, 'Keiko Sofia', 'Fujimori Higuchi', 1, '/static/keiko.png', 1),
(2, 'Roberto Helbert', 'Sanchez Palomino', 2, '/static/roberto.png', 2)
ON DUPLICATE KEY UPDATE nombres=VALUES(nombres);
