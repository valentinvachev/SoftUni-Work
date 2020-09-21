SELECT `town_id`, `name`
FROM `towns`
WHERE `name` REGEXP "\^[M,B,K,E]\\w+"
ORDER BY `name`;