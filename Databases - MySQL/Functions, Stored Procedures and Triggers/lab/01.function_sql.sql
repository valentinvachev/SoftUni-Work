DELIMITER $$
DROP FUNCTION `ufn_count_employees_by_town`;
CREATE FUNCTION `ufn_count_employees_by_town`(`town_name` VARCHAR(50)) RETURNS INT
    DETERMINISTIC
BEGIN 
DECLARE count INT;
SET count := (SELECT COUNT(e.`employee_id`) AS `count`
FROM `towns` AS t
JOIN `addresses` AS a
ON t.`town_id` = a.`town_id` 
JOIN `employees` AS e
ON e.`address_id` = a.`address_id`
WHERE t.`name` = `town_name`
GROUP BY t.`name`);
RETURN count;
END$$