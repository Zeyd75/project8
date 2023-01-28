-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 26 jan. 2023 à 20:55
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projet8`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pseudo` (`pseudo`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `pseudo`, `email`, `password`, `timestamp`) VALUES
(1, 'zedo', 'zedo@zedo.com', '0123456789', '2023-01-21 21:09:46'),
(2, 'lama', 'bernard@lama.com', '0123456789', '2023-01-21 21:13:05'),
(3, 'charbonnier', 'lionel@123.fr', 'azerty', '2023-01-21 21:16:21'),
(5, 'zedo75', 'f6a73cfd6e80800c8592d9de56566e95b7615fb8ca07de32091b114327932542', '$2b$10$9y3O4b88LU.RPC9IHejxrOhXujxXg2I0IhQWSJCL26I57qvCVSPzu', '2023-01-23 00:52:19'),
(6, 'bats', 'd779684e247a9fb6d9079465cc7d33a43174a7c635cd97d4bfb56fececd02d52', '$2b$10$3hOrTYi0vPRSsmOPqgfTVOPUExlKQYk6GsslbhvDHfIiF9dIlV3da', '2023-01-23 00:54:12'),
(7, 'amoros', '22500427da40090a50dba57c9a892460031a1406403cf9c63cf093cf22f7db46', '$2b$10$EHxs2ac0to3lcavdD6Dy0e4PveRVy2LaVanc9.VA9A4mLtfKNgrgu', '2023-01-23 00:56:03'),
(8, 'navas', 'e5bcab84a7427c30614e5a910c2788b14902466de6f2b98f0064d5db678f751c', '$2b$10$V1X5oReWk7z6guTrmGJAZubJ6ju40KJLi.a4GdzX0JMzNfebUf5TC', '2023-01-23 00:57:56'),
(9, 'hakimi', '6c697b59484ee14b4af233de1fce35bf8f561928e0de698659f9badc6ae0d194', '$2b$10$DHv.k6HHSmShNw.mImNsKexLl.XUdMEQpObchGvDeYBMAqDDUMhry', '2023-01-23 22:52:20'),
(10, 'kimpembe', '2cd6b8ede9ed42c57ecb80322bb1afac6eb9f2bb2ccc9f256f5ffa668d22f868', '$2b$10$6WyDeG8ZTNcuSIztI7pIj.DP.rSKNoTV0VBHRR3khCPoJp9dfOYom', '2023-01-25 12:23:24'),
(11, 'ramos', 'c56ef5f0fca58080f544de26c0083b1a54d04f2a2a95f61e154fe92a63f84bf8', '$2b$10$gTlxc29N.e6P6f2pV/m6KO.gXoQRPnYgwL/J2HOEV8hMjlIawzs0u', '2023-01-25 18:24:04'),
(12, 'marquinhos', 'fc09af885daf10a7bd8347bac5d348e9526398c8fa654035e228c1f8ec868296', '$2b$10$w9wcYRnPVoT6p8UEPDNOE.CPCE3ZYG1olta9CUAlbjEb/Yp0CG/Fi', '2023-01-25 18:25:18'),
(13, 'verratti', '03b54f1453fc1a5fc02b46092ded298dedd786415e5465c2609363bc950cd96f', '$2b$10$FlGfWaJc1zthdWkQr3ZHC.UvNL/5Zv92x0EyOPn1vsZjC4UtLMU02', '2023-01-25 18:26:57'),
(14, 'mbappe', '91ff7d6aa73e0e3e7c1e2883891b42457b48b2e698aba30cc1f1d382c3164c13', '$2b$10$n7vm1h/r52Cof8wLJAoYKOIsEic8vtdoDsfaYgbcm6jdSL8Vo8KWW', '2023-01-25 18:32:29'),
(15, 'ruiz', '16c7f0c55de707509afafdb92cab7c0188ccae02d8add905b091b99fdfc2c260', '$2b$10$CoY2rkEXdDmpUEyhcmNRpeEX2DiVZUHOD7n/sO.ILIVKJQyI5eRsW', '2023-01-25 18:54:03'),
(16, 'neymar', 'cd535f4bcf4d2642c0c15c99b6eaaf7819ca9e07a34c047086293d6a3ccab538', '$2b$10$vV2WisRSdG7eBONscD3l1e97JxJ3PipRdtj609JVpL56ILXRCRRp.', '2023-01-25 19:01:40'),
(21, 'bernat', '8a0e9cc5604136c0a6bd3ad9a376cdd161159bee7e429445e46a2a30824bef7f', '$2b$10$j2ttrY3UHAYn9kxNTlkLvu/yqeqJYdmbquYZz2IsSEFyM8voCErgi', '2023-01-25 20:22:05'),
(22, 'danilo', '293d5c5a687e864ba2a1f8490637ad5cd5d6cfc3ef0e1117c6058d11eb623dc2', '$2b$10$OoSN8RCacBZgeE7M86csmOzboYtSrzeFv7HlMQnSCUrQArABvmx6C', '2023-01-25 21:52:57'),
(26, 'rico', '4256c60e4bf80ccf6cf98224c7a9c29fb9ed3f00f53512f80c57ee3e11bb1048', '$2b$10$pHKdzhzC8BuButWNt42W0eL92HE7b74Z9M85ijL4WCGeKgjVXcTwO', '2023-01-25 21:55:16'),
(27, 'vitinha', 'vitorgmail.com', 'aA5555555', '2023-01-26 10:51:52'),
(30, 'sanches', '11d5c13c27af82fb334c057e7ccbf6f8292df59fc37c436f7c493dc59222236d', '$2b$10$wI9evyNhnLx75FAot0AaI.8xb8C/FfWbnnqAwIB6IXmGOe63aeoL6', '2023-01-26 11:04:20'),
(31, 'mendes', 'fb565699a6f5cfc55e0151d431793cf2a433d9d40e1565237f8c58c40bbb805c', '$2b$10$r3qPDtfrDB7qOxW32Lg82uMLhW8PNOecDRsnSAoqd9erEHnWANN/W', '2023-01-26 15:41:23'),
(32, 'mukiele', 'f85fd817d7b78d28e4b320aeed89d4ada47dbcd30cc8bf9330cecab9e9eb0f38', '$2b$10$3m41p9oejjpDB/mo4OzlM.KcaxxpipGa/IljozdkJTOrU137D..J.', '2023-01-26 16:35:18'),
(33, 'soler', '9f2dea78b79954a39863149844eafa045bb8ea63f04686feb4c46a34faeb0960', '$2b$10$dJDnaSF47Z8iRDgqYOl4LuFTLaB8jqOblykYuw.mC7sf4D4KguIP.', '2023-01-26 16:54:50'),
(34, 'messi', 'd948330c2e07ddb23c2a981f3da0ace5d24b1c3d6ff58a7257ee068f6c23805f', '$2b$10$YB549m7PF6wmr1MvK7mTauJl/MUGmzvNKbXlY2BdS1OaiId1Y1I9S', '2023-01-26 17:18:15'),
(35, 'bitshiabu', 'ad5d53737e1eea7038c865b9833fa616dec55528a0748e4aedbff7f2f2e28b40', '$2b$10$BKvAMSOenc2zDUKNMPPJyun8E1rhjzYSIA/uvIFFg95J5n3kaRdz6', '2023-01-26 20:29:22');

-- --------------------------------------------------------

--
-- Structure de la table `user_file`
--

DROP TABLE IF EXISTS `user_file`;
CREATE TABLE IF NOT EXISTS `user_file` (
  `id_user_file` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_file_userId` int(10) UNSIGNED NOT NULL,
  `user_file_lastName` varchar(250) NOT NULL,
  `user_file_firstName` varchar(250) NOT NULL,
  `user_file_age` tinyint(4) NOT NULL,
  `user_file_profilePic` varchar(250) NOT NULL,
  PRIMARY KEY (`id_user_file`),
  KEY `user_file_userId` (`user_file_userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user_file`
--

INSERT INTO `user_file` (`id_user_file`, `user_file_userId`, `user_file_lastName`, `user_file_firstName`, `user_file_age`, `user_file_profilePic`) VALUES
(1, 1, 'Flanders', 'Zed', 38, 'jhjhjhjhjhjhjh');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `user_file`
--
ALTER TABLE `user_file`
  ADD CONSTRAINT `user_file_ibfk_1` FOREIGN KEY (`user_file_userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
