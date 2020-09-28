SELECT COUNT(p.id) AS `Count`
FROM products AS p
WHERE p.price > 8
GROUP BY p.category_id
HAVING p.category_id = 2;


