CREATE TABLE `people` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(200) NOT NULL,
    `picture` BLOB,
    `height` DOUBLE(10,2),
    `weight` DOUBLE(10,2),
    `gender` CHAR NOT NULL,
    `birthdate` DATE NOT NULL,
    `biography` TEXT 
);