DELIMITER $$
DROP PROCEDURE `usp_raise_salary_by_id`;
CREATE PROCEDURE `usp_raise_salary_by_id`(`id` INT)
BEGIN
	START TRANSACTION;
    IF ((SELECT COUNT(*) FROM `employees` AS e WHERE e.`employee_id` = `id`) >= 1) 
    THEN 
		UPDATE `employees` AS e
		SET e.`salary` = e.`salary`*1.05
        WHERE e.`employee_id` = `id`;
        COMMIT;
    ELSE
     ROLLBACK;
     END IF;
END$$