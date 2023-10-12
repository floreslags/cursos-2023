-- :::::::::: RECURSOS DE LA SECCIÓN:::::::::: 
CREATE DATABASE curso_sql;

DROP DATABASE curso_sql;

USE curso_sql;

SHOW TABLES;

CREATE TABLE usuarios(
  usuario_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL,
  apellidos VARCHAR(30) NOT NULL,
  correo VARCHAR(50) UNIQUE,
  edad INT DEFAULT 0
);

INSERT INTO usuarios (nombre, apellidos, correo, edad) VALUES 
  ("Jon","MirCha","jonmircha@gmail.com", 38),
  ("kEnAi","MirCha","kenai@gmail.com", 10),
  ("Irma","Campos","irma@outlook.com", 38),
  ("Pepito", "Perez", "pepito@hotmail.com", 28),
  ("Rosita", "Juárez", "rosita@yahoo.com", 19),
  ("Macario", "Guzman", "macario@outlook.com", 55);
  
CREATE TABLE productos (
  producto_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  descripcion VARCHAR(50),
  precio DECIMAL(7,2),
  cantidad INT UNSIGNED
);

INSERT INTO productos (nombre, descripcion, precio, cantidad) VALUES
  ("Computadora", "Macbook Air M2", 29999.99, 5),
  ("Celular", "Nothing Phone 1", 11999.99, 15),
  ("Cámara Web", "Logitech C920", 1500, 13),
  ("Micrófono", "Blue Yeti", 2500, 19),
  ("Audífonos", "Audífonos Bose", 6500, 10);

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


SELECT * FROM usuarios;
SELECT * FROM productos;
SELECT * FROM caballeros;

DROP TABLE usuarios;
DROP TABLE productos;
DROP TABLE caballeros;

TRUNCATE TABLE usuarios; 
TRUNCATE TABLE productos;
TRUNCATE TABLE caballeros;


-- :::::::::: DML: FUNCIONES ARITMÉTICAS ::::::::::

SELECT 6 + 5 suma;
SELECT 6 - 5 resta;
SELECT 6 * 5 producto;
SELECT 6 / 5 cociente;



-- :::::::::: DML: FUNCIONES MATEMÁTICAS ::::::::::

SELECT MOD(4,2) modulo;
SELECT MOD(5,2) modulo;

SELECT CEILING(7.1)red_sup;
SELECT FLOOR(7.1)red_inf;
SELECT ROUND(7.1)red_din;

SELECT POWER(2,6) potencia;

SELECT SQRT(81) raiz_cuadrada;


-- :::::::::: DML: FUNCIONES DE AGRUPACIÓN ::::::::::
SELECT nombre, precio, cantidad, (precio * cantidad) ganancia FROM productos;

-- CONSULTAR EL VALOR MÁXIMO DE UN CAMPO DE UNA TABLA
SELECT MAX(precio) precio_maximo FROM productos;

-- CONSULTAR EL VALOR MÍNIMO DE UN CAMPO DE UNA TABLA
SELECT MIN(precio) precio_minimo FROM productos;

-- CONSULTAR LA SUMATORIA DE UN CAMPO DE UNA TABLA
SELECT SUM(cantidad) existencias FROM productos; 

-- CONSULTAR EL VALOR PROMEDIO DE UN CAMPO DE UNA TABLA
SELECT AVG(precio) promedio FROM productos; 

-- CONSULTAR EL RECUENTO DE REGISTROS DE UN CAMPO DE UNA TABLA
SELECT COUNT(*) productos FROM productos; 

-- :::::::::: DML: CONSULTAS AGRUPADAS + FUNCIONES DE ARGUPACIÓN ::::::::::

-- CONSULTAR EL PRECIO Y PRECIO MÁXIMO DEL CAMPO DE UNA TABLA
SELECT precio, MAX(precio) precio_maximo FROM productos GROUP BY precio;

-- CONSULTAR EL NOMBRE, PRECIO Y PRECIO MÁXIMO DEL CAMPO DE UNA TABLA
SELECT nombre, precio, MAX(precio) precio_maximo FROM productos GROUP BY precio, nombre;

-- CONSULTAR LOS REGISTROS TOTALES POR SIGNO DE UN CAMPO DE UNA TABLA
SELECT signo, COUNT(*) total FROM caballeros GROUP BY signo;

-- CONSULTAR LOS REGISTROS TOTALES POR ARMADURA DE UN CAMPO DE UNA TABLA
SELECT armadura, COUNT(*) total FROM caballeros GROUP BY armadura;

-- CONSULTAR LOS REGISTROS TOTALES POR RANGO DE UN CAMPO DE UNA TABLA
SELECT rango, COUNT(*) total FROM caballeros GROUP BY rango;

-- CONSULTAR LOS REGISTROS TOTALES POR PAIS DE UN CAMPO DE UNA TABLA
SELECT pais, COUNT(*) total FROM caballeros GROUP BY pais;
