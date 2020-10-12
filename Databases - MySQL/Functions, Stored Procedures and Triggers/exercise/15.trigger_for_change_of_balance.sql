CREATE TABLE IF NOT EXISTS `logs` (
	`log_id` INT AUTO_INCREMENT PRIMARY KEY,
    `account_id` INT,
    `old_sum` DECIMAL(19,4),
    `new_sum` DECIMAL(19,4)
);

DROP TRIGGER IF EXISTS `accounts_change_balance`;
DELIMITER $$
CREATE TRIGGER `accounts_change_balance` AFTER UPDATE ON `accounts` FOR EACH ROW BEGIN
	INSERT INTO `logs` (`account_id`,`old_sum`,`new_sum`)
    VALUES (OLD.`id`,OLD.`balance`,NEW.`balance`);
END$$
DELIMITER ;
