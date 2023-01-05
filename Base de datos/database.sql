CREATE DATABASE IF NOT EXISTS APLICACIONESWEB;

use APLICACIONESWEB;

CREATE table IF NOT EXISTS organizacion(
idOrganizacion INT NOT NULL auto_increment PRIMARY KEY,
nombre VARCHAR(180),
foto VARCHAR(200),
descripcion VARCHAR(255),
mision VARCHAR(255),
vision VARCHAR(255),
valores VARCHAR(255),
created_at timestamp DEFAULT current_timestamp
);

CREATE table IF NOT EXISTS personal(
cedula INT NOT NULL PRIMARY KEY,
idOrganizacion INT NOT NULL,
nombre VARCHAR(180),
apellido_1 VARCHAR(200),
apellido_2 VARCHAR(255),
telefono VARCHAR(255),
email VARCHAR(255),
rol VARCHAR(255),
FOREIGN KEY (idOrganizacion) REFERENCES organizacion(idOrganizacion) ON DELETE CASCADE
);

CREATE table IF NOT EXISTS mensajesReceived(
idMensaje INT NOT NULL auto_increment PRIMARY KEY,
idOrganizacion INT NOT NULL,
correo VARCHAR(180),
nombres_remitente VARCHAR(200),
telefono VARCHAR(255),
asunto VARCHAR(255),
cuerpo_mensaje VARCHAR(255),
FOREIGN KEY (idOrganizacion) REFERENCES organizacion(idOrganizacion) ON DELETE CASCADE
);

CREATE table IF NOT EXISTS productos(
codigo INT NOT NULL auto_increment PRIMARY KEY,
idOrganizacion INT NOT NULL,
nombre VARCHAR(180),
descripcion VARCHAR(200),
foto VARCHAR(300),
FOREIGN KEY (idOrganizacion) REFERENCES organizacion(idOrganizacion) ON DELETE CASCADE
);

alter user 'root'@'localhost' identified with mysql_native_password by 'Admin123';