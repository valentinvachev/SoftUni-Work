CREATE TABLE `passports` (
	`passport_id` INT AUTO_INCREMENT PRIMARY KEY,
	`passport_number` VARCHAR(50)
);


CREATE TABLE `people` (
	`person_id` INT AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(50),
    `salary` DECIMAL(10,2),
    `passport_id` INT UNIQUE, 
    CONSTRAINT `fk_persons_passports`
    FOREIGN KEY (`passport_id`)
    REFERENCES `passports`(`passport_id`)
);


INSERT INTO `passports`
VALUES (101,"N34FG21B"),
(102,"K65LO4R7"),
(103,"ZE657QP2");

INSERT INTO `people`
VALUES (1,"Roberto",43300.00,102),
(2,"Tom",56100.00,103),
(3,"Yana",60200.00,101);







