SELECT SUM(w.`deposit_amount`-c.`deposit_amount`) AS `sum_difference`
FROM `wizzard_deposits` AS w
JOIN (SELECT w.`id`, w.`deposit_amount`
FROM `wizzard_deposits` AS w) AS c
ON w.`id`+1 = c.`id`
