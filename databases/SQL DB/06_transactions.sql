-- :::::::::: DML: TRANSACCIONES ::::::::::

USE curso_sql;
SHOW TABLES;
SELECT * FROM lenguajes;
SELECT * FROM frameworks;
SELECT * FROM entornos;


DROP TABLE lenguajes;
DROP TABLE entornos;
DROP TABLE frameworks;

  SELECT * FROM frameworks;
START TRANSACTION;
  UPDATE frameworks SET framework = 'Vue JS' WHERE framework_id = 03;
  DELETE FROM frameworks;
  INSERT INTO frameworks VALUES (0,'Spring',5,2);
ROLLBACK;
COMMIT;

-- ::::: DML: SENTENCIA 'LIMIT' :::::
-- LISTAR UNA CANTIDAD DEFINIDA DE REGISTROS 
SELECT * FROM frameworks LIMIT 2;

-- LISTAR UN RANGO DEFINIDO DE REGISTROS 
SELECT * FROM frameworks LIMIT 2, 2;
SELECT * FROM frameworks LIMIT 4, 2;
SELECT * FROM frameworks LIMIT 6, 2;
