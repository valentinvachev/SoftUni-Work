CREATE TABLE `mountains` (
`id` INT AUTO_INCREMENT, 
`name` VARCHAR(50) NOT NULL,
CONSTRAINT `pk_id`
PRIMARY KEY (`id`) 
);


CREATE TABLE `peaks` (
`id` INT AUTO_INCREMENT,
`name` VARCHAR(50) NOT NULL,
`mountain_id` INT,
CONSTRAINT `pk`
PRIMARY KEY (`id`),
CONSTRAINT `fk_peak_mountain`
FOREIGN KEY (`mountain_id`)
REFERENCES `mountains`(`id`)
ON DELETE CASCADE
);



 