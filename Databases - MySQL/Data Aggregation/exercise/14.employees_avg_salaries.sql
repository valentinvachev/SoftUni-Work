CREATE TABLE `new_table` AS 
SELECT *
FROM `employees` AS e
WHERE e.`salary` > 30000 AND e.`manager_id` <> 42;

UPDATE `new_table` AS n
SET n.`salary` = n.`salary` + 5000
WHERE n.`department_id` = 1;

SELECT n.`department_id`, AVG(n.`salary`) AS `avg_salary`
FROM `new_table` AS n
GROUP BY  n.`department_id`
ORDER BY n.`department_id`;


