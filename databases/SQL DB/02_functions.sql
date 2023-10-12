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

-- :::::::::: DML: CONSULTAS AGRUPADAS CON 'GROUP BY' + FUNCIONES DE ARGUPACIÓN ::::::::::

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

-- :::::::::: DML: CONSULTAS AGRUPADAS CON 'WHERE' + 'GROUP BY' + FUNCIONES DE ARGUPACIÓN ::::::::::

-- CONSULTAR LOS REGISTROS TOTALES POR RANGO DE UN CAMPO DE UNA TABLA DONDE EL EJERCITO ES TIPO 'ATHENA'
SELECT rango, COUNT(*) total FROM caballeros WHERE ejercito = 'Athena' GROUP BY rango;


-- :::::::::: DML: CONSULTAS AGRUPADAS CON 'WHERE' CAMPOS QUE EXISTEN + 'GROUP BY' PARA AGRUPAR + 'HAVING' PARA CÁLCULOS CAMPOS DINAMICOS + FUNCIONES DE ARGUPACIÓN ::::::::::

-- CONSULTAR LOS REGISTROS TOTALES POR RANGO DE UN CAMPO DE UNA TABLA DONDE EL EJERCITO ES TIPO 'ATHENA' Y EL TOTAL DEL RECUENTO ES MAYOR O IGUAL A '4'
SELECT rango, COUNT(*) total FROM caballeros WHERE ejercito = 'Athena' GROUP BY rango HAVING total >= 4;

-- CONSULTAR EL PRECIO Y PRECIO MÁXIMO DEL CAMPO DE UNA TABLA
SELECT nombre, precio, MAX(precio) precio_maximo FROM productos GROUP BY precio, nombre HAVING precio_maximo >= 10000;

-- ::::: DML: CLAUSULA 'DISTINCT' PARA OMITIR O DESCARTAR LOS VALORES REPETIDOS DE UN CAMPO DE UNA TABLA :::::

-- CONSULTAR TODOS LOS VALORES DE UNA TABLA 
SELECT signo FROM caballeros;

-- CONSULTAR LOS VALORES SIN REPETIR O UNICOS DE UNA TABLA
SELECT DISTINCT signo FROM caballeros;
SELECT DISTINCT armadura FROM caballeros;
SELECT DISTINCT rango FROM caballeros;
SELECT DISTINCT ejercito FROM caballeros;
SELECT DISTINCT pais FROM caballeros;

-- ::::: DML: CLAUSULA 'ORDER BY' ORDENAR LOS VALORES DE UN CAMPO AL SER CONSULTADO :::::
SELECT * FROM caballeros;

-- ORDEN ASCENDENTE POR UN DETERMINADO CAMPO
SELECT * FROM caballeros ORDER BY nombre ASC;

-- ORDEN DESCENDENTE POR UN DETERMINADO CAMPO
SELECT * FROM caballeros ORDER BY nombre DESC;

-- ORDEN DESCENDENTE POR UN CONJUNTO DETERMINADO DE CAMPOS
SELECT * FROM caballeros ORDER BY nombre, signo DESC;
SELECT * FROM caballeros ORDER BY nombre, armadura DESC;

--  ORDEN DE UNA SENTENCIA: CONDICIONALES -> AGRUPAMIENTOS -> CAMPOS -> VALORES -> ORDENAMIENTO
SELECT * FROM caballeros WHERE ejercito = 'Athena' ORDER BY nombre, armadura DESC;
SELECT ejercito, COUNT(*) total FROM caballeros GROUP BY ejercito ORDER BY ejercito DESC;
SELECT nombre, precio, MAX(precio) precio_maximo FROM productos GROUP BY precio, nombre HAVING precio_maximo >= 1000 ORDER BY nombre;

-- ::::: DML: CLAUSULA 'BETWEEN' PARA CONSULTAR LOS VALORES DE UN CAMPO DE UNA TABLA EN BASE A UN RANGO :::::
SELECT * FROM productos WHERE precio >= 5000 AND precio <= 15000;
SELECT * FROM productos WHERE precio BETWEEN 5000 AND 15000;

-- ::::: DML: EXPRESIONES REGULARES :::::
SELECT * FROM productos WHERE nombre REGEXP "[a-z]";
SELECT * FROM productos WHERE nombre REGEXP "[x-z]";
SELECT * FROM productos WHERE precio REGEXP "[0-9]";
SELECT * FROM productos WHERE descripcion REGEXP "[0-9]";

-- :::::::::: DML: FUNCIONES DE CADENAS DE TEXTO ::::::::::
SELECT('Hello World') texto;
SELECT LOWER('Hello World') minusculas;
SELECT LCASE('Hello World') minusculas;
SELECT UPPER('Hello World') mayusculas;
SELECT UCASE('Hello World') mayúsculas;

SELECT LEFT('Hello World',6);
SELECT RIGHT('Hello World',6);
SELECT LENGTH('Hello World');
SELECT REPEAT('Hello World',3);
SELECT REVERSE('Hello World');
SELECT REPLACE('Hello World','o','x');
SELECT LTRIM('   Hello World   ');
SELECT RTRIM('   Hello World   ');
SELECT TRIM('   Hello World   ');
SELECT CONCAT('Hello World', ' from ','SQL');
SELECT CONCAT_WS('-','Hello', 'World', 'from','SQL');

SELECT UCASE(nombre), LCASE(descripcion) FROM productos;