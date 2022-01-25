
drop user if exists 'adminContactDB'@'localhost';
create user 'adminContactDB'@'localhost' identified WITH mysql_native_password by 'hello';

drop database if exists `contactdb`;
CREATE DATABASE `contactdb` 
GRANT all privileges ON contactDB.* TO 'adminContactDB'@'localhost';


use contactdb;



DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(25) NOT NULL,
  `firstName` varchar(20)  NOT NULL,
  `lastName` archar(50) NOT NULL,
  `subject` varchar(20) NOT NULL,
  `registered` datetime NOT NULL,
  `description` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(20) NOT NULL,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
