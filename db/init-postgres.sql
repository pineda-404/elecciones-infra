-- Esquema e inicialización PostgreSQL para results-service

CREATE TABLE IF NOT EXISTS eleccion (
    id                   SERIAL PRIMARY KEY,
    nombre               VARCHAR(200) NOT NULL,
    fecha                DATE NOT NULL,
    total_actas          INT NOT NULL DEFAULT 0,
    actas_contabilizadas INT NOT NULL DEFAULT 0,
    porcentaje_actas     DECIMAL(6,3) NOT NULL DEFAULT 0,
    estado               VARCHAR(20) NOT NULL DEFAULT 'EN_PROCESO'
);

CREATE TABLE IF NOT EXISTS resultados (
    id            SERIAL PRIMARY KEY,
    eleccion_id   INT NOT NULL REFERENCES eleccion(id),
    candidato_id  INT NOT NULL,
    ambito        VARCHAR(20) NOT NULL CHECK (ambito IN ('TODOS', 'PERU', 'EXTRANJERO')),
    votos         INT NOT NULL DEFAULT 0,
    porcentaje    DECIMAL(7,3) NOT NULL DEFAULT 0,
    UNIQUE(eleccion_id, candidato_id, ambito)
);

-- Seed Data
INSERT INTO eleccion (id, nombre, fecha, total_actas, actas_contabilizadas, porcentaje_actas, estado) VALUES
(1, 'Segunda Elección Presidencial 2026', '2026-07-06', 92768, 92768, 100.000, 'FINALIZADO')
ON CONFLICT (id) DO UPDATE SET nombre=EXCLUDED.nombre;

INSERT INTO resultados (eleccion_id, candidato_id, ambito, votos, porcentaje) VALUES
(1, 1, 'TODOS', 9223396, 50.135),
(1, 2, 'TODOS', 9173756, 49.865),
(1, 1, 'PERU', 8928999, 49.912),
(1, 2, 'PERU', 8960032, 50.088),
(1, 1, 'EXTRANJERO', 85166, 63.208),
(1, 2, 'EXTRANJERO', 53731, 36.792)
ON CONFLICT (eleccion_id, candidato_id, ambito) DO UPDATE SET votos=EXCLUDED.votos, porcentaje=EXCLUDED.porcentaje;
