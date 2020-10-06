CREATE TABLE `teachers` (
	`teacher_id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50),
    `manager_id` INT,
    CONSTRAINT `fk_manager_teacher`
    FOREIGN KEY (`manager_id`)
    REFERENCES `teachers`(`teacher_id`)
);

INSERT INTO `teachers`
VALUES (101,"John",NULL),
(106,"Greta",101),
(102,"Maya",106),
(103,"Silvia",106),
(105,"Mark",101),
(104,"Ted",105)





