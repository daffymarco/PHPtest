-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           10.4.11-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.0.0.5958
-- --------------------------------------------------------

-- Copiando estrutura do banco de dados para phptest
CREATE DATABASE IF NOT EXISTS `phptest` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `phptest`;

-- Copiando estrutura para tabela phptest.user
CREATE TABLE `tab_cep` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`cep` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`date_consult` DATETIME NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	UNIQUE INDEX `cep` (`cep`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB;
