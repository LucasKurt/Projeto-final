CREATE DATABASE IF NOT EXISTS `comercio_amigavel` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `comercio_amigavel`;

CREATE TABLE `anuncios` (
  `id` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `img` varchar(500) NOT NULL,
  `descricao` varchar(70) NOT NULL,
  `valor` varchar(70) NOT NULL,
  `doacao` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `anuncios`;

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nome` varchar(70) NOT NULL,
  `email` varchar(70) NOT NULL,
  `senha` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `cliente`;

CREATE TABLE `vendedor` (
  `id` int(11) NOT NULL,
  `nome` varchar(120) NOT NULL,
  `negocio` varchar(200) DEFAULT NULL,
  `endereco` varchar(500) NOT NULL,
  `cpf` char(14) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` char(32) NOT NULL,
  `img_perfil` varchar(500) NOT NULL DEFAULT './images/perfil-sem-foto.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `vendedor`;

ALTER TABLE `anuncios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_anuncios` (`id_vendedor`);

ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD UNIQUE KEY `Telefone` (`telefone`),
  ADD UNIQUE KEY `negocio` (`negocio`);

ALTER TABLE `anuncios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `vendedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `anuncios`
  ADD CONSTRAINT `fk_anuncios` FOREIGN KEY (`id_vendedor`) REFERENCES `anuncios` (`id`);