 CREATE TABLE IF NOT EXISTS `users` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(30) NOT NULL,
    `password` VARCHAR(26) NOT NULL,
    `profile_picture` BLOB,
    `last_login_time` TIMESTAMP,
    `is_deleted` VARCHAR(5)
);
