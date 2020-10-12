DELIMITER $$
DROP PROCEDURE `usp_raise_salaries`;
CREATE PROCEDURE `usp_raise_salaries`(`department_name` VARCHAR(50))
BEGIN
UPDATE `employees` AS e
SET e.`salary` = e.`salary`*1.05
WHERE e.`department_id` IN (SELECT d.`department_id`
FROM `departments` AS d
WHERE d.`name` = `department_name`);
END$$