-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2019 at 08:00 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cepsum`
--

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `login_account` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `field_number` varchar(1) COLLATE utf16_unicode_ci NOT NULL,
  `reservation_date` date NOT NULL,
  `reservation_hour` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`login_account`, `field_number`, `reservation_date`, `reservation_hour`) VALUES
('admin', '1', '2019-04-15', '15:00:00'),
('eduard', '1', '2019-04-15', '19:00:00'),
('plpl', '1', '2019-04-15', '07:00:00'),
('qwer', '3', '2019-04-15', '17:00:00'),
('sorin', '2', '2019-04-15', '15:00:00'),
('jsmith', '3', '2019-04-15', '19:00:00'),
('rgodin', '1', '2019-04-15', '14:00:00'),
('dvoicu', '5', '2019-04-15', '16:00:00'),
('denvoicu', '2', '2019-04-15', '14:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `name` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `login` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `last_name`, `login`, `password`, `is_admin`) VALUES
('Eduard', 'Voiculescu', 'admin', 'admin', 1),
('Alibaba', 'baba', 'baba_ali', 'ali_baba', 0),
('coucou', 'toto', 'coucou', 'toto', 0),
('Denisa', 'Voiculescu', 'Den_voicu', 'denvoicu', 0),
('Denisa', 'Voiculescu', 'denvoicu', 'roumanie', 0),
('daniela', 'voiculescu', 'dvoicu', 'qwerqwer', 0),
('eduard', 'eduard', 'eduard', 'qwer', 0),
('Eduard', 'Voiculescu', 'edvoicu', 'edvoicu', 0),
('hello', 'world', 'hello', 'test', 0),
('John', 'Smith', 'jsmith', 'qqqq', 0),
('Sami', 'Steenhaut', 'Kold', 'kold', 0),
('plok', 'plok', 'plpl', 'plpl', 0),
('qwer', 'qwer', 'qwer', 'qwer', 0),
('ryan', 'godin', 'rgodin', 'rgodin', 0),
('sorin', 'sorin', 'sorin', 'sorin', 0),
('Zak', 'Bounouar', 'zak_bou', 'zakk', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`login`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
