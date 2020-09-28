SELECT e.`first_name`, e.`last_name`, e.`department_id`
FROM `employees` AS e
JOIN (SELECT e.`department_id`, AVG(e.`salary`) AS `average`
FROM `employees` AS e
GROUP BY e.`department_id`) AS c
ON e.`department_id` = c.`department_id`
WHERE e.`salary` > c.`average`
ORDER BY e.`department_id`,e.`employee_id`
LIMIT 10;