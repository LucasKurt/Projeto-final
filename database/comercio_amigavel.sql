CREATE DATABASE IF NOT EXISTS `comercio_amigavel` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `comercio_amigavel`;

CREATE TABLE `anuncios` (
  `id` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `img` varchar(500) NOT NULL,
  `descricao` varchar(70) NOT NULL,
  `valor` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `anuncios` (`id`, `id_vendedor`, `img`, `descricao`, `valor`) VALUES
(2, 1, 'https://img.itdg.com.br/tdg/images/recipes/000/029/124/320646/320646_original.jpg?mode=crop&width=710&height=400', 'Bolo de laranja', 'R$ 10,00');

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nome` varchar(70) NOT NULL,
  `email` varchar(70) NOT NULL,
  `senha` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cliente` (`id`, `nome`, `email`, `senha`) VALUES
(1, 'Lucão da Villa', 'lucao@outlook.com', 'e10adc3949ba59abbe56e057f20f883e');

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

INSERT INTO `vendedor` (`id`, `nome`, `negocio`, `endereco`, `cpf`, `telefone`, `email`, `senha`, `img_perfil`) VALUES
(1, 'Lucas Corte Galdino de Freitas', '', 'Rua Zurich Número 34', '111.111.111-11', '(11) 33262-800', 'lucas@outlook.com', 'e10adc3949ba59abbe56e057f20f883e', 'https://avatars3.githubusercontent.com/u/22542558?s=460&u=df058dd33c0746268fed5eae488762fa24ce2765&v=4');

ALTER TABLE `anuncios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_vendedor` (`id_vendedor`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;

ALTER TABLE `vendedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `anuncios`
  ADD CONSTRAINT `fk_vendedor` FOREIGN KEY (`id_vendedor`) REFERENCES `vendedor` (`id`);
COMMIT;
