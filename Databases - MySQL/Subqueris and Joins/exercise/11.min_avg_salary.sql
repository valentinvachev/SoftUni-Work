SELECT MIN(d.`avg_salary`) AS `min_average_salary`
FROM (SELECT AVG(e.`salary`) AS `avg_salary`
FROM `employees` AS e
GROUP BY e.`department_id`) AS d