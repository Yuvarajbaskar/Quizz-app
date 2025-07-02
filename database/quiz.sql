CREATE DATABASE IF NOT EXISTS quizdb;
USE quizdb;

CREATE TABLE question (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  question VARCHAR(255),
  answer VARCHAR(255)
);

CREATE TABLE question_options (
  question_id BIGINT,
  options VARCHAR(255)
);

INSERT INTO question (question, answer) VALUES ('What is Java?', 'A programming language');
INSERT INTO question_options VALUES (1, 'A fruit'), (1, 'A programming language'), (1, 'An island'), (1, 'None');