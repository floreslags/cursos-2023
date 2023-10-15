--- ::: RECURSOS :::
USE curso_sql;

SHOW TABLES;

CREATE TABLE suscripciones (
  suscripcion_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  suscripcion VARCHAR(30) NOT NULL,
  costo DECIMAL(5,2) NOT NULL
);

INSERT INTO suscripciones VALUES
  (0, 'Bronce', 199.99),
  (0, 'Plata', 299.99),
  (0, 'Oro', 399.99);

CREATE TABLE clientes (
  cliente_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL,
  correo VARCHAR(50) UNIQUE
);

CREATE TABLE tarjetas (
  tarjeta_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  cliente INT UNSIGNED,
  tarjeta BLOB,
  FOREIGN KEY (cliente)
    REFERENCES clientes(cliente_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE servicios(
  servicio_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  cliente INT UNSIGNED,
  tarjeta INT UNSIGNED,
  suscripcion INT UNSIGNED,
  FOREIGN KEY(cliente)
    REFERENCES clientes(cliente_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  FOREIGN KEY(tarjeta)
    REFERENCES tarjetas(tarjeta_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  FOREIGN KEY(suscripcion)
    REFERENCES suscripciones(suscripcion_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE actividad_clientes(
  ac_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  cliente INT UNSIGNED,
  fecha DATETIME,
  FOREIGN KEY (cliente)
    REFERENCES clientes(cliente_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);


-- :::::::::: PROCEDIMIENTO ALMACENADO ::::::::::

-- CREAR ESTRUCTURA BÁSICA
DELIMITER //
CREATE PROCEDURE sp_obtener_suscripciones()
BEGIN

SELECT * FROM suscripciones;

END //
DELIMITER ;

-- INVOCAR UN PROCEDIMIENTO ALMACENADO
CALL sp_obtener_suscripciones();

-- ELIMINAR UN PROCEDIMIENTO
DROP PROCEDURE sp_obtener_suscripciones;

-- LISTAR LOS PROCEDIMIENTOS ALMACENADOS CREADOS EN UNA DB



-- ::: CREAR PROCEDIMIENTO ALMACENADO 2 ::: 

DELIMITER //
CREATE PROCEDURE sp_asignar_servicio(
    IN _suscripcion INT UNSIGNED,
    IN _nombre VARCHAR(30),
    IN _correo VARCHAR(50),
    IN _tarjeta VARCHAR(16),
    OUT respuesta_ VARCHAR(50)
)
BEGIN

    DECLARE existe_correo INT DEFAULT 0;
    DECLARE cliente_id INT DEFAULT 0;
    DECLARE tarjeta_id INT DEFAULT 0;

    START TRANSACTION;

        SELECT COUNT(*) INTO existe_correo FROM clientes WHERE correo = _correo;
        IF existe_correo <> 0 THEN
            SELECT 'Tu correo ya ha sido registrado' INTO respuesta_;
        ELSE
            INSERT INTO clientes VALUES (0,_nombre,_correo);
            SELECT LAST_INSERT_ID() INTO cliente_id;
            INSERT INTO tarjetas VALUES (0,cliente_id,AES_ENCRYPT(_tarjeta,cliente_id));
            SELECT LAST_INSERT_ID() INTO tarjeta_id;
            INSERT INTO servicios VALUES(0,cliente_id,tarjeta_id,_suscripcion);
            SELECT 'Servicio asignado exitosamente' INTO respuesta_;
        END IF;

    COMMIT;

END //
DELIMITER ;

CALL sp_asignar_servicio(3,'Sergio','floreslags@mail.com','0000111122223333',@res);
SELECT @res;

-- ::: CONSULTAS DE TABLAS :::
SELECT * FROM suscripciones;
SELECT * FROM clientes;
SELECT * FROM tarjetas;
SELECT * FROM servicios;
SELECT * FROM actividad_clientes;

SHOW PROCEDURE STATUS WHERE db = 'curso_sql';
DROP PROCEDURE sp_asignar_servicio;