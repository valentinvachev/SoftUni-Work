CREATE TABLE `directors` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `director_name` VARCHAR(50) NOT NULL,
    `notes` TEXT
);

CREATE TABLE `genres` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `genre_name` VARCHAR(50) NOT NULL,
    `notes` TEXT
);

CREATE TABLE `categories` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `category_name` VARCHAR(50) NOT NULL,
    `notes` TEXT
);

CREATE TABLE `movies` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(50) NOT NULL,
    `director_id` INT NOT NULL,
    `copyright_year` DATE,
    `length` DOUBLE(10,2),
    `genre_id` INT NOT NULL,
    `category_id` INT NOT NULL,
    `rating` INT,
    `notes` TEXT
);
