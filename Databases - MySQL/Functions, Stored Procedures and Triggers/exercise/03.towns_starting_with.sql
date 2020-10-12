DROP PROCEDURE IF EXISTS `usp_get_towns_starting_with`;
DELIMITER $$
CREATE PROCEDURE `usp_get_towns_starting_with`(`letter` VARCHAR(50))
BEGIN
	SELECT t.`name` 
    FROM `towns` AS t
    WHERE t.`name` LIKE CONCAT(`letter`,"%")
    ORDER BY t.`name`; 
END$$
DELIMITER ;
