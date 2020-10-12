DROP FUNCTION IF EXISTS `ufn_get_salary_level`;
DROP PROCEDURE IF EXISTS `usp_get_employees_by_salary_level`;

DELIMITER $$
CREATE FUNCTION `ufn_get_salary_level`(`salary` DECIMAL(19,3)) RETURNS varchar(10)
    DETERMINISTIC
BEGIN	
DECLARE `salary_level` VARCHAR(10);
    
    IF (`salary` < 30000) THEN SET `salary_level` := "Low";
    ELSEIF  (`salary` <= 50000) THEN SET `salary_level` := "Average";
    ELSE SET `salary_level` := "High";
	
    END IF;
    
    RETURN `salary_level`;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE `usp_get_employees_by_salary_level`(`level_salary` VARCHAR(50))
BEGIN 
	SELECT e.`first_name`, e.`last_name`
	FROM `employees` AS e
	WHERE (SELECT `ufn_get_salary_level`(e.`salary`) = `level_salary`)
    ORDER BY e.`first_name` DESC, e.`last_name` DESC;
END$$
DELIMITER ;