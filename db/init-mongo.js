// Inicialización MongoDB para geography-service
db = db.getSiblingDB('onpe_geography');

db.ambitos.drop();
db.ambitos.insertMany([
  { "_id": "PERU", "nombre": "Perú", "tipo": "pais" },
  { "_id": "EXTRANJERO", "nombre": "Extranjero", "tipo": "exterior" },
  { "_id": "DEPT_010000", "nombre": "AMAZONAS", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_020000", "nombre": "ANCASH", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_030000", "nombre": "APURIMAC", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_040000", "nombre": "AREQUIPA", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_050000", "nombre": "AYACUCHO", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_060000", "nombre": "CAJAMARCA", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_070000", "nombre": "CALLAO", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_080000", "nombre": "CUSCO", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_090000", "nombre": "HUANCAVELICA", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_100000", "nombre": "HUANUCO", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_110000", "nombre": "ICA", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_120000", "nombre": "JUNIN", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_130000", "nombre": "LA LIBERTAD", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_140000", "nombre": "LAMBAYEQUE", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_150000", "nombre": "LIMA", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_160000", "nombre": "LORETO", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_170000", "nombre": "MADRE DE DIOS", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_180000", "nombre": "MOQUEGUA", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_190000", "nombre": "PASCO", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_200000", "nombre": "PIURA", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_210000", "nombre": "PUNO", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_220000", "nombre": "SAN MARTIN", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_230000", "nombre": "TACNA", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_240000", "nombre": "TUMBES", "tipo": "departamento", "parent": "PERU" },
  { "_id": "DEPT_250000", "nombre": "UCAYALI", "tipo": "departamento", "parent": "PERU" }
]);

db.resultados_geo.drop();
db.resultados_geo.insertMany([
  { "_id": "DEPT_010000", "departamento": "AMAZONAS", "ganador_id": 2, "votos_1": 45200, "pct_1": 38.5, "votos_2": 72100, "pct_2": 61.5 },
  { "_id": "DEPT_020000", "departamento": "ANCASH", "ganador_id": 1, "votos_1": 281000, "pct_1": 52.3, "votos_2": 256000, "pct_2": 47.7 },
  { "_id": "DEPT_030000", "departamento": "APURIMAC", "ganador_id": 2, "votos_1": 68000, "pct_1": 42.1, "votos_2": 93500, "pct_2": 57.9 },
  { "_id": "DEPT_040000", "departamento": "AREQUIPA", "ganador_id": 1, "votos_1": 412000, "pct_1": 54.8, "votos_2": 340000, "pct_2": 45.2 },
  { "_id": "DEPT_050000", "departamento": "AYACUCHO", "ganador_id": 2, "votos_1": 82000, "pct_1": 40.5, "votos_2": 120500, "pct_2": 59.5 },
  { "_id": "DEPT_060000", "departamento": "CAJAMARCA", "ganador_id": 2, "votos_1": 195000, "pct_1": 45.2, "votos_2": 236000, "pct_2": 54.8 },
  { "_id": "DEPT_070000", "departamento": "CALLAO", "ganador_id": 1, "votos_1": 322000, "pct_1": 54.3, "votos_2": 271000, "pct_2": 45.7 },
  { "_id": "DEPT_080000", "departamento": "CUSCO", "ganador_id": 2, "votos_1": 150000, "pct_1": 38.8, "votos_2": 236500, "pct_2": 61.2 },
  { "_id": "DEPT_090000", "departamento": "HUANCAVELICA", "ganador_id": 2, "votos_1": 48000, "pct_1": 39.4, "votos_2": 73800, "pct_2": 60.6 },
  { "_id": "DEPT_100000", "departamento": "HUANUCO", "ganador_id": 2, "votos_1": 98000, "pct_1": 44.1, "votos_2": 124200, "pct_2": 55.9 },
  { "_id": "DEPT_110000", "departamento": "ICA", "ganador_id": 1, "votos_1": 278000, "pct_1": 56.2, "votos_2": 217000, "pct_2": 43.8 },
  { "_id": "DEPT_120000", "departamento": "JUNIN", "ganador_id": 2, "votos_1": 188000, "pct_1": 47.3, "votos_2": 210000, "pct_2": 52.7 },
  { "_id": "DEPT_130000", "departamento": "LA LIBERTAD", "ganador_id": 1, "votos_1": 480000, "pct_1": 53.1, "votos_2": 424000, "pct_2": 46.9 },
  { "_id": "DEPT_140000", "departamento": "LAMBAYEQUE", "ganador_id": 1, "votos_1": 320000, "pct_1": 51.8, "votos_2": 297500, "pct_2": 48.2 },
  { "_id": "DEPT_150000", "departamento": "LIMA", "ganador_id": 1, "votos_1": 2500000, "pct_1": 52.1, "votos_2": 2300000, "pct_2": 47.9 },
  { "_id": "DEPT_160000", "departamento": "LORETO", "ganador_id": 2, "votos_1": 110000, "pct_1": 45.8, "votos_2": 130000, "pct_2": 54.2 },
  { "_id": "DEPT_170000", "departamento": "MADRE DE DIOS", "ganador_id": 2, "votos_1": 26000, "pct_1": 46.0, "votos_2": 30500, "pct_2": 54.0 },
  { "_id": "DEPT_180000", "departamento": "MOQUEGUA", "ganador_id": 2, "votos_1": 48000, "pct_1": 48.5, "votos_2": 51000, "pct_2": 51.5 },
  { "_id": "DEPT_190000", "departamento": "PASCO", "ganador_id": 2, "votos_1": 42000, "pct_1": 45.2, "votos_2": 51000, "pct_2": 54.8 },
  { "_id": "DEPT_200000", "departamento": "PIURA", "ganador_id": 1, "votos_1": 498000, "pct_1": 53.5, "votos_2": 433000, "pct_2": 46.5 },
  { "_id": "DEPT_210000", "departamento": "PUNO", "ganador_id": 2, "votos_1": 135000, "pct_1": 34.2, "votos_2": 260000, "pct_2": 65.8 },
  { "_id": "DEPT_220000", "departamento": "SAN MARTIN", "ganador_id": 2, "votos_1": 130000, "pct_1": 47.5, "votos_2": 143500, "pct_2": 52.5 },
  { "_id": "DEPT_230000", "departamento": "TACNA", "ganador_id": 1, "votos_1": 98000, "pct_1": 53.3, "votos_2": 85900, "pct_2": 46.7 },
  { "_id": "DEPT_240000", "departamento": "TUMBES", "ganador_id": 1, "votos_1": 78000, "pct_1": 52.0, "votos_2": 72000, "pct_2": 48.0 },
  { "_id": "DEPT_250000", "departamento": "UCAYALI", "ganador_id": 1, "votos_1": 102000, "pct_1": 51.0, "votos_2": 98000, "pct_2": 49.0 }
]);

db.estadisticas.drop();
db.estadisticas.insertMany([
  {
    "_id": "stats_generales",
    "total_votos_emitidos": 18397152,
    "total_actas": 92768,
    "actas_contabilizadas": 92768,
    "porcentaje_participacion": 82.4,
    "ultima_actualizacion": "2026-07-07T23:59:00Z"
  },
  {
    "_id": "comparacion_peru_extranjero",
    "peru": {
      "candidatos": [
        { "candidato_id": 1, "nombre": "Keiko Fujimori", "votos": 8928999, "porcentaje": 49.912 },
        { "candidato_id": 2, "nombre": "Roberto Sánchez", "votos": 8960032, "porcentaje": 50.088 }
      ],
      "total_votos": 17889031,
      "ganador_id": 2
    },
    "extranjero": {
      "candidatos": [
        { "candidato_id": 1, "nombre": "Keiko Fujimori", "votos": 85166, "porcentaje": 63.208 },
        { "candidato_id": 2, "nombre": "Roberto Sánchez", "votos": 53731, "porcentaje": 36.792 }
      ],
      "total_votos": 138897,
      "ganador_id": 1
    }
  }
]);
