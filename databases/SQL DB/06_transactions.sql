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


-- :::::::::: DML: ENCRIPTACIÓN ::::::::::

-- MÉTODOS DE ENCRIPTACIÓN
SELECT MD5('M1 P45W0RD') contrasena;
SELECT SHA1('M1 P45W0RD') contrasena;
SELECT SHA2('M1 P45W0RD',256) contrasena;
SELECT AES_ENCRYPT('M1 P45W0RD','secret_key') contrasena;

-- MÉTODOS DE DES-ENCRIPTACIÓN
-- SELECT AES_ENCRYPT(referencia_campo_tabla,'secret_key') contrasena;

-- ::: EJERCICIOS :::
CREATE TABLE pagos_recurrentes(
  cuenta VARCHAR(8) PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  tarjeta BLOB
);

INSERT INTO pagos_recurrentes VALUES
  ('12345678', 'Jon', AES_ENCRYPT('1234567890123488', '12345678')),
  ('12345677', 'Irma', AES_ENCRYPT('1234567890123477', '12345677')),
  ('12345676', 'Kenai', AES_ENCRYPT('1234567890123466', '12345676')),
  ('12345674', 'Kala', AES_ENCRYPT('1234567890123455', 'super_llave')),
  ('12345673', 'Miguel', AES_ENCRYPT('1234567890123444', 'super_llave'));

SELECT * FROM pagos_recurrentes;

SELECT CAST(AES_DECRYPT(tarjeta,'12345678') AS CHAR) credit_card, nombre FROM pagos_recurrentes;
SELECT CAST(AES_DECRYPT(tarjeta,'12345678') AS CHAR) credit_card, nombre FROM pagos_recurrentes WHERE nombre = 'Jon';
SELECT CAST(AES_DECRYPT(tarjeta,'super_llave') AS CHAR) credit_card, nombre FROM pagos_recurrentes;
SELECT CAST(AES_DECRYPT(tarjeta,'qwerty') AS CHAR) credit_card, nombre FROM pagos_recurrentes;

