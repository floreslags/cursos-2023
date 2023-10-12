-- Comentarios de una línea

/*
    Comentarios de líneas 
    múltiples
*/

/* 
    - No hay distincion de letras mayúsculas o minúsculas
    - Recomendaciones:
        - Los COMANDOS y PALABRAS RESERVADAS en MySQL se define en MAYÚSCULAS
        - Los nombres de OBJETOS y DATOS se definen en MINÚSCULAS con _snake_case_
        - Usar comillas simples para strings (`''`)
        - Todas las sentencias o instrucciones terminan con punto y coma (`;`)
*/




-- *** DDL PARA GESTIÓN DE BASES DE DATOS ***

-- Mostrar o listar las bases de datos existentes
SHOW DATABASES;

-- CREAR UNA BASE DE DATOS
CREATE DATABASE curso_sql;

-- ELIMINAR UNA BASE DE DATOS
DROP DATABASE curso_sql;

-- USAR UNA DETERMINADA BASE DE DATOS;
USE curso_sql;

-- GESTION + CONDICIONALES IF EXISTS & IF NOT EXISTS (-- BUENAS PRÁCTICAS --)
-- CREAR UNA BASE DE DATOS CON CLÁUSULA CONDICIONAL
CREATE DATABASE IF NOT EXISTS curso_sql; 
CREATE DATABASE IF NOT EXISTS for_floreslags; 

-- ELIMINAR UNA BASE DE DATOS CON CLÁUSULA CONDICIONAL
DROP DATABASE IF EXISTS curso_sql; 

-- *** DCL para gestionar usuarios ***
-- CREAR UN USUARIO
CREATE USER 'floreslags'@'localhost' IDENTIFIED BY 'qwerty';

-- ## GESTION DE PRIVILEGIOS ##
-- ASIGNAR TODOS LOS PRIVILEGIOS
USE for_floreslags;
GRANT ALL PRIVILEGES ON for_floreslags TO 'floreslags'@'localhost';

-- ACTUALIZAR LISTA DE TODOS LOS PRIVILEGIOS CADA VEZ QUE SE ACTUALICEN
FLUSH PRIVILEGES;

-- MOSTRAR PRIVILEGIOS DE UN USUARIO
SHOW GRANTS FOR 'floreslags'@'localhost';

-- ASIGNAR UN CONJUNTO LOS PRIVILEGIOS
GRANT [PRIV1,PRIV2,ETC] ON for_floreslags TO 'floreslags'@'localhost';

-- REVOCAR O ELIMINAR TODOS LOS PRIVILEGIOS
REVOKE ALL, GRANT OPTION FROM 'floreslags'@'localhost';

-- ELIMINAR UN USUARIO
DROP USER 'floreslags'@'localhost';

-- *** DDL PARA TABLAS ***

-- USAR O SELECCIONAR UNA DETERMINADA BASE DE DATOS PARA GESTIONAR
USE curso_sql;

-- MOSTRAR LISTA TABLAS
SHOW TABLES;

-- CREAR UNA TABLA CREATE TABLE table_name
CREATE TABLE users(
    name VARCHAR(50),
    email VARCHAR(50)
);

-- MOSTRAR UNA TABLA Y SU ESTRUCTURA DESCRIBE table_name
DESCRIBE users;

-- AGREGAR UN CAMPO O ATRIBUTO A UNA TABLA ALTER TABLE table_name ADD COLUMN
ALTER TABLE users ADD COLUMN birthdate VARCHAR(15);

-- MODIFICAR UN CAMPO O ATRIBUTO A UNA TABLA ALTER TABLE table_name MODIFY
ALTER TABLE users MODIFY birthdate DATE;

-- RE-NOMBRAR UN CAMPO O ATRIBUTO A UNA TABLA ALTER TABLE table_name MODIFY
ALTER TABLE users RENAME COLUMN birthdate TO birthday;

-- ELIMINAR UN CAMPO O ATRIBUTO A UNA TABLA ALTER TABLE table_name ADD COLUMN
ALTER TABLE users DROP COLUMN birthday;

-- ELIMINAR UNA TABLA
DROP TABLE users;

-- CREAR UNA TABLA CON PK, UNSIGNED (NO VALORES NEGATIVOS), AUTOINCREMENTAL, VALORES ÚNICOS
CREATE TABLE users(
    user_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    address VARCHAR(100) DEFAULT 'No Address Defined',
    age INT DEFAULT 0  
);