ALTER TABLE `minions`
ADD `town_id` INT,
ADD CONSTRAINT `fk_minons_towns`
FOREIGN KEY (`town_id`) REFERENCES `towns`(`id`);