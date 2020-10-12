DROP PROCEDURE IF EXISTS  `usp_get_holders_with_balance_higher_than`;
DELIMITER $$
CREATE PROCEDURE `usp_get_holders_with_balance_higher_than`(`number` INT)
BEGIN
SELECT t.`first_name`, t.`last_name`
FROM (SELECT ac.`first_name`,ac.`last_name`, SUM(a.`balance`) AS `balance`
FROM `accounts` AS a
JOIN `account_holders` AS ac
ON a.`account_holder_id` = ac.`id`
GROUP BY a.`account_holder_id`
HAVING `balance` > `number`
ORDER BY a.`account_holder_id`) AS t;
END$$
DELIMITER ;