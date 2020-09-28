SELECT w.`deposit_group` AS `deposit_group`
FROM `wizzard_deposits` AS w
GROUP BY w.`deposit_group`
ORDER BY AVG(w.`magic_wand_size`)
LIMIT 1

