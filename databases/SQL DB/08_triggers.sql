-- ::::: DDL: TRIGGERS | DISPARADORES :::::
/*
DELIMITER //
CREATE TRIGGER trigger_name
    BEFORE | AFTER
    INSERT | UPDATE | DELETE
    ON external_table_reference
    FOR EACH NOW
BEGIN
END //
DELIMITER ;
*/

-- Log de actividades / Bitácora de actividades

CREATE TABLE actividad_clientes(
  ac_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  cliente INT UNSIGNED,
  fecha DATETIME,
  FOREIGN KEY (cliente)
    REFERENCES clientes(cliente_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

-- CREAR UN TRIGGER

DELIMITER //
CREATE TRIGGER tg_actividad_clientes
    AFTER INSERT
    ON clientes
    FOR EACH ROW
BEGIN
  INSERT INTO actividad_clientes VALUES(0, NEW.cliente_id, NOW());
END //
DELIMITER ;


-- LISTAR TRIGGERS EXISTENTES EN UNA DB
SHOW TRIGGERS FROM curso_sql;

-- ELIMINAR UN TRIGGER
DROP TRIGGER tg_actividad_clientes;

-- SENTENCIAS DE CONSULTA DEL TEMA
SELECT NOW();
SELECT * FROM actividad_clientes;

CALL sp_asignar_servicio(1,'William','billy_dog@mail.com','000011112222444',@res);
SELECT @res;