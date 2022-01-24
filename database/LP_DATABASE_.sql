-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Dez-2021 às 12:58
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `lp`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `card`
--

CREATE TABLE `card` (
  `idcard` int(10) UNSIGNED NOT NULL,
  `value` int(11) NOT NULL,
  `description` mediumtext NOT NULL,
  `imagepath` varchar(144) NOT NULL,
  `deck_iddeck` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `card`
--

INSERT INTO `card` (`idcard`, `value`, `description`, `imagepath`, `deck_iddeck`) VALUES
(1,   20,  'Ace of Clubs',  'img-1.jpg',  1),
(2,   3,  '2 of Clubs',  'img-2.jpg',  1),
(3,   3,  '3 of Clubs',  'img-3.jpg',  1),
(4,   3,  '4 of Clubs',  'img-4.jpg',  1),
(5,   3,  '5 of Clubs',  'img-5.jpg',  1),
(6,   3,  '6 of Clubs',  'img-6.jpg',  1),
(7,   3,  '7 of Clubs',  'img-7.jpg',  1),
(8,   3,  '8 of Clubs',  'img-8.jpg',  1),
(9,   3,  '9 of Clubs',  'img-9.jpg',  1),
(10,  3,  '10 of Clubs',  'img-10.jpg', 1),
(11,  5,  'Queen of Clubs',  'img-11.jpg', 1),
(12,  10,  'Jack of Clubs',  'img-12.jpg', 1),
(13,  15,  'King of Clubs',  'img-13.jpg', 1),
(14,  20,  'Ace of Diamonds',  'img-14.jpg', 1),
(15,  3,  '2 of Diamonds',  'img-15.jpg', 1),
(16,  3,  '3 of Diamonds',  'img-16.jpg', 1),
(17,  3,  '4 of Diamonds',  'img-17.jpg', 1),
(18,  3,  '5 of Diamonds',  'img-18.jpg', 1),
(19,  3,  '6 of Diamonds',  'img-19.jpg', 1),
(20,  3,  '7 of Diamonds',  'img-20.jpg', 1),
(21,  3,  '8 of Diamonds',  'img-21.jpg', 1),
(22,  3,  '9 of Diamonds',  'img-22.jpg', 1),
(23,  3,  '10 of Diamonds',  'img-23.jpg', 1),
(24,  5,  'Queen of Diamonds',  'img-24.jpg', 1),
(25,  10,  'Jack of Diamonds',  'img-25.jpg', 1),
(26,  15,  'King of Diamonds',  'img-26.jpg', 1),
(27,  20,  'Ace of Hearts',  'img-27.jpg', 1),
(28,  3,  '2 of Hearts',  'img-28.jpg', 1),
(29,  3,  '3 of Hearts',  'img-29.jpg', 1),
(30,  3,  '4 of Hearts',  'img-30.jpg', 1),
(31,  3,  '5 of Hearts',  'img-31.jpg', 1),
(32,  3,  '6 of Hearts',  'img-32.jpg', 1),
(33,  3,  '7 of Hearts',  'img-33.jpg', 1),
(34,  3,  '8 of Hearts',  'img-34.jpg', 1),
(35,  3,  '9 of Hearts',  'img-35.jpg', 1),
(36,  3,  '10 of Hearts',  'img-36.jpg', 1),
(37,  5,  'Queen of Hearts',  'img-37.jpg', 1),
(38,  10,  'Jack of Hearts',  'img-38.jpg', 1),
(39,  15,  'King of Hearts',  'img-39.jpg', 1),
(40,  20,  'Ace of Spades',  'img-40.jpg', 1),
(41,  3,  '2 of Spades',  'img-41.jpg', 1),
(42,  3,  '3 of Spades',  'img-42.jpg', 1),
(43,  3,  '4 of Spades',  'img-43.jpg', 1),
(44,  3,  '5 of Spades',  'img-44.jpg', 1),
(45,  3,  '6 of Spades',  'img-45.jpg', 1),
(46,  3,  '7 of Spades',  'img-46.jpg', 1),
(47,  3,  '8 of Spades',  'img-47.jpg', 1),
(48,  3,  '9 of Spades',  'img-48.jpg', 1),
(49,  3,  '10 of Spades',  'img-49.jpg', 1),
(50,  5,  'Queen of Spades',  'img-50.jpg', 1),
(51,  10,  'Jack of Spades',  'img-51.jpg', 1),
(52,  15,  'King of Spades',  'img-52.jpg', 1),
(53,  30,  'Joker Colored',  'img-53.jpg', 1),
(54,  30,  'Joker Black and White',  'img-54.jpg', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `card_time`
--

CREATE TABLE `card_time` (
  `card_idcard` int(10) UNSIGNED NOT NULL,
  `history_workout_idworkout` int(11) NOT NULL,
  `history_users_idusers` int(11) NOT NULL,
  `timePerCard` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `card_workout`
--

CREATE TABLE `card_workout` (
  `id` int(11) NOT NULL,
  `card_idcard` int(10) UNSIGNED NOT NULL,
  `workout_idworkout` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `deck`
--

CREATE TABLE `deck` (
  `iddeck` int(11) NOT NULL,
  `name` varchar(144) NOT NULL,
  `description` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `deck`
--

INSERT INTO `deck` (`iddeck`, `name`, `description`) VALUES
(1, 'Deck easy', 'Beginner'),
(2, 'Deck medium', 'Intermedium'),
(3, 'Deck hard', 'Veteran'),
(4, 'Deck expert', 'Super Man');

-- --------------------------------------------------------

--
-- Estrutura da tabela `exercice`
--

CREATE TABLE `exercice` (
  `idExercice` int(11) NOT NULL,
  `name` varchar(144) NOT NULL,
  `description` varchar(144) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `exercice`
--

INSERT INTO `exercice` (`idExercice`, `name`, `description`) VALUES
(1, 'Jump rope', 'N/A'),
(2, 'Running', 'N/A'),
(3, 'Hula-hooping', 'N/A'),
(4, 'Jumping jacks', 'N/A'),
(5, 'Push-up', 'N/A'),
(6, 'Pull-up', 'N/A'),
(7, 'Bench press', 'N/A'),
(8, 'Dip', 'N/A'),
(9, 'Plank', 'N/A'),
(10, 'Abdominals', 'N/A'),
(11, 'Butterfly groin', 'N/A'),
(12, 'Crossack squat', 'N/A'),
(13, 'Pistol Squat', 'N/A'),
(14, 'Single leg lift', 'N/A'),
(15, 'Pilates', 'N/A'),
(16, 'Tree pose', 'N/A');

-- --------------------------------------------------------

--
-- Estrutura da tabela `exercice_has_workout`
--

CREATE TABLE `exercice_has_workout` (
  `exercice_idExercice` int(11) NOT NULL,
  `workout_idworkout` int(11) NOT NULL,
  `Nipe` enum('Hearts','Diamonds','Spades','Clubs') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `exercice_has_workout`
--

INSERT INTO `exercice_has_workout` (`exercice_idExercice`, `workout_idworkout`, `Nipe`) VALUES
(1, 1, 'Hearts'),
(2, 1, 'Diamonds'),
(3, 1, 'Spades'),
(4, 1, 'Clubs'),
(5, 2, 'Hearts'),
(6, 2, 'Diamonds'),
(7, 2, 'Spades'),
(8, 2, 'Clubs'),
(9, 3, 'Hearts'),
(10, 3, 'Diamonds'),
(11, 3, 'Spades'),
(12, 3, 'Clubs'),
(13, 4, 'Hearts'),
(14, 4, 'Diamonds'),
(15, 4, 'Spades'),
(16, 4, 'Clubs');

-- --------------------------------------------------------

--
-- Estrutura da tabela `history`
--

CREATE TABLE `history` (
  `workout_idworkout` int(11) NOT NULL,
  `users_idusers` int(11) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `breakTime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `idusers` int(11) NOT NULL,
  `name` varchar(144) NOT NULL,
  `email` varchar(144) NOT NULL,
  `password` longtext NOT NULL,
  `phone_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`idusers`, `name`, `email`, `password`, `phone_number`) VALUES
(1, 'Santiago Bernabeu', 'santiagobernabeu@gmail.com', '3700ADF1F25FAB8202C1343C4B0B4E3FEC706D57CAD574086467B8B3DDF273EC', 919191919),
(2, 'Matilde Mourinho', 'matildemourinho@gmail.com', '3700ADF1F25FAB8202C1343C4B0B4E3FEC706D57CAD574086467B8B3DDF273EC', 929292929),
(3, 'Duarte Gomes', 'duartegomes@gmail.com', '3700ADF1F25FAB8202C1343C4B0B4E3FEC706D57CAD574086467B8B3DDF273EC', 939393939),
(4, 'Francisca Pereira', 'franciscapereira@gmail.com', '3700ADF1F25FAB8202C1343C4B0B4E3FEC706D57CAD574086467B8B3DDF273EC', 949494949);

-- --------------------------------------------------------

--
-- Estrutura da tabela `workout`
--

CREATE TABLE `workout` (
  `idworkout` int(11) NOT NULL,
  `imagepath` varchar(144) NOT NULL,
  `name` enum('Aerobic','Strength','Stretching','Balance') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `workout`
--

INSERT INTO `workout` (`idworkout`, `imagepath`, `name`) VALUES
(1, 'src/images/workout/img-1.jpg', 'Aerobic'),
(2, 'src/images/workout/img-2.jpg', 'Strength'),
(3, 'src/images/workout/img-3.jpg', 'Stretching'),
(4, 'src/images/workout/img-4.jpg', 'Balance');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`idcard`,`deck_iddeck`),
  ADD KEY `fk_card_deck1_idx` (`deck_iddeck`);

--
-- Índices para tabela `card_time`
--
ALTER TABLE `card_time`
  ADD PRIMARY KEY (`card_idcard`,`history_workout_idworkout`,`history_users_idusers`),
  ADD KEY `fk_card_has_history_history1_idx` (`history_workout_idworkout`,`history_users_idusers`);

--
-- Índices para tabela `card_workout`
--
ALTER TABLE `card_workout`
  ADD PRIMARY KEY (`id`,`card_idcard`,`workout_idworkout`),
  ADD KEY `fk_card_has_workout_workout1_idx` (`workout_idworkout`),
  ADD KEY `fk_card_has_workout_card1` (`card_idcard`);

--
-- Índices para tabela `deck`
--
ALTER TABLE `deck`
  ADD PRIMARY KEY (`iddeck`);

--
-- Índices para tabela `exercice`
--
ALTER TABLE `exercice`
  ADD PRIMARY KEY (`idExercice`);

--
-- Índices para tabela `exercice_has_workout`
--
ALTER TABLE `exercice_has_workout`
  ADD PRIMARY KEY (`exercice_idExercice`,`workout_idworkout`),
  ADD KEY `fk_exercice_has_workout_workout1_idx` (`workout_idworkout`),
  ADD KEY `fk_exercice_has_workout_exercice1_idx` (`exercice_idExercice`);

--
-- Índices para tabela `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`workout_idworkout`,`users_idusers`),
  ADD KEY `fk_workout_has_users_users1_idx` (`users_idusers`),
  ADD KEY `fk_workout_has_users_workout1_idx` (`workout_idworkout`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idusers`);

--
-- Índices para tabela `workout`
--
ALTER TABLE `workout`
  ADD PRIMARY KEY (`idworkout`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `card`
--
ALTER TABLE `card`
  MODIFY `idcard` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de tabela `card_workout`
--
ALTER TABLE `card_workout`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `deck`
--
ALTER TABLE `deck`
  MODIFY `iddeck` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `exercice`
--
ALTER TABLE `exercice`
  MODIFY `idExercice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `idusers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `workout`
--
ALTER TABLE `workout`
  MODIFY `idworkout` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `card`
--
ALTER TABLE `card`
  ADD CONSTRAINT `fk_card_deck1` FOREIGN KEY (`deck_iddeck`) REFERENCES `deck` (`iddeck`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `card_time`
--
ALTER TABLE `card_time`
  ADD CONSTRAINT `fk_card_has_history_card1` FOREIGN KEY (`card_idcard`) REFERENCES `card` (`idcard`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_card_has_history_history1` FOREIGN KEY (`history_workout_idworkout`,`history_users_idusers`) REFERENCES `history` (`workout_idworkout`, `users_idusers`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `card_workout`
--
ALTER TABLE `card_workout`
  ADD CONSTRAINT `fk_card_has_workout_card1` FOREIGN KEY (`card_idcard`) REFERENCES `card` (`idcard`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_card_has_workout_workout1` FOREIGN KEY (`workout_idworkout`) REFERENCES `workout` (`idworkout`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `exercice_has_workout`
--
ALTER TABLE `exercice_has_workout`
  ADD CONSTRAINT `fk_exercice_has_workout_exercice1` FOREIGN KEY (`exercice_idExercice`) REFERENCES `exercice` (`idExercice`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_exercice_has_workout_workout1` FOREIGN KEY (`workout_idworkout`) REFERENCES `workout` (`idworkout`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `fk_workout_has_users_users1` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_workout_has_users_workout1` FOREIGN KEY (`workout_idworkout`) REFERENCES `workout` (`idworkout`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
