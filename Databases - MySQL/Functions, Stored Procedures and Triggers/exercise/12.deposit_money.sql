DROP PROCEDURE IF EXISTS  `usp_deposit_money`;
DELIMITER $$
CREATE PROCEDURE `usp_deposit_money`(`account_id` INT,`money_amount` DECIMAL(10,4))
BEGIN
	START TRANSACTION;
    IF (`money_amount` > 0)
    THEN 
	UPDATE `accounts` AS a
    SET a.`balance` = a.`balance`+`money_amount`
    WHERE a.`id` = `account_id`;
    COMMIT;
    ELSE 
    ROLLBACK;
    END IF;
END$$
DELIMITER ;