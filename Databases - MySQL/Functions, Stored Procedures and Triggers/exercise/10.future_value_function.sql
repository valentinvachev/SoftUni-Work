DROP FUNCTION IF EXISTS  `ufn_calculate_future_value`;
DELIMITER $$
CREATE FUNCTION `ufn_calculate_future_value`(`sum` DECIMAL (10,4),`yealy_interest` DOUBLE,`years` INT) RETURNS decimal(10,4)
    DETERMINISTIC
BEGIN
	DECLARE `FV` DECIMAL(10,4);
    
    SET `FV` := `sum`*(POW(1+`yealy_interest`,`years`));
RETURN `FV`;
END$$
DELIMITER ;