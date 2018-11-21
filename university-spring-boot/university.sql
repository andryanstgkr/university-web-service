-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2018 at 06:15 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `university`
--
CREATE DATABASE IF NOT EXISTS `university` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `university`;

-- --------------------------------------------------------

--
-- Table structure for table `faculties`
--

DROP TABLE IF EXISTS `faculties`;
CREATE TABLE IF NOT EXISTS `faculties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `faculties`
--

INSERT INTO `faculties` (`id`, `Name`) VALUES
(1, 'Engineering'),
(2, 'Architecture'),
(3, 'Informatics'),
(4, 'Global Engineering'),
(5, 'Economy'),
(6, 'Law');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `faculty_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`faculty_id`),
  KEY `fk_Students_Faculties1_idx` (`faculty_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `faculty_id`) VALUES
(1, 'Andryan Djadjang', 3),
(3, 'Tetsuo Sakamoto', 2),
(4, 'Norimitsu Ichikawa', 2),
(5, 'Kazuki Genzi', 2),
(6, 'Naoya Djajang', 1),
(7, 'Andryan Situngkir', 3),
(9, 'Kazuki Genzi', 2),
(10, 'Djadjang', 2);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `fk_Students_Faculties1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
