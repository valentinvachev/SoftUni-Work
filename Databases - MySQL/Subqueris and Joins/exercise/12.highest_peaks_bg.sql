SELECT c.`country_code`, m.`mountain_range`, p.`peak_name`, p.`elevation`
FROM `peaks` AS p
JOIN `mountains` AS m
ON p.`mountain_id` = m.`id`
JOIN `mountains_countries` AS c
ON m.`id` = c.`mountain_id`
WHERE p.`elevation` > 2835 AND c.`country_code` = "BG"
ORDER BY p.`elevation` DESC;