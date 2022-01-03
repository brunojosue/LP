-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lp` DEFAULT CHARACTER SET utf8 ;
USE `lp` ;

-- -----------------------------------------------------
-- Table `lp`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lp`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `phone_number` INT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lp`.`deck`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lp`.`deck` (
  `iddeck` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`iddeck`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lp`.`card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lp`.`card` (
  `idcard` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `value` INT NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `imagepath` VARCHAR(45) NOT NULL,
  `deck_iddeck` INT NOT NULL,
  PRIMARY KEY (`idcard`, `deck_iddeck`),
  INDEX `fk_card_deck1_idx` (`deck_iddeck` ASC) VISIBLE,
  CONSTRAINT `fk_card_deck1`
    FOREIGN KEY (`deck_iddeck`)
    REFERENCES `lp`.`deck` (`iddeck`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lp`.`workout`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lp`.`workout` (
  `idworkout` INT NOT NULL AUTO_INCREMENT,
  `imagepath` VARCHAR(45) NOT NULL,
  `name` ENUM('Aerobic', 'Strength', 'Stretching', 'Balance') NOT NULL,
  PRIMARY KEY (`idworkout`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lp`.`card_workout`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lp`.`card_workout` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `card_idcard` INT UNSIGNED NOT NULL,
  `workout_idworkout` INT NOT NULL,
  PRIMARY KEY (`id`, `card_idcard`, `workout_idworkout`),
  INDEX `fk_card_has_workout_workout1_idx` (`workout_idworkout` ASC) VISIBLE,
  CONSTRAINT `fk_card_has_workout_card1`
    FOREIGN KEY (`card_idcard`)
    REFERENCES `lp`.`card` (`idcard`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_card_has_workout_workout1`
    FOREIGN KEY (`workout_idworkout`)
    REFERENCES `lp`.`workout` (`idworkout`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lp`.`history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lp`.`history` (
  `workout_idworkout` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  `startDate` DATETIME NOT NULL,
  `endDate` DATETIME NOT NULL,
  `breakTime` INT NOT NULL,
  PRIMARY KEY (`workout_idworkout`, `users_idusers`),
  INDEX `fk_workout_has_users_users1_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_workout_has_users_workout1_idx` (`workout_idworkout` ASC) VISIBLE,
  CONSTRAINT `fk_workout_has_users_workout1`
    FOREIGN KEY (`workout_idworkout`)
    REFERENCES `lp`.`workout` (`idworkout`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_workout_has_users_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `lp`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lp`.`card_time`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lp`.`card_time` (
  `card_idcard` INT UNSIGNED NOT NULL,
  `history_workout_idworkout` INT NOT NULL,
  `history_users_idusers` INT NOT NULL,
  `timePerCard` INT NOT NULL,
  PRIMARY KEY (`card_idcard`, `history_workout_idworkout`, `history_users_idusers`),
  INDEX `fk_card_has_history_history1_idx` (`history_workout_idworkout` ASC, `history_users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_card_has_history_card1`
    FOREIGN KEY (`card_idcard`)
    REFERENCES `lp`.`card` (`idcard`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_card_has_history_history1`
    FOREIGN KEY (`history_workout_idworkout` , `history_users_idusers`)
    REFERENCES `lp`.`history` (`workout_idworkout` , `users_idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lp`.`exercice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lp`.`exercice` (
  `idExercice` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idExercice`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lp`.`exercice_has_workout`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lp`.`exercice_has_workout` (
  `exercice_idExercice` INT NOT NULL,
  `workout_idworkout` INT NOT NULL,
  `Nipe` ENUM('Hearts', 'Diamonds', 'Spades', 'Clubs') NOT NULL,
  PRIMARY KEY (`exercice_idExercice`, `workout_idworkout`),
  INDEX `fk_exercice_has_workout_workout1_idx` (`workout_idworkout` ASC) VISIBLE,
  INDEX `fk_exercice_has_workout_exercice1_idx` (`exercice_idExercice` ASC) VISIBLE,
  CONSTRAINT `fk_exercice_has_workout_exercice1`
    FOREIGN KEY (`exercice_idExercice`)
    REFERENCES `lp`.`exercice` (`idExercice`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exercice_has_workout_workout1`
    FOREIGN KEY (`workout_idworkout`)
    REFERENCES `lp`.`workout` (`idworkout`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
