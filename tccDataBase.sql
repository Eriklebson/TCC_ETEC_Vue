create database TCC_MainTemplate;
	use TCC_MainTemplate;

CREATE TABLE cidade (
  id_cidade int(11) NOT NULL AUTO_INCREMENT,
  descricao varchar(100) DEFAULT NULL,
  uf varchar(2) DEFAULT NULL,
  codigo_ibge int(11) DEFAULT NULL,
  ddd varchar(2) DEFAULT NULL,
  PRIMARY KEY (id_cidade),
  KEY id (id_cidade) USING BTREE,
  KEY cidade (id_cidade,uf) USING BTREE,
  KEY cidade_estado (uf) USING BTREE
);
    
CREATE TABLE logradouro (
  CEP varchar(11) NOT NULL,
  id_logradouro int(10) unsigned NOT NULL AUTO_INCREMENT,
  tipo varchar(50) DEFAULT NULL,
  descricao varchar(100) NOT NULL,
  id_cidade int(11) NOT NULL,
  UF varchar(2) NOT NULL,
  complemento varchar(100) DEFAULT NULL,
  descricao_sem_numero varchar(100) DEFAULT NULL,
  descricao_cidade varchar(100) DEFAULT NULL,
  codigo_cidade_ibge int(11) DEFAULT NULL,
  descricao_bairro varchar(100) DEFAULT NULL,
  PRIMARY KEY (id_logradouro),
  KEY cep (CEP) USING BTREE,
  KEY cidade (id_cidade,UF) USING BTREE,
  CONSTRAINT FK_cidade_2 FOREIGN KEY (id_cidade) REFERENCES cidade (id_cidade)
);
        
        create table endereco(
id_endereco int not null auto_increment,
numero int not null,
complemento varchar(255) not null,
id_cidade int not null,
id_logradouro int unsigned not null,
id_conta int not null,
primary key(id_endereco),
foreign key(id_cidade) references cidade(id_cidade),
foreign key(id_logradouro) references logradouro(id_logradouro),
foreign key(id_conta) references conta_site(id_conta)
);
    
		create table oficina(
	id_oficina integer auto_increment PRIMARY KEY,
	cnpj integer(255) not null,
	nome varchar(255) not null,
	dono varchar(255) not null
	);
    
		create table conta_site(
	id_conta integer auto_increment PRIMARY KEY,
	tipo_conta integer(1) not null,
	email varchar(255) not null unique,
	senha varchar(255) not null,
    imagem varchar(255) not null,
    nome varchar(255) not null,
	nascimento datetime not null,
	cpf varchar(255) not null unique,
	telefone varchar(255) not null unique,
    id_status integer,
	foreign key (id_status) references status_veiculo(id_status)
	);
    
		create table ordem_servico(
	id_ordem integer auto_increment PRIMARY KEY,
	data_abertura datetime not null,
	previsao_entrega datetime,
    files varchar(255) null,
    ordem_status varchar(255) not null,
	id_veiculo integer,
	id_servico integer,
    id_conta integer,
    foreign key (id_conta) references conta_site(id_conta),
	foreign key (id_veiculo) references veiculo(id_veiculo),
	foreign key (id_servico) references servicos(id_servico)
	);
    
		create table servicos(
	id_servico integer auto_increment PRIMARY KEY,
	nome varchar(255) not null,
	tempo text not null,
	valor decimal (7,2) not null
	);
    
		create table veiculo(
	id_veiculo integer auto_increment PRIMARY KEY,
	placa varchar(255) not null,
	marca varchar(255) not null,
	modelo varchar(255) not null,
	potencia decimal(2,1) not null,
	ano varchar(255) not null,
	cor varchar(255) not null,
    imagem varchar(255) not null,
	id_peca integer,
	id_status integer,
	foreign key (id_peca) references pecas(id_peca),
	foreign key (id_status) references status_veiculo(id_status)
	);
    
		create table pecas(
	id_peca integer auto_increment PRIMARY KEY,
	marca varchar(10) not null,
	codigo varchar(20)not null,
	tipo varchar(20)not null,
	preco decimal(6,2),
	id_teste integer,
	foreign key (id_teste) references teste_peca(id_teste)
	);
    
		create table status_veiculo(
	id_status integer auto_increment PRIMARY KEY
	);
    
		create table teste_peca(
	id_teste integer auto_increment PRIMARY KEY,
	tipo_peca varchar(10) not null,
	valor_min_aceito decimal(3,1) not null,
	valor_max_aceito decimal(3,1) not null,
	valor_contado decimal(3,1) not null
	);