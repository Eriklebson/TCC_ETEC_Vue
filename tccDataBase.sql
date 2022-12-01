	create database TCC_MainTemplate;
	use TCC_MainTemplate;
    
    CREATE TABLE Regiao (
		Id INT NOT NULL AUTO_INCREMENT,
		Nome VARCHAR(255) NOT NULL,
		PRIMARY KEY (Id)
		);
        
	CREATE TABLE Municipio (
		Id  INT NOT NULL AUTO_INCREMENT,
		Codigo INT NOT NULL,
		Nome  VARCHAR(255) NOT NULL,
		Uf CHAR(2) NOT NULL,
		PRIMARY KEY (Id)
		);
        
	CREATE TABLE Estado (
		Id  INT NOT NULL AUTO_INCREMENT,
		CodigoUf INT NOT NULL,
		Nome VARCHAR(255) NOT NULL,
		Uf CHAR(2) NOT NULL,
		Regiao INT NOT NULL,
		PRIMARY KEY (Id)
		);
        
	CREATE TABLE Bairro (
		Id  INT NOT NULL AUTO_INCREMENT,
		Codigo CHAR(10)	NOT NULL,
		Nome VARCHAR(255) NOT NULL,
		Uf CHAR(2) NOT NULL,
		PRIMARY KEY (Id)
		);
        
        create table endereco(
	id_endereco integer auto_increment PRIMARY KEY,
    id_regiao integer,
    id_municipio integer,
    id_estado integer,
    id_bairro integer,
    foreign key (id_regiao) references Regiao(Id),
    foreign key (id_municipio) references Municipio(Id) ,
    foreign key (id_estado) references Estado(Id),
    foreign key (id_bairro) references Bairro(Id)
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
	cpf varchar(255) not null,
	telefone varchar(255) not null,
    id_status integer,
	foreign key (id_status) references status_veiculo(id_status)
	);
    
		create table ordem_servico(
	id_ordem integer auto_increment PRIMARY KEY,
	data_abertura datetime not null,
	previsao_entrega datetime,
    files varchar(255) null,
	id_veiculo integer,
	id_servico integer,
    id_conta integer,
    foreign key (id_conta) references conta_site(id_conta),
	foreign key (id_veiculo) references veiculo(id_veiculo),
	foreign key (id_servico) references servicos(id_servico)
	);
    
		create table servicos(
	id_servico integer auto_increment PRIMARY KEY,
	nome_servico varchar(255) not null,
	tempo datetime not null,
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
    
    

    
    
    
    