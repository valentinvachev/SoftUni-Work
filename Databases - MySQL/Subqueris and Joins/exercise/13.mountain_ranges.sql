SELECT mc.`country_code`, COUNT(mc.`mountain_id`) AS `mountain_range`
FROM `mountains_countries` AS mc
JOIN `countries` AS c
ON mc.`country_code` = c.`country_code`
WHERE c.`country_name` IN ("Bulgaria","Russia","United States")
GROUP BY mc.`country_code`
ORDER BY `mountain_range` DESC;