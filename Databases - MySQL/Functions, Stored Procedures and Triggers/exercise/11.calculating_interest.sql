DROP FUNCTION IF EXISTS `ufn_calculate_future_value`;
DROP PROCEDURE IF EXISTS `usp_calculate_future_value_for_account`;
DELIMITER $$
CREATE FUNCTION `ufn_calculate_future_value` (`sum` DECIMAL (19,4), `yearly_interest_rate` DOUBLE, `number_of_years` INT )
RETURNS DECIMAL (19,4)
DETERMINISTIC
BEGIN
RETURN sum * pow( 1 + `yearly_interest_rate`, `number_of_years`);
END$$

CREATE PROCEDURE `usp_calculate_future_value_for_account` (`id` INT, `interest` DOUBLE (19,4) )
BEGIN
SELECT a.`id`, ah.`first_name`, ah.`last_name`, a.`balance`,
`ufn_calculate_future_value` (a.`balance`, `interest`, 5 ) AS `balance_in_5_years`
FROM `accounts` as a
JOIN `account_holders` as ah
ON ah.`id` = a.`account_holder_id`
WHERE a.`id` = `id`;
END$$