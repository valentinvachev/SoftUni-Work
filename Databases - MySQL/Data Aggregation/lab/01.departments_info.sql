SELECT e.department_id,COUNT(e.id) AS `Number of employees`
FROM employees AS e
GROUP BY e.department_id
ORDER BY e.department_id,`Number of employees`;