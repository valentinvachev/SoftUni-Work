CREATE TABLE IF NOT EXISTS `deleted_employees` (
  `employee_id` INT AUTO_INCREMENT,
  `first_name` VARCHAR(50) DEFAULT NULL,
  `last_name` VARCHAR(50) DEFAULT NULL,
  `middle_name` VARCHAR(50) DEFAULT NULL,
  `job_title` VARCHAR(50) DEFAULT NULL,
  `department_id` INT DEFAULT NULL,
  `salary` DECIMAL(19,4) DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
); 

DROP TRIGGER IF EXISTS `employee_after_delete`;
DELIMITER $$
CREATE TRIGGER `employee_after_delete` AFTER DELETE ON `employees` FOR EACH ROW BEGIN
	INSERT INTO `deleted_employees` (`first_name`,`last_name`,`middle_name`,`job_title`,`deparment_id`,`salary`)
    VALUES (OLD.`first_name`,OLD.`last_name`,OLD.`middle_name`,OLD.`job_title`,OLD.`department_id`,OLD.`salary`);
END$$
DELIMITER ;

