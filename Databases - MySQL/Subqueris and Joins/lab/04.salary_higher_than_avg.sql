SELECT COUNT(*) AS `count`
FROM `employees` AS d
WHERE d.`salary` > (SELECT AVG(e.`salary`)
FROM `employees` AS e);