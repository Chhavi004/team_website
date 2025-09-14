-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2025 at 03:48 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recruitments`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE `applicants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `domains` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`id`, `name`, `email`, `domains`) VALUES
(0, 'Chhavi sekwal', 'chhavi.sekwal2023@vitstudent.ac.in', '[\"Computer Science / Autonomy\"]'),
(0, 'Chhavi sekwal', 'chhavi.sekwal2023@vitstudent.ac.in', '[\"Computer Science / Autonomy\"]'),
(0, 'Chhavi sekwal', 'chhavi.sekwal2023@vitstudent.ac.in', '[\"Computer Science / Autonomy\"]'),
(0, 'Chhavi sekwal', 'chhavi.sekwal2023@vitstudent.ac.in', '[\"Computer Science / Autonomy\"]'),
(0, 'Srija Koppar', 'srija.koppar2023@vitstudent.ac.in', '[\"Mechanical\"]');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
