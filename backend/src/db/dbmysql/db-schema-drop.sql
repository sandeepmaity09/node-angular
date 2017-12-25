


create database node_angular;

create table `users` (
    id int(11) auto_increment not null,
    email varchar(255) not null,
    password varchar(255) not null,    
    createdAt timestamp not null default '2000-01-01 00:00:00',
    updatedAt timestamp not null default '2000-01-01 00:00:00',
    primary key(id));


INSERT INTO `users` (`id`,`email`,`password`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'sandeepmaity09@gmail.com','$2a$08$SW74GkqR2jrGWQLa5q.3re.Ott0A6fKPvkb//8nO5riO0xG3JHyaG','2017-12-25 15:59:42','2017-12-25 15:59:42');