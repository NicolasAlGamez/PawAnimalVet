-- Creación de la base de datos tienda_mascotas
CREATE DATABASE TiendaMascotas;
USE TiendaMascotas;

-- Creación de la tabla para la agendación de citas
CREATE TABLE cita_peluqueria_canina (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(100) NOT NULL,
    apellido_cliente VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    nombre_perro VARCHAR(100) NOT NULL,
    raza_perro VARCHAR(100) NOT NULL,
    edad_perro INT NOT NULL,
    fecha_cita DATE NOT NULL
);

SELECT * FROM cita_peluqueria_canina;

-- Solución error ER_NOT_SUPPORTED_AUTH_MODE
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Nico123.';