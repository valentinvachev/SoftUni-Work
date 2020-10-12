DROP PROCEDURE IF EXISTS `usp_withdraw_money`;
DELIMITER $$
CREATE PROCEDURE `usp_withdraw_money`(`account_id` INT,`money_amount` DOUBLE)
BEGIN
	START TRANSACTION;
    IF (`money_amount`> 0 AND ((SELECT a.`balance` FROM `accounts` AS a WHERE a.`id` = `account_id`) - `money_amount`) >= 0) 
    THEN
		UPDATE `accounts` AS a
        SET a.`balance` = a.`balance` - `money_amount`
        WHERE a.`id` = `account_id`;
        COMMIT;
     ELSE 
		ROLLBACK;
     END IF;   
END$$
DELIMITER ;