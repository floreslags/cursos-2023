-- :::::::::: DDL: INDICES HACIA TABLAS ::::::::::
/*
    - Consiste en la organización de las relaciones de las tablas en una base de datos. PK, FK, UQ.
    - Mediante los índices, es posible consultar múltiples tablas
*/

CREATE DATABASE curso_sql;

DROP DATABASE curso_sql;

USE curso_sql;

SHOW TABLES;

CREATE TABLE caballeros (
  caballero_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30),
  armadura VARCHAR(30),
  rango VARCHAR(30),
  signo VARCHAR(30),
  ejercito VARCHAR(30),
  pais VARCHAR(30)
);

INSERT INTO caballeros VALUES
  (0,"Seiya","Pegaso","Bronce","Sagitario","Athena","Japón"),
  (0,"Shiryu","Dragón","Bronce","Libra","Athena","Japón"),
  (0,"Hyoga","Cisne","Bronce","Acuario","Athena","Rusia"),
  (0,"Shun","Andromeda","Bronce","Virgo","Athena","Japón"),
  (0,"Ikki","Fénix","Bronce","Leo","Athena","Japón"),
  (0,"Kanon","Géminis","Oro","Géminis","Athena","Grecia"),
  (0,"Saga","Géminis","Oro","Géminis","Athena","Grecia"),
  (0,"Camus","Acuario","Oro","Acuario","Athena","Francia"),
  (0,"Rhadamanthys","Wyvern","Espectro","Escorpión","Hades","Inglaterra"),
  (0,"Kanon","Dragón Marino","Marino","Géminis","Poseidón","Grecia"),
  (0,"Kagaho","Bennu","Espectro","Leo","Hades","Rusia");


SELECT * FROM caballeros;

DROP TABLE caballeros;

TRUNCATE TABLE caballeros;

SHOW INDEX FROM caballeros;


-- DDL: DEFINIR INDICES PK, FK, UQ

-- TABLAS CON INDICES
CREATE TABLE caballeros (
  caballero_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30),
  armadura VARCHAR(30) UNIQUE,
  rango VARCHAR(30),
  signo VARCHAR(30),
  ejercito VARCHAR(30),
  pais VARCHAR(30),
  INDEX i_rango(rango),
  INDEX i_signo(signo),
  -- INDICE COMPUESTO DE VARIOS CAMPOS
  INDEX i_caballeros(ejercito,pais)
);

-- INSERTS MODIFICADOS

INSERT INTO caballeros VALUES
  (0,"Seiya","Pegaso","Bronce","Sagitario","Athena","Japón"),
  (0,"Shiryu","Dragón","Bronce","Libra","Athena","Japón"),
  (0,"Hyoga","Cisne","Bronce","Acuario","Athena","Rusia"),
  (0,"Shun","Andromeda","Bronce","Virgo","Athena","Japón"),
  (0,"Ikki","Fénix","Bronce","Leo","Athena","Japón"),
  (0,"Kanon","Géminis","Oro","Géminis","Athena","Grecia"),
  (0,"Saga","Junini","Oro","Junini","Athena","Grecia"),
  (0,"Camus","Acuario","Oro","Acuario","Athena","Francia"),
  (0,"Rhadamanthys","Wyvern","Espectro","Escorpión","Hades","Inglaterra"),
  (0,"Kanon","Dragón Marino","Marino","Géminis","Poseidón","Grecia"),
  (0,"Kagaho","Bennu","Espectro","Leo","Hades","Rusia");

-- INDICE DE TIPO 'GOOGLE' O 'FULL-TEXT'
/*
    - Se crea un INDICE COMPUESTO y con un SELECT especial se hace una consulta a múltiples tablas.
    - Requiere de cierta demanda de recursos al motor de MySQL
*/

CREATE TABLE caballeros (
  caballero_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30),
  armadura VARCHAR(30),
  rango VARCHAR(30),
  signo VARCHAR(30),
  ejercito VARCHAR(30),
  pais VARCHAR(30),
  FULLTEXT INDEX fi_search(armadura, rango, signo, ejercito,pais)
);

INSERT INTO caballeros VALUES
  (0,"Seiya","Pegaso","Bronce","Sagitario","Athena","Japón"),
  (0,"Shiryu","Dragón","Bronce","Libra","Athena","Japón"),
  (0,"Hyoga","Cisne","Bronce","Acuario","Athena","Rusia"),
  (0,"Shun","Andromeda","Bronce","Virgo","Athena","Japón"),
  (0,"Ikki","Fénix","Bronce","Leo","Athena","Japón"),
  (0,"Kanon","Géminis","Oro","Géminis","Athena","Grecia"),
  (0,"Saga","Géminis","Oro","Géminis","Athena","Grecia"),
  (0,"Camus","Acuario","Oro","Acuario","Athena","Francia"),
  (0,"Rhadamanthys","Wyvern","Espectro","Escorpión Oro","Hades","Inglaterra"),
  (0,"Kanon","Dragón Marino","Marino","Géminis Oro","Poseidón","Grecia"),
  (0,"Kagaho","Bennu","Espectro","Leo","Hades","Rusia");

-- CONSULTAS ESPECIALES PARA INDICES TIPO FULLTEXT EN VARIOS CAMPOS (USAR CON MODERACIÓN, POR MAYOR TIEMPO DE PROCESAMIENTO)
SELECT * FROM caballeros WHERE MATCH(armadura, rango, signo, ejercito, pais) AGAINST('Bronce' IN BOOLEAN MODE);
SELECT * FROM caballeros WHERE MATCH(armadura, rango, signo, ejercito, pais) AGAINST('Oro' IN BOOLEAN MODE);

-- DDL: INDICES Y LLAVES PARA TABLAS 'CONSTRAINTS'

-- SIN INDICES
CREATE TABLE caballeros (
  caballero_id INT UNSIGNED,
  nombre VARCHAR(30),
  armadura VARCHAR(30),
  rango VARCHAR(30),
  signo VARCHAR(30),
  ejercito VARCHAR(30),
  pais VARCHAR(30)
);

-- *LOS CONSTRAINTS APLICAN SOLO PARA PK, FK Y UQ
-- *LOS INDEX APLICAN SOLO PARA LOS OTROS CAMPOS

-- CREAR LLAVE PRIMARIA PK
ALTER TABLE caballeros ADD CONSTRAINT pk_caballero_id PRIMARY KEY(caballero_id);

-- ESTABLECER UN VALOR AUTO_AUTOINCREMENTAL
ALTER TABLE caballeros MODIFY COLUMN caballero_id INT AUTO_INCREMENT;

-- ESTABLECER UN VALOR COMO UNICO
ALTER TABLE caballeros ADD CONSTRAINT uq_armadura UNIQUE(armadura);

-- ELIMINAR UN VALOR COMO UNICO
ALTER TABLE caballeros DROP CONSTRAINT uq_armadura;

-- ESTABLECER UN CAMPO NO FK, PK O UQ COMO UNICO
ALTER TABLE caballeros ADD INDEX i_rango(rango);

-- ELIMINAR UN CAMPO NO FK, PK O UQ COMO UNICO
ALTER TABLE caballeros DROP INDEX i_rango;

-- ESTABLECER UN CONJUNTO DE CAMPOS NO FK, PK O UQ COMO UNICOS
ALTER TABLE caballeros ADD INDEX i_ejercito_pais(ejercito,pais);

-- ELIMINAR UN CONJUNTO DE CAMPOS NO FK, PK O UQ COMO UNICOS
ALTER TABLE caballeros DROP INDEX i_ejercito_pais;

-- ESTABLECER UN CAMPO DE TIPO 'FULLTEXT'
ALTER TABLE caballeros ADD FULLTEXT INDEX fi_search(nombre, signo);

-- ELIMINAR UN CAMPO DE TIPO 'FULLTEXT'
ALTER TABLE caballeros DROP INDEX fi_search;