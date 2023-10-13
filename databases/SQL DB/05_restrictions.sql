-- RECURSOS DE LA SECCIÓN
CREATE DATABASE curso_sql;

DROP DATABASE curso_sql;

USE curso_sql;

SHOW TABLES;

DROP TABLE armaduras;


-- :::::::::: DDL: MOTORES DE TABLAS ::::::::::

CREATE TABLE armaduras_myisam (
  armadura_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  armadura VARCHAR(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

CREATE TABLE armaduras_innodb (
  armadura_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  armadura VARCHAR(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SHOW TABLES;

-- :::::::::: DDL: TABLAS + RESTRICCIONES ::::::::::

-- SIN RESTRICCIONES
CREATE TABLE lenguajes (
  lenguaje_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  lenguaje VARCHAR(30) NOT NULL
);

CREATE TABLE frameworks (
  framework_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  framework VARCHAR(30) NOT NULL,
  lenguaje INT UNSIGNED,
  FOREIGN KEY (lenguaje) REFERENCES lenguajes(lenguaje_id)
);

CREATE TABLE entornos (
  entorno_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  entorno VARCHAR(30) NOT NULL
);

-- CON RESTRICCIONES

CREATE TABLE frameworks (
  framework_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  framework VARCHAR(30) NOT NULL,
  lenguaje INT UNSIGNED,
  FOREIGN KEY (lenguaje) REFERENCES lenguajes(lenguaje_id)
    ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE frameworks (
  framework_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  framework VARCHAR(30) NOT NULL,
  lenguaje INT UNSIGNED,
  entorno INT UNSIGNED,
  FOREIGN KEY (lenguaje)
    REFERENCES lenguajes(lenguaje_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  FOREIGN KEY (entorno)
    REFERENCES entornos(entorno_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

INSERT INTO lenguajes (lenguaje) VALUES
  ("JavaScript"),
  ("PHP"),
  ("Python"),
  ("Ruby"),
  ("JAVA");


INSERT INTO entornos (entorno) VALUES
  ("Frontend"),
  ("Backend");


INSERT INTO frameworks (framework, lenguaje) VALUES
  ("React", 1),
  ("Angular", 1),
  ("Vue", 1),
  ("Svelte", 1),
  ("Laravel", 2),
  ("Symfony", 2),
  ("Flask", 3),
  ("Django", 3),
  ("On Rails", 4);

INSERT INTO frameworks (framework, lenguaje, entorno) VALUES
  ("React", 1, 1),
  ("Angular", 1, 1),
  ("Vue", 1, 1),
  ("Svelte", 1, 1),
  ("Laravel", 2, 2),
  ("Symfony", 2, 2),
  ("Flask", 3, 2),
  ("Django", 3, 2),
  ("On Rails", 4, 2);


SHOW TABLES;
SELECT * FROM lenguajes;
SELECT * FROM frameworks;
SELECT * FROM entornos;

-- SUB-CONSULTAS
SELECT * 
FROM frameworks f
INNER JOIN lenguajes l ON f.lenguaje = l.lenguaje_id;

SELECT * 
FROM frameworks f
INNER JOIN lenguajes l ON f.lenguaje = l.lenguaje_id
INNER JOIN entornos e ON f.entorno = e.entorno_id;


DROP TABLE lenguajes;
DROP TABLE entornos;
DROP TABLE frameworks;

-- ::::: RESTRICCIONES :::::

-- POR DEFECTO
DELETE FROM lenguajes WHERE lenguaje_id = 3;
DELETE FROM lenguajes WHERE lenguaje_id = 5;

UPDATE lenguajes SET lenguaje_id = 13 WHERE lenguaje_id = 3; 

-- ON DELETE RESTRICT 'TABLA lenguajes'
DELETE FROM lenguajes WHERE lenguaje_id = 3;
DELETE FROM entornos WHERE entorno_id = 1;
-- ON UPDATE CASCADE 'TABLA lenguajes'
UPDATE lenguajes SET lenguaje_id = 13 WHERE lenguaje_id = 3; 
UPDATE entornos SET entorno_id = 19 WHERE entorno_id = 1; 