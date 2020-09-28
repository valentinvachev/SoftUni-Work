SELECT LEFT(w.`first_name`,1) AS `first_letter`
FROM `wizzard_deposits` AS w
WHERE w.`deposit_group` = "Troll Chest"
GROUP BY `first_letter`
ORDER BY `first_letter`;