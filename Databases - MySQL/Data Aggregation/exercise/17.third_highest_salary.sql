SELECT e.`department_id`, (SELECT d.`salary`
FROM `employees` AS d
WHERE  d.`department_id` = e.`department_id`
GROUP BY d.`salary`
ORDER BY d.`salary` DESC
LIMIT 1 OFFSET 2) AS `salary`
FROM `employees` AS e
GROUP BY e.`department_id`
HAVING `salary` IS NOT NULL
ORDER BY e.`department_id`

