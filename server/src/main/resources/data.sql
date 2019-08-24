DROP TABLE IF EXISTS questions;
 
CREATE TABLE questions (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  question VARCHAR(250) NOT NULL,
  answer VARCHAR(250) NOT NULL,
  category INT NOT NULL
);
 
INSERT INTO questions (id, question, answer, category) VALUES
  (1, 'Java Core 1', 'Some Answer 1', 0),
  (2, 'Java Core 2', 'Some Answer 2', 0),
  (3, 'Collections 1', 'Some Answer', 1),
  (4, 'Multithreading 1', 'Some Answer', 2);