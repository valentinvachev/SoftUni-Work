SELECT z.`continent_code`, z.`currency_code`, z.`currency` AS `currency_usage`
FROM (SELECT f.`continent_code`, f.`currency_code`, COUNT(f.`country_name`) AS `currency`
FROM `countries` AS f
GROUP BY f.`continent_code`, f.`currency_code`) AS z
JOIN (SELECT s.`continent_code`, MAX(s.`currency`) AS `max_times_used`
FROM (SELECT f.`continent_code`, f.`currency_code`, COUNT(f.`country_name`) AS `currency`
FROM `countries` AS f
GROUP BY f.`continent_code`, f.`currency_code`
HAVING `currency` > 1) AS s
GROUP BY s.`continent_code`) AS y
ON y.`continent_code` = z.`continent_code` AND z.`currency` = y.`max_times_used`
ORDER BY z.`continent_code`, z.`currency_code`;