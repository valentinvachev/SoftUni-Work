SELECT CONCAT(`first_name`," ",`last_name`) AS `Full Name`,IFNULL(TIMESTAMPDIFF(DAY,`born`,`died`),"Still alive") AS `Days Lived`
FROM `authors`