-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2024 at 02:07 PM
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
-- Database: `fdps`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fName` varchar(225) NOT NULL,
  `lName` varchar(225) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(225) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fName`, `lName`, `username`, `password`, `email`, `role`) VALUES
(1, 'Ushan', 'Gallage', 'user1', '$2b$10$Uswc00z9tSoZZAozwZwJOuWgN6pHkqkIGih9DCypZIaganP3xtSHy', 'ushan@gmail.com', 'admin'),
(2, 'osanda', 'perera', 'user2', '$2b$10$Y5mUYrSE2Bku4nsdM6XEX.tPl29aalult15REduaK7Qfn6K9UD0lq', 'osanda@gmail.com', 'product'),
(5, 'beyan', 'mark', 'user3', '$2b$10$vnWEv.zDMOc95KrUVVyfg.uw1iKmAAKePupKw.2NK5/0d7Fo4SH56', 'beyan@gmail.com', 'marketing'),
(6, 'yasindu', 'hadapangoda', 'user4', '$2b$10$swGLAROMZ/efFytzrPz7TuytP6O5wQMiaW2lr4yEQJwbBb8qv2f92', 'yasindu@gmail.com', 'sales');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
