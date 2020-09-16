CREATE TABLE `employees` (
	`id` INT AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `title` VARCHAR(50),
    `notes` TEXT,
    PRIMARY KEY (`id`)
);

CREATE TABLE `customers` (
	`account_number` INT AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(50) NOT NULL, 
    `last_name` VARCHAR(50) NOT NULL, 
    `phone_number` VARCHAR(50),
    `emergency_name` VARCHAR(50),
    `emergency_number` INT, 
    `notes` TEXT
);

CREATE TABLE `room_status` (
 `room_status` INT AUTO_INCREMENT PRIMARY KEY,
 `notes` TEXT
);

CREATE TABLE `room_types` (
	`room_type` INT AUTO_INCREMENT PRIMARY KEY,
    `notes` TEXT
);

CREATE TABLE `bed_types` (
	`bed_type` INT AUTO_INCREMENT PRIMARY KEY,
    `notes` TEXT
);

CREATE TABLE `rooms` (
	`room_number` INT AUTO_INCREMENT PRIMARY KEY,
    `room_type` INT, 
    `bed_type` INT,
    `rate` DECIMAL(10,2), 
    `room_status` INT, 
    `notes` TEXT
);

CREATE TABLE `payments` (
`id` INT AUTO_INCREMENT PRIMARY KEY, 
`employee_id` INT, 
`payment_date` DATE, 
`account_number` INT, 
`first_date_occupied` DATE, 
`last_date_occupied` DATE, 
`total_days` INT, 
`amount_charged` DECIMAL(10,2), 
`tax_rate` INT, 
`tax_amount` DECIMAL(10,2), 
`payment_total` DECIMAL(10,2), 
`notes` TEXT
);

CREATE TABLE `occupancies` (
 `id` INT AUTO_INCREMENT PRIMARY KEY, 
 `employee_id` INT,
 `date_occupied` DATE,
 `account_number` INT, 
 `room_number` INT,
 `rate_applied` DECIMAL(10,2),
 `phone_charge` DECIMAL(10,2),
 `notes` TEXT
);

