-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2026 at 09:32 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthcare_rcm`
--
CREATE DATABASE IF NOT EXISTS `healthcare_rcm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `healthcare_rcm`;

-- --------------------------------------------------------

--
-- Table structure for table `providers`
--

CREATE TABLE `providers` (
  `npi` varchar(10) NOT NULL,
  `tin` varchar(20) DEFAULT NULL,
  `entity_type_code` tinyint(4) DEFAULT NULL,
  `replacement_npi` varchar(10) DEFAULT NULL,
  `ein` varchar(9) DEFAULT NULL,
  `organization_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(35) DEFAULT NULL,
  `credential` varchar(50) DEFAULT NULL,
  `first_name` varchar(35) DEFAULT NULL,
  `middle_name` varchar(20) DEFAULT NULL,
  `name_prefix` varchar(5) DEFAULT NULL,
  `name_suffix` varchar(5) DEFAULT NULL,
  `credential_text` varchar(20) DEFAULT NULL,
  `other_organization_name` varchar(100) DEFAULT NULL,
  `other_organization_type_code` varchar(1) DEFAULT NULL,
  `other_last_name` varchar(35) DEFAULT NULL,
  `other_first_name` varchar(35) DEFAULT NULL,
  `other_middle_name` varchar(20) DEFAULT NULL,
  `other_name_prefix` varchar(5) DEFAULT NULL,
  `other_name_suffix` varchar(5) DEFAULT NULL,
  `other_credential_text` varchar(20) DEFAULT NULL,
  `other_last_name_type_code` tinyint(4) DEFAULT NULL,
  `enumeration_date` date DEFAULT NULL,
  `last_update_date` date DEFAULT NULL,
  `deactivation_reason_code` varchar(2) DEFAULT NULL,
  `deactivation_date` date DEFAULT NULL,
  `reactivation_date` date DEFAULT NULL,
  `certification_date` date DEFAULT NULL,
  `provider_sex_code` varchar(1) DEFAULT NULL,
  `auth_official_last_name` varchar(35) DEFAULT NULL,
  `auth_official_first_name` varchar(35) DEFAULT NULL,
  `auth_official_middle_name` varchar(20) DEFAULT NULL,
  `auth_official_title_position` varchar(35) DEFAULT NULL,
  `auth_official_telephone` varchar(20) DEFAULT NULL,
  `auth_official_prefix` varchar(5) DEFAULT NULL,
  `auth_official_suffix` varchar(5) DEFAULT NULL,
  `auth_official_credential` varchar(20) DEFAULT NULL,
  `is_sole_proprietor` varchar(1) DEFAULT NULL,
  `is_organization_subpart` varchar(1) DEFAULT NULL,
  `parent_organization_lbn` varchar(100) DEFAULT NULL,
  `parent_organization_tin` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `providers`
--

INSERT INTO `providers` (`npi`, `tin`, `entity_type_code`, `replacement_npi`, `ein`, `organization_name`, `last_name`, `credential`, `first_name`, `middle_name`, `name_prefix`, `name_suffix`, `credential_text`, `other_organization_name`, `other_organization_type_code`, `other_last_name`, `other_first_name`, `other_middle_name`, `other_name_prefix`, `other_name_suffix`, `other_credential_text`, `other_last_name_type_code`, `enumeration_date`, `last_update_date`, `deactivation_reason_code`, `deactivation_date`, `reactivation_date`, `certification_date`, `provider_sex_code`, `auth_official_last_name`, `auth_official_first_name`, `auth_official_middle_name`, `auth_official_title_position`, `auth_official_telephone`, `auth_official_prefix`, `auth_official_suffix`, `auth_official_credential`, `is_sole_proprietor`, `is_organization_subpart`, `parent_organization_lbn`, `parent_organization_tin`) VALUES
('1111', '11111', NULL, NULL, NULL, NULL, 'gggg', 'gggg', 'gggg', 'ggg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('1234', '1234', NULL, NULL, NULL, NULL, 'ffff', 'fff', 'ddd', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('1234567890', NULL, NULL, NULL, NULL, NULL, 'Tayal', NULL, 'Gagan', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('1235', '121', NULL, NULL, NULL, NULL, 'hfifh', 'jj', 'jhad', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('22323', '32323', NULL, NULL, NULL, NULL, 'kumar', 'uu', 'jack', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('4444', '4444', NULL, NULL, NULL, NULL, 'ggfg', 'gfd', 'htgh', 'fbffd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('4545', '4544', NULL, NULL, NULL, NULL, 'gfgfd', 'fdg', 'vb', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('55422', '5454', NULL, NULL, NULL, NULL, 'dhg', 'gh', 'gdgb', 'gf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('55555', '55555', NULL, NULL, NULL, NULL, 'kkkk', 'uu', 'ppppp', 'pppp', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `provider_addresses`
--

CREATE TABLE `provider_addresses` (
  `id` int(11) NOT NULL,
  `npi` varchar(10) NOT NULL,
  `address_type` enum('MAILING','PRACTICE') NOT NULL,
  `address_line_1` varchar(55) DEFAULT NULL,
  `address_line_2` varchar(55) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` varchar(40) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `country_code` varchar(2) DEFAULT NULL,
  `telephone_number` varchar(20) DEFAULT NULL,
  `fax_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `provider_identifiers`
--

CREATE TABLE `provider_identifiers` (
  `id` int(11) NOT NULL,
  `npi` varchar(10) NOT NULL,
  `identifier` varchar(20) DEFAULT NULL,
  `identifier_type_code` varchar(2) DEFAULT NULL,
  `identifier_state` varchar(2) DEFAULT NULL,
  `identifier_issuer` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `provider_taxonomies`
--

CREATE TABLE `provider_taxonomies` (
  `id` int(11) NOT NULL,
  `npi` varchar(10) NOT NULL,
  `taxonomy_code` varchar(10) DEFAULT NULL,
  `license_number` varchar(20) DEFAULT NULL,
  `license_state_code` varchar(2) DEFAULT NULL,
  `primary_taxonomy_switch` varchar(1) DEFAULT NULL,
  `taxonomy_group` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `provider_taxonomies`
--

INSERT INTO `provider_taxonomies` (`id`, `npi`, `taxonomy_code`, `license_number`, `license_state_code`, `primary_taxonomy_switch`, `taxonomy_group`) VALUES
(1, '1234567890', '207Q00000X', 'LIC12345', NULL, 'Y', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`npi`);

--
-- Indexes for table `provider_addresses`
--
ALTER TABLE `provider_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_npi` (`npi`),
  ADD KEY `idx_state` (`state`);

--
-- Indexes for table `provider_identifiers`
--
ALTER TABLE `provider_identifiers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_npi` (`npi`),
  ADD KEY `idx_identifier` (`identifier`);

--
-- Indexes for table `provider_taxonomies`
--
ALTER TABLE `provider_taxonomies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_npi` (`npi`),
  ADD KEY `idx_taxonomy` (`taxonomy_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `provider_addresses`
--
ALTER TABLE `provider_addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `provider_identifiers`
--
ALTER TABLE `provider_identifiers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `provider_taxonomies`
--
ALTER TABLE `provider_taxonomies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `provider_addresses`
--
ALTER TABLE `provider_addresses`
  ADD CONSTRAINT `provider_addresses_ibfk_1` FOREIGN KEY (`npi`) REFERENCES `providers` (`npi`) ON DELETE CASCADE;

--
-- Constraints for table `provider_identifiers`
--
ALTER TABLE `provider_identifiers`
  ADD CONSTRAINT `provider_identifiers_ibfk_1` FOREIGN KEY (`npi`) REFERENCES `providers` (`npi`) ON DELETE CASCADE;

--
-- Constraints for table `provider_taxonomies`
--
ALTER TABLE `provider_taxonomies`
  ADD CONSTRAINT `provider_taxonomies_ibfk_1` FOREIGN KEY (`npi`) REFERENCES `providers` (`npi`) ON DELETE CASCADE;
--
-- Database: `mydatabase`
--
CREATE DATABASE IF NOT EXISTS `mydatabase` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mydatabase`;

-- --------------------------------------------------------

--
-- Table structure for table `consultations`
--

CREATE TABLE `consultations` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `service` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `consultations`
--

INSERT INTO `consultations` (`id`, `fullname`, `email`, `phone`, `service`) VALUES
(2, 'anuj', 'gagaga@ffdnfdnf', '784241415', 'Medical Billing Services'),
(3, 'karan', 'karan@gmail.com', '8888888888', 'Healthcare Claims Adjudication'),
(4, 'karan', 'karan@gmail.com', '8888888888', 'Healthcare Claims Adjudication'),
(5, 'Sameer', 'Sameer455@gmail.com', '1244567897', 'Medical Empanelment Services'),
(6, 'David Jon', 'DavidJon123@gmail.com', '1244567899', 'Healthcare Claims Adjudication'),
(9, 'Arjun', 'arjun@gmail.com', '1234555588', 'Insurance Verification Services'),
(10, 'gsvsvscskcs', 'dbs@dxzhjbzdcb.com', '455444545', 'Healthcare Claims Adjudication'),
(11, 'Ravi', 'ravi@gmail.com', '5545445445', 'Medical Billing & Codding Services');

-- --------------------------------------------------------

--
-- Table structure for table `credentialing_status`
--

CREATE TABLE `credentialing_status` (
  `id` int(11) NOT NULL,
  `npi` char(10) DEFAULT NULL,
  `payer` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `submission_date` date DEFAULT NULL,
  `approval_date` date DEFAULT NULL,
  `expiry_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `credentialing_status`
--

INSERT INTO `credentialing_status` (`id`, `npi`, `payer`, `status`, `submission_date`, `approval_date`, `expiry_date`) VALUES
(1, '1111111111', 'Medicare NY', 'Approved', '2024-01-01', '2024-02-15', '2027-02-15'),
(2, '2222222222', 'Blue Cross CA', 'Pending', '2025-01-20', NULL, NULL),
(3, '3333333333', 'Aetna TX', 'Denied', '2024-12-01', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `name`, `email`, `phone`, `password`, `created_at`) VALUES
(1, 'gagan', 'gaga@gmail.com', '4444444', '$2b$10$w6gXJfu2Q5SAI43.oH4RvOJi5EOI5L.233t1POWyhOnEP0tVET4SK', '2026-01-03 11:16:22'),
(2, 'ravi', 'ravi@gmail.com', '55555', '$2b$10$xs82ERC6WhUgF4gIBpA9Me5rByeryXkOqZWBoieloGQX6B4LBNln.', '2026-01-03 11:19:09'),
(4, 'David', 'David@gmail.com', '123456789', '$2b$10$0UMkHQmWg/Bn5WuAn0BvbeDCqz5IiCrKA3bfoWzd264xfz1bFB1oW', '2026-01-06 04:51:21'),
(6, 'ravi', 'ravii@gmail.com', '45454545', '$2b$10$5pMT3myJL1qHuIv.jfZtvuIpfZUy5c/kuQHp7JgdLeZEivosC65jm', '2026-02-02 06:52:12'),
(7, 'Adarsh', 'Adarsh@gmail.com', '12345678', '$2b$10$o3L6Bfzf0ZKHwVAMT9qRRudkGYZx9aE4mBh6dywGumAulE1m/d1IW', '2026-02-03 09:36:43'),
(8, 'gagan', 'gagann@gmail.com', '45', '$2b$10$lEBBLGDjY3tGuNk9H1ORkOGLSGyZL4qKc8UmRrlMbkZ9EYjwlWnUq', '2026-02-08 07:25:40'),
(9, 'karan', 'Karan@gmail.com', '45', '$2b$10$XzVqJZoEd9Um52tN/3KDQ.1NYHysONdEuBLwwrNBJJGhv33YCWn9q', '2026-02-08 11:17:40'),
(10, 'karam', 'karam@gmail.com', '45454', '$2b$10$J8R.WNGKK6h/xozuleJNn.pPVmV2zebX3AYjijYt6LbmcPyyHS0My', '2026-02-08 13:39:59'),
(11, 'HANU', 'HANU@GMAIL.COM', '4545', '$2b$10$zOdigSs03JemTSQk12zM5.cW1CXQcZx/IgHusjQOqbtVbmv5Z/CtO', '2026-02-08 15:26:22'),
(12, 'xyz', 'xyz@gmail.com', '88', '$2b$10$NHFm4/RXnIul1xp0uIVCBOQt/RLE1JWyV8IwPhqoQJ6mpumLRjXUy', '2026-02-08 16:58:09'),
(27, 'ravii', 'Raavii@gmail.com', '5454', '$2b$10$4JlKXMuGMe/3GbSeFFXT8OIPtLVp0cONWbwnRJOg2Mz44Yq9XyJ.2', '2026-02-09 11:43:15'),
(31, 'Gagann', 'Gagaa@gmail.com', '454556', '$2b$10$18TBCalKqRS50GUOsIbmyu78set56cwopbe6Mz7uBr2WlezALa7Vm', '2026-02-13 12:05:31'),
(32, 'abc', 'abc@gmail.com', '55555', '$2b$10$W9Jz7hSkp92/UULRYOKMOOPpmCf9ZL75Eolzj7zLzL0yxzKeDIntK', '2026-02-13 12:33:37'),
(33, 'kapil', 'kapil@gmail.com', '555555', '$2b$10$RtOU4EiHc/7GFEhuR16aeeDU9lm8hD/SHgzLLSH87HBwg.TUbsorG', '2026-02-14 04:21:32'),
(34, 'sonu', 'sonu@gmail.com', '5555', '$2b$10$NcE8MsYznYWDz2Ka9iR1c.fAou1.iSaPMrbEATijoOEnn9AxIFVy2', '2026-02-14 06:58:20'),
(35, 'ravi', 'raviiiii@gmail.com', '77777', '$2b$10$TMgShO8cOqXKZnrkROrFye3WDRD/3dEKQuobFCf3UEc72IiaGY.bu', '2026-02-14 07:40:44'),
(36, 'sanju', 'sanju@xyz.com', '88888', '$2b$10$DnLQIvJIlVK8FF3T6l4ey.kWPJ7rjVtt22vAH5dsMc1bnS7r/f3Mm', '2026-02-14 08:24:30'),
(37, 'king', 'king@gmail.com', '58588', '$2b$10$w4MPApvjKGg8QdN6HzTAnOfOdg0kobK7kqEFEnYGrfY1j/LpYJ1Sa', '2026-02-14 09:27:35'),
(38, 'gagan', 'gagaaag@gmail.com', '5555', '$2b$10$wer6ix3ZR4MIVIYbXYkVR.d4AgONt4mY7E8zxEOIJLc417vmflOQq', '2026-02-18 06:44:56'),
(41, 'decis', 'HAN01U@GMAIL.COM', '55555', '$2b$10$Zi3DpYhO/v6OnqCGKX4A7e4cM8J7mF2IqQ0RNizs9YOmKlS0BfzYS', '2026-02-21 08:37:35'),
(43, 'gagang', 'gagaann@gmail.com', '775555', '$2b$10$M1Usvnjv8j5SmP9tug3w4ejIbGXzHrZ7W8yJPjFPavCAgXmYeEa/O', '2026-02-25 06:56:14'),
(44, 'kk', 'kk@gmail.com', '5555', '$2b$10$rhVji2SGEw87IDXfJB0Al.PyJE55w4lUGp7wOWa8JFE8SqXIPykUK', '2026-02-25 07:51:52'),
(45, 'yash', 'yash@gmail.com', '757575', '$2b$10$yINWEQVMxVCjQv/p45sTbeumv9NhJgfgTbpzB.Wu00pt6LEqap7vG', '2026-02-25 08:24:22'),
(46, 'jack', 'jj@gmail.com', '555', '$2b$10$Pfz5G.msJgCp2bvpVMGKFuK5pIuBzOmmBNrwVQ4w1ejD7jfSJNQLe', '2026-02-25 08:30:06'),
(47, 'manish', 'manish@gmail.com', '757575', '$2b$10$P6QgBEy6.gPQJFvrSBxOB.ijHEAylrx.bU.cVlkZb5shprKv2MrAu', '2026-02-28 04:52:25'),
(48, 'nikhil', 'nikhil@gmail.com', '444', '$2b$10$mTgjLufIfsbbM.pO.iIILe04fBbDqBj6QtqGzl8koHezgVIRe1/3K', '2026-02-28 05:24:12'),
(49, 'akash', 'akash@gmail.com', '5555', '$2b$10$aG0ca7ChNo.NIGYKPPt3ceVyvya/wCaTcgZ8edOylUhcYnseIm4c.', '2026-02-28 09:20:57'),
(50, 'ganag', 'gagag@gmail.cm', '444', '$2b$10$cisEN3qoQwI98z.8TAc3G.Y4z7Y5vg8F9wDALEtE4DgH9dyrbeJZm', '2026-02-28 11:15:19'),
(53, 'killer', 'killer@gmail.com', '75757', '$2b$10$sy9Mo6ZgU1LvSTZhHSjWPe5PYJ6SHsdxIFkxxDDqkit93nKOb7RKq', '2026-02-28 11:20:57'),
(54, 'krish', 'krish@gmail.com', '55555', '$2b$10$Y/SfjJVfRnuFRYmXE90El.6eRhAOr40kLH996bwesBujTmt/kjGUq', '2026-02-28 11:42:07'),
(55, 'pppp', 'pp@gmail.com', '777', '$2b$10$RNFJDZ8Qhmb2F9mrw9mYlulikSOXhz39dvIFdsFmFCiQISNjY7Xxi', '2026-02-28 11:49:50'),
(56, 'Pagal', 'Pagal@gmail.com', '7575', '$2b$10$FKTP9A6bMqz0JXSQHUU2AuBtx/iwQXu1hFn.KXVJNgWVQkZk4sq8C', '2026-02-28 11:52:47'),
(57, 'piyush', 'piyush@gmail.com', '5555', '$2b$10$vZxqR55hTlvgAjqRlLoUHeII.FCXNeac.6ifZaDlyRiBDQm.Sz5QO', '2026-02-28 12:06:12');

-- --------------------------------------------------------

--
-- Table structure for table `providers`
--

CREATE TABLE `providers` (
  `npi` char(10) NOT NULL,
  `entity_type_code` int(11) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `org_name` varchar(100) DEFAULT NULL,
  `credential` varchar(10) DEFAULT NULL,
  `enumeration_date` date DEFAULT NULL,
  `last_updated` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `providers`
--

INSERT INTO `providers` (`npi`, `entity_type_code`, `first_name`, `last_name`, `org_name`, `credential`, `enumeration_date`, `last_updated`) VALUES
('1111111111', 1, 'John', 'Smith', NULL, 'MD', '2020-01-15', '2025-02-01'),
('2222222222', 1, 'Maria', 'Garcia', NULL, 'DO', '2018-05-20', '2025-01-10'),
('3333333333', 2, NULL, NULL, 'Lone Star Imaging', NULL, '2015-08-10', '2024-11-30');

-- --------------------------------------------------------

--
-- Table structure for table `provider_addresses`
--

CREATE TABLE `provider_addresses` (
  `id` int(11) NOT NULL,
  `npi` char(10) DEFAULT NULL,
  `address_purpose` varchar(20) DEFAULT NULL,
  `street` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` char(2) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `provider_addresses`
--

INSERT INTO `provider_addresses` (`id`, `npi`, `address_purpose`, `street`, `city`, `state`, `zip`, `phone`) VALUES
(1, '1111111111', 'LOCATION', '100 Broadway', 'New York', 'NY', '10001', '212-555-0199'),
(2, '2222222222', 'LOCATION', '500 Sunset Blvd', 'Los Angeles', 'CA', '90028', '310-555-0122'),
(3, '3333333333', 'LOCATION', '200 Main St', 'Houston', 'TX', '77002', '713-555-0900');

-- --------------------------------------------------------

--
-- Table structure for table `provider_taxonomies`
--

CREATE TABLE `provider_taxonomies` (
  `id` int(11) NOT NULL,
  `npi` char(10) DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL,
  `specialty` varchar(100) DEFAULT NULL,
  `license_num` varchar(50) DEFAULT NULL,
  `state` char(2) DEFAULT NULL,
  `is_primary` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `provider_taxonomies`
--

INSERT INTO `provider_taxonomies` (`id`, `npi`, `code`, `specialty`, `license_num`, `state`, `is_primary`) VALUES
(1, '1111111111', '207RC0000X', 'Cardiology', 'NY-98765', 'NY', 1),
(2, '2222222222', '208000000X', 'Pediatrics', 'CA-554433', 'CA', 1),
(3, '3333333333', '261QR0200X', 'Radiology Clinic', NULL, 'TX', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `consultations`
--
ALTER TABLE `consultations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `credentialing_status`
--
ALTER TABLE `credentialing_status`
  ADD PRIMARY KEY (`id`),
  ADD KEY `npi` (`npi`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`npi`);

--
-- Indexes for table `provider_addresses`
--
ALTER TABLE `provider_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `npi` (`npi`);

--
-- Indexes for table `provider_taxonomies`
--
ALTER TABLE `provider_taxonomies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `npi` (`npi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `consultations`
--
ALTER TABLE `consultations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `credentialing_status`
--
ALTER TABLE `credentialing_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `provider_addresses`
--
ALTER TABLE `provider_addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `provider_taxonomies`
--
ALTER TABLE `provider_taxonomies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `credentialing_status`
--
ALTER TABLE `credentialing_status`
  ADD CONSTRAINT `credentialing_status_ibfk_1` FOREIGN KEY (`npi`) REFERENCES `providers` (`npi`);

--
-- Constraints for table `provider_addresses`
--
ALTER TABLE `provider_addresses`
  ADD CONSTRAINT `provider_addresses_ibfk_1` FOREIGN KEY (`npi`) REFERENCES `providers` (`npi`);

--
-- Constraints for table `provider_taxonomies`
--
ALTER TABLE `provider_taxonomies`
  ADD CONSTRAINT `provider_taxonomies_ibfk_1` FOREIGN KEY (`npi`) REFERENCES `providers` (`npi`);
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) NOT NULL DEFAULT '',
  `user` varchar(255) NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `query` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) NOT NULL,
  `col_name` varchar(64) NOT NULL,
  `col_type` varchar(64) NOT NULL,
  `col_length` text DEFAULT NULL,
  `col_collation` varchar(64) NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) DEFAULT '',
  `col_default` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `column_name` varchar(64) NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `transformation` varchar(255) NOT NULL DEFAULT '',
  `transformation_options` varchar(255) NOT NULL DEFAULT '',
  `input_transformation` varchar(255) NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) NOT NULL,
  `settings_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL,
  `export_type` varchar(10) NOT NULL,
  `template_name` varchar(64) NOT NULL,
  `template_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db` varchar(64) NOT NULL DEFAULT '',
  `table` varchar(64) NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) NOT NULL,
  `item_name` varchar(64) NOT NULL,
  `item_type` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"healthcare_rcm\",\"table\":\"provider_taxonomies\"},{\"db\":\"healthcare_rcm\",\"table\":\"provider_addresses\"},{\"db\":\"healthcare_rcm\",\"table\":\"provider_identifiers\"},{\"db\":\"healthcare_rcm\",\"table\":\"providers\"},{\"db\":\"mydatabase\",\"table\":\"doctors\"},{\"db\":\"mydatabase\",\"table\":\"provider_taxonomies\"},{\"db\":\"mydatabase\",\"table\":\"provider_addresses\"},{\"db\":\"mydatabase\",\"table\":\"providers\"},{\"db\":\"mydatabase\",\"table\":\"credentialing_status\"},{\"db\":\"mydatabase\",\"table\":\"consultations\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) NOT NULL DEFAULT '',
  `master_table` varchar(64) NOT NULL DEFAULT '',
  `master_field` varchar(64) NOT NULL DEFAULT '',
  `foreign_db` varchar(64) NOT NULL DEFAULT '',
  `foreign_table` varchar(64) NOT NULL DEFAULT '',
  `foreign_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `search_name` varchar(64) NOT NULL DEFAULT '',
  `search_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `display_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `prefs` text NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text NOT NULL,
  `schema_sql` text DEFAULT NULL,
  `data_sql` longtext DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2026-03-02 08:32:11', '{\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) NOT NULL,
  `tab` varchar(64) NOT NULL,
  `allowed` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) NOT NULL,
  `usergroup` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `rcm_credentialing_db`
--
CREATE DATABASE IF NOT EXISTS `rcm_credentialing_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `rcm_credentialing_db`;

-- --------------------------------------------------------

--
-- Table structure for table `credentialing_status`
--

CREATE TABLE `credentialing_status` (
  `id` int(11) NOT NULL,
  `npi` char(10) DEFAULT NULL,
  `payer` varchar(50) DEFAULT NULL COMMENT 'Aetna, BCBS, Medicare',
  `status` varchar(20) DEFAULT NULL COMMENT 'Pending, Submitted, Approved, Denied',
  `submission_date` date DEFAULT NULL,
  `approval_date` date DEFAULT NULL,
  `expiry_date` date DEFAULT NULL COMMENT 'Re-credentialing due date'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `credentialing_status`
--

INSERT INTO `credentialing_status` (`id`, `npi`, `payer`, `status`, `submission_date`, `approval_date`, `expiry_date`) VALUES
(1, '1111111111', 'Medicare NY', 'Approved', '2024-01-01', '2024-02-15', '2027-02-15'),
(2, '2222222222', 'Blue Cross CA', 'Pending', '2025-01-20', NULL, NULL),
(3, '3333333333', 'Aetna TX', 'Denied', '2024-12-01', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `providers`
--

CREATE TABLE `providers` (
  `npi` char(10) NOT NULL,
  `entity_type_code` int(11) DEFAULT NULL COMMENT '1=Individual, 2=Org',
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `org_name` varchar(100) DEFAULT NULL,
  `credential` varchar(10) DEFAULT NULL COMMENT 'MD, DO, NP',
  `enumeration_date` date DEFAULT NULL,
  `last_updated` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `providers`
--

INSERT INTO `providers` (`npi`, `entity_type_code`, `first_name`, `last_name`, `org_name`, `credential`, `enumeration_date`, `last_updated`) VALUES
('1111111111', 1, 'John', 'Smith', NULL, 'MD', '2020-01-15', '2025-02-01'),
('2222222222', 1, 'Maria', 'Garcia', NULL, 'DO', '2018-05-20', '2025-01-10'),
('3333333333', 2, NULL, NULL, 'Lone Star Imaging', NULL, '2015-08-10', '2024-11-30');

-- --------------------------------------------------------

--
-- Table structure for table `provider_addresses`
--

CREATE TABLE `provider_addresses` (
  `id` int(11) NOT NULL,
  `npi` char(10) DEFAULT NULL,
  `address_purpose` varchar(20) DEFAULT NULL COMMENT 'LOCATION or MAILING',
  `street` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` char(2) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `provider_addresses`
--

INSERT INTO `provider_addresses` (`id`, `npi`, `address_purpose`, `street`, `city`, `state`, `zip`, `phone`) VALUES
(1, '1111111111', 'LOCATION', '100 Broadway', 'New York', 'NY', '10001', '212-555-0199'),
(2, '2222222222', 'LOCATION', '500 Sunset Blvd', 'Los Angeles', 'CA', '90028', '310-555-0122'),
(3, '3333333333', 'LOCATION', '200 Main St', 'Houston', 'TX', '77002', '713-555-0900');

-- --------------------------------------------------------

--
-- Table structure for table `provider_taxonomies`
--

CREATE TABLE `provider_taxonomies` (
  `id` int(11) NOT NULL,
  `npi` char(10) DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL COMMENT 'NPPES Taxonomy Code',
  `specialty` varchar(100) DEFAULT NULL,
  `license_num` varchar(50) DEFAULT NULL,
  `state` char(2) DEFAULT NULL,
  `is_primary` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `provider_taxonomies`
--

INSERT INTO `provider_taxonomies` (`id`, `npi`, `code`, `specialty`, `license_num`, `state`, `is_primary`) VALUES
(1, '1111111111', '207RC0000X', 'Cardiology', 'NY-98765', 'NY', 1),
(2, '2222222222', '208000000X', 'Pediatrics', 'CA-554433', 'CA', 1),
(3, '3333333333', '261QR0200X', 'Radiology Clinic', NULL, 'TX', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `credentialing_status`
--
ALTER TABLE `credentialing_status`
  ADD PRIMARY KEY (`id`),
  ADD KEY `npi` (`npi`);

--
-- Indexes for table `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`npi`);

--
-- Indexes for table `provider_addresses`
--
ALTER TABLE `provider_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `npi` (`npi`);

--
-- Indexes for table `provider_taxonomies`
--
ALTER TABLE `provider_taxonomies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `npi` (`npi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `credentialing_status`
--
ALTER TABLE `credentialing_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `provider_addresses`
--
ALTER TABLE `provider_addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `provider_taxonomies`
--
ALTER TABLE `provider_taxonomies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `credentialing_status`
--
ALTER TABLE `credentialing_status`
  ADD CONSTRAINT `credentialing_status_ibfk_1` FOREIGN KEY (`npi`) REFERENCES `providers` (`npi`);

--
-- Constraints for table `provider_addresses`
--
ALTER TABLE `provider_addresses`
  ADD CONSTRAINT `provider_addresses_ibfk_1` FOREIGN KEY (`npi`) REFERENCES `providers` (`npi`);

--
-- Constraints for table `provider_taxonomies`
--
ALTER TABLE `provider_taxonomies`
  ADD CONSTRAINT `provider_taxonomies_ibfk_1` FOREIGN KEY (`npi`) REFERENCES `providers` (`npi`);
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
