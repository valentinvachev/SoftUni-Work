ALTER TABLE `users`
DROP PRIMARY KEY,
ADD CONSTRAINT `pk_users_id`
PRIMARY KEY (`id`),
ADD CONSTRAINT `unique_username`
UNIQUE (`username`);