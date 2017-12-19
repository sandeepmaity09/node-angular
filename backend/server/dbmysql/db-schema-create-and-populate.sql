# Converted with pg2mysql-1.9
# Converted on Mon, 18 Dec 2017 08:10:51 -0500
# Lightbox Technologies Inc. http://www.lightbox.ca

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone="+00:00";

CREATE TABLE `Courses`
(
  id int(11) auto_increment NOT NULL,
  url varchar(255),
  description varchar(255) NOT NULL,
  `longDescription` text NOT NULL,
  `seqNo` int(11) NOT NULL,
  `iconUrl` varchar(255) NOT NULL,
  `comingSoon` bool NOT NULL DEFAULT false,
  `isNew` bool NOT NULL DEFAULT false,
  `isOngoing` bool NOT NULL DEFAULT false,
  `visibleFrom` timestamp NOT NULL DEFAULT '1970-02-01 00:00:00+01',
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  `courseListIcon` varchar(255)
, PRIMARY KEY(`id`)
);

CREATE TABLE `Lessons`
(
  id int(11) auto_increment NOT NULL,
  url varchar(255),
  description varchar(255) NOT NULL,
  duration varchar(255) NOT NULL,
  `seqNo` int(11) NOT NULL,
  `courseId` int(11),
  pro bool DEFAULT 0,
  `gitHubUrl` varchar(255) NOT NULL,
  tags varchar(255) DEFAULT '',
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL
      REFERENCES `Courses` (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
, PRIMARY KEY(`id`)
);