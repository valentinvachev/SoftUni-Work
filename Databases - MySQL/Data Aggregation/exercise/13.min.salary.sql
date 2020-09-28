SELECT e.`department_id`, MIN(e.`salary`) AS `minimum_salary`
FROM `employees` AS e 
WHERE e.`hire_date` > "2000-01-01" 
GROUP BY e.`department_id`
HAVING e.`department_id` IN (2,5,7)
ORDER BY `department_id`;