CREATE TABLE IF NOT EXISTS `categories` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `category` VARCHAR(50) NOT NULL,
    `daily_rate` DECIMAL(10,2),
    `weekly_rate` DECIMAL (10,2),
    `monthly_rate` DECIMAL (10,2),
    `weekend_rate` DECIMAL (10,2)
);

CREATE TABLE IF NOT EXISTS`cars` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `plate_number` INT NOT NULL, 
    `make` VARCHAR(50), 
    `model` VARCHAR(50) ,
    `car_year` DATE, 
    `category_id` INT NOT NULL,
    `doors` INT,
    `picture` BLOB,
    `car_condition` TEXT,
    `available` CHAR(5)
);

CREATE TABLE IF NOT EXISTS`employees` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `title` VARCHAR(50),
    `notes` TEXT
);

CREATE TABLE IF NOT EXISTS`customers` (
`id` INT AUTO_INCREMENT PRIMARY KEY, 
`driver_licence_number` INT, 
`full_name` VARCHAR(50),
 `address` VARCHAR(50), 
 `city` VARCHAR(50),
 `zip_code` INT, 
 `notes` TEXT
);

CREATE TABLE IF NOT EXISTS `rental_orders` (
`id` INT AUTO_INCREMENT PRIMARY KEY,
 `employee_id` INT NOT NULL, 
 `customer_id` INT NOT NULL, 
 `car_id` INT NOT NULL, 
 `car_condition` TEXT, 
 `tank_level` INT, 
 `kilometrage_start` INT, 
 `kilometrage_end` INT, 
 `total_kilometrage` INT,
 `start_date` DATE, 
 `end_date` DATE,
 `total_days` INT,
 `rate_applied` DECIMAL(10,2), 
 `tax_rate` INT, 
 `order_status` VARCHAR(50), 
 `notes` TEXT
);
