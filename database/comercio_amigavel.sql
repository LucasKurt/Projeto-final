-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06-Nov-2020 às 21:50
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
-- Estrutura da tabela `anuncios`
--

CREATE TABLE `anuncios` (
  `id` int(11) NOT NULL,
  `id_pessoa` int(11) NOT NULL,
  `img` varchar(500) NOT NULL,
  `descricao` varchar(70) NOT NULL,
  `valor` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `anuncios`
--

INSERT INTO `anuncios` (`id`, `id_pessoa`, `img`, `descricao`, `valor`) VALUES
(2, 2, 'https://img.itdg.com.br/tdg/images/recipes/000/029/124/320646/320646_original.jpg?mode=crop&width=710&height=400', 'Bolo de laranja', 'R$ 5,00'),
(3, 2, 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 'Bolo de cenoura', 'R$ 6,00');

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
  `img_perfil` varchar(500) NOT NULL DEFAULT './images/perfil-sem-foto.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cadastro`
--

INSERT INTO `cadastro` (`id`, `nome`, `negocio`, `endereco`, `cpf`, `categoria`, `email`, `senha`, `img_perfil`) VALUES
(1, '$nome', '$negocio', '$endereco', '$cpf', '$categoria', '$email', '$senha', './images/perfil-sem-foto.jpg'),
(2, 'Lucas Côrte Galdino de Freitas', 'Amor aos pedaços', 'Rua Zurich Número 34', '11111111111', 'Serviços', 'lucascorte@outlook.com', 'e10adc3949ba59abbe56e057f20f883e', 'https://images.pexels.com/photos/1359330/pexels-photo-1359330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'),
(3, 'Audrey Nogueira', 'Status', 'Vila Prudente 220', '22222222222', 'Serviços', 'audreycbnf@gmail.com', '28d1006d6a8dc463a7d65a9d13532c7e', './images/perfil-sem-foto.jpg'),
(4, 'Gabriela Vespoli', 'Vem Meteoro', 'Rua aerolito n 1620', '33333333333', 'Produtos', 'gabiat3@vemmeteoro.com', '5021319e8257efc0c1069966ec2b912a', './images/perfil-sem-foto.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `anuncios`
--
ALTER TABLE `anuncios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_aluno` (`id_pessoa`);

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
-- AUTO_INCREMENT de tabela `anuncios`
--
ALTER TABLE `anuncios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `cadastro`
--
ALTER TABLE `cadastro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `anuncios`
--
ALTER TABLE `anuncios`
  ADD CONSTRAINT `fk_aluno` FOREIGN KEY (`id_pessoa`) REFERENCES `anuncios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
