-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Nov-2020 às 05:43
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `comercio_amigavel`
--
CREATE DATABASE IF NOT EXISTS `comercio_amigavel` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `comercio_amigavel`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `id` int(11) NOT NULL,
  `nome` varchar(120) NOT NULL,
  `negocio` varchar(200) DEFAULT NULL,
  `endereco` varchar(500) NOT NULL,
  `cpf` char(11) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` char(32) NOT NULL,
  `img` varchar(200) NOT NULL DEFAULT './images/perfil-sem-foto.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cadastro`
--

INSERT INTO `cadastro` (`id`, `nome`, `negocio`, `endereco`, `cpf`, `categoria`, `email`, `senha`, `img`) VALUES
(1, '$nome', '$negocio', '$endereco', '$cpf', '$categoria', '$email', '$senha', './images/perfil-sem-foto.jpg'),
(2, 'Lucas Corte', 'de Freitas', 'Rua Zurich Número 34', '11111111111', 'Serviços', 'lucascorte@outlook.com', 'e10adc3949ba59abbe56e057f20f883e', './images/perfil-sem-foto.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD UNIQUE KEY `negocio` (`negocio`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cadastro`
--
ALTER TABLE `cadastro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
