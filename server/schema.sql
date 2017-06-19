DROP DATABASE IF EXISTS musictodoly;

CREATE DATABASE musictodoly;

USE musictodoly;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  user_id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_name varchar(20) NOT NULL,
  first_name varchar(20) NOT NULL,
  last_name varchar(20) NOT NULL
);

DROP TABLE IF EXISTS list_items;

CREATE TABLE IF NOT EXISTS list_items (
  list_item_id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  artist varchar(30) NOT NULL,
  listened boolean,
  liked boolean,
  song varchar(30)
);


/* populate tables with some samle data */

INSERT INTO users (user_name, first_name, last_name) VALUES ("michaeljclausen", "Michael", "Clausen");

INSERT INTO users (user_name, first_name, last_name) VALUES ("beth", "Beth", "Johnson");

INSERT INTO users (user_name, first_name, last_name) VALUES ("Fredx", "Fred", "Zirdung");

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
