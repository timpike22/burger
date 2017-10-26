drop database if exists burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;


CREATE TABLE burgers(
	id int  AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN,
	dt DATETIME,
	PRIMARY KEY (id)
	);
 
