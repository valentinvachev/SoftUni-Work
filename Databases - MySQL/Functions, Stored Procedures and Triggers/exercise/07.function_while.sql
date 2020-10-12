DROP FUNCTION IF EXISTS `ufn_is_word_comprised`;
DELIMITER $$
CREATE FUNCTION `ufn_is_word_comprised`(`set_of_letters` VARCHAR(50), `word` VARCHAR(50)) RETURNS int
    DETERMINISTIC
BEGIN
	DECLARE count INT;
    DECLARE result INT;
    SET result := 1;
    SET count := 1 ;
	WHILE count <= CHAR_LENGTH(`word`) DO
		IF (`set_of_letters` NOT LIKE  CONCAT("%",SUBSTRING(`word`,count,1),"%"))
        THEN SET result := 0;
        END IF;
        SET count := count + 1;
	END WHILE;
RETURN `result`;
END$$
DELIMITER ;