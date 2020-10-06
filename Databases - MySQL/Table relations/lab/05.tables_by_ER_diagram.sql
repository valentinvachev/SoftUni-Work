CREATE TABLE `clients` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`client_name` VARCHAR(100)
);

CREATE TABLE `employees` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(50),
    `last_name` VARCHAR(50),
   `project_id` INT UNIQUE
);

CREATE TABLE `projects` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `client_id` INT,
    `project_lead_id` INT,
    CONSTRAINT `fk_projects_clients`
    FOREIGN KEY (`client_id`)
    REFERENCES `clients`(`id`),
    CONSTRAINT `fk_projects_employees`
    FOREIGN KEY (`project_lead_id`)
    REFERENCES `employees`(`id`)
);

ALTER TABLE `employees` 
ADD CONSTRAINT `fk_employees_projects`
FOREIGN KEY (`project_id`)
REFERENCES `projects`(`id`);