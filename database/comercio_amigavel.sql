-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 06-Nov-2020 às 22:19
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

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


DROP TABLE IF EXISTS `anuncios`;
CREATE TABLE IF NOT EXISTS `anuncios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pessoa` int(11) NOT NULL,
  `img` varchar(500) NOT NULL,
  `descricao` varchar(70) NOT NULL,
  `valor` varchar(70) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pessoa` (`id_pessoa`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `anuncios`
--

INSERT INTO `anuncios` (`id`, `id_pessoa`, `img`, `descricao`, `valor`) VALUES
(1, 1, 'https://www.cristaisaquarius.com.br/blog/wp-content/uploads/2017/09/significado-das-pedras-1.jpg', 'Não são pedras, são aerolitos', 'R$ 10,00'),
(3, 3, 'https://i1.sndcdn.com/artworks-000202365892-gt6wr8-t500x500.jpg', 'Suco de Tamarindo', 'R$ 3,00'),
(4, 4, 'https://pbs.twimg.com/media/BsInQCYCUAAmLAo.jpg', 'Churros', 'R$ 2,00'),
(5, 1, 'https://image.freepik.com/free-vector/meteor-coming-towards-planet-earth_1308-10561.jpg', 'Trago meteoros e a pessoa amada em 3 dias', 'R$ 5,00'),
(6, 5, 'https://i.ytimg.com/vi/nCQRRxQWc9c/hqdefault.jpg', 'Unicórnios de chocolate', 'R$ 4,00'),
(16, 6, 'https://img.itdg.com.br/tdg/images/recipes/000/029/124/320646/320646_original.jpg?mode=crop&width=710&height=400', 'Bolo de Laranja', 'R$ 4,00');


-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro`
--


DROP TABLE IF EXISTS `cadastro`;
CREATE TABLE IF NOT EXISTS `cadastro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) NOT NULL,
  `negocio` varchar(200) DEFAULT NULL,
  `endereco` varchar(500) NOT NULL,
  `cpf` char(11) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` char(32) NOT NULL,

  `img_perfil` varchar(200) NOT NULL DEFAULT './images/perfil-sem-foto.jpg',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `negocio` (`negocio`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;


--
-- Extraindo dados da tabela `cadastro`
--

INSERT INTO `cadastro` (`id`, `nome`, `negocio`, `endereco`, `cpf`, `categoria`, `email`, `senha`, `img_perfil`) VALUES

(1, 'Jane Doe', 'Jane Doe', 'Rua quatro, 167', '321', 'Produtos', 'jane@doe.com', 'e10adc3949ba59abbe56e057f20f883e', 'https://i.pinimg.com/originals/24/38/27/243827161c1575813c745ac5b8eabf5e.jpg'),
(3, 'Chaves', 'Tienda del chavo', 'Rua vinte e nove, 29', '32434567899', 'Produtos', 'chaves@tenda.com', 'e10adc3949ba59abbe56e057f20f883e', 'https://files.metropoles.com/stories/5-episodios-memoraveis-de-chaves/assets/1.jpeg'),
(4, 'Dona Florinda', 'Churros da Dona Florinda', 'Rua douze, 12', '44456789387', 'Produtos', 'florinda@churros.com', 'e10adc3949ba59abbe56e057f20f883e', 'https://miro.medium.com/max/793/1*oX16NR_GtosBORoAKQ7oSg.jpeg'),
(5, 'Agnes', 'Agnes', 'Rua fluffy', '23453467844', 'Produtos', 'agnes@minions.com', 'e10adc3949ba59abbe56e057f20f883e', 'https://i.pinimg.com/736x/3e/68/03/3e6803b354dff7dea6e4101ed7ae5123.jpg'),
(6, 'Maria Silva', 'Bolos Caseiros', 'Rua dez, 56', '23456487621', 'Produtos', 'maria@bolo.com.br', 'e10adc3949ba59abbe56e057f20f883e', 'https://i.pinimg.com/originals/4b/46/a3/4b46a3c455642b121cbba0060a5dd5f3.png');

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
