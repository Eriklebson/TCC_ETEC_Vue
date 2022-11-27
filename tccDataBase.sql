create database TCC_Main;
use TCC_Main;

create table endereco(
cep integer(8) not null PRIMARY KEY,
rua varchar(20) not null,
numero integer not null
);

create table oficina(
id_oficina integer auto_increment PRIMARY KEY,
cnpj integer(14) not null,
nome varchar(20) not null,
dono varchar(20) not null,
cep integer(8),
foreign key (cep) references endereco(cep)
);

create table funcionario(
id_funcionario integer auto_increment PRIMARY KEY,
funcao varchar(10) not null,
nome varchar(12) not null,
cpf varchar(15) not null,
data_admissao date not null,
horario_turno varchar(100) not null,
telefone varchar(15) not null,
cep integer(8),
id_oficina integer,
foreign key (cep) references endereco(cep),
foreign key (id_oficina) references oficina(id_oficina)
);

create table status_veiculo(
id_status integer auto_increment PRIMARY KEY,
aguardando_peca char(3) not null,
em_fase_teste char(3) not null,
concluido char(3) not null
);

create table teste_peca(
id_teste integer auto_increment PRIMARY KEY,
tipo_peca varchar(10) not null,
valor_min_aceito decimal(3,1) not null,
valor_max_aceito decimal(3,1) not null,
valor_contado decimal(3,1) not null
);

create table servicos(
id_servico integer auto_increment PRIMARY KEY,
tipo varchar(10) not null,
tempo datetime not null,
valor decimal (7,2) not null
);

create table dono_veiculo(
id_dono integer auto_increment PRIMARY KEY,
nome varchar(20) not null,
nascimento datetime not null,
cpf varchar(15) not null,
telefone varchar(15) not null,
cep integer,
foreign key (cep) references endereco(cep)
);

create table conta_site(
id_conta integer auto_increment PRIMARY KEY,
tipo_conta integer(1) not null,
nome varchar(255) not null,
email varchar(30) not null,
senha varchar(255) not null,
id_status integer,
id_dono integer,
id_funcionario integer,
foreign key (id_status) references status_veiculo(id_status),
foreign key (id_dono) references dono_veiculo(id_dono),
foreign key (id_funcionario) references funcionario(id_funcionario)
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

create table veiculo(
id_veiculo integer auto_increment PRIMARY KEY,
placa varchar(10) not null,
marca varchar(20) not null,
modelo varchar(20) not null,
potencia decimal(2,1) not null,
ano integer(4) not null,
cor varchar(10) not null,
id_dono integer,
id_peca integer,
id_status integer,
foreign key (id_dono) references dono_veiculo(id_dono),
foreign key (id_peca) references pecas(id_peca),
foreign key (id_status) references status_veiculo(id_status)
);


create table ordem_servico(
id_ordem integer auto_increment PRIMARY KEY,
data_abertura datetime not null,
previsao_entrega datetime,
id_veiculo integer,
id_funcionario integer,
id_servico integer,
foreign key (id_veiculo) references veiculo(id_veiculo),
foreign key (id_funcionario) references funcionario(id_funcionario),
foreign key (id_servico) references servicos(id_servico)
);



