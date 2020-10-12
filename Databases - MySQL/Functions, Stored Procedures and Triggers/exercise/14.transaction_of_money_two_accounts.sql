DROP PROCEDURE IF EXISTS `usp_transfer_money`;
DELIMITER $$
CREATE PROCEDURE `usp_transfer_money`(`from_account_id` INT, `to_account_id` INT, `amount` DOUBLE)
BEGIN
	START TRANSACTION;
    IF ((SELECT COUNT(a.`id`) AS `count` FROM `accounts` AS a WHERE a.`id` = `from_account_id` OR a.`id` = `to_account_id`)=2
    AND `amount`>=0 AND ((SELECT b.`balance` FROM `accounts` AS b WHERE b.`id` = `from_account_id`)-`amount`) >= 0) 
    THEN 
		UPDATE `accounts` AS c
        SET c.`balance` = c.`balance` - `amount`
        WHERE c.`id` = `from_account_id`;
		
        UPDATE `accounts` AS d
        SET d.`balance` = d.`balance` + `amount`
        WHERE d.`id` = `to_account_id`;
		
		COMMIT;
    ELSE 
		ROLLBACK;
    END IF;    
END$$
DELIMITER ;