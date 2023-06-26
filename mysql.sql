CREATE TABLE users (
  userID int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  phone varchar(255) NOT NULL,
  PRIMARY KEY (userID)
) ;

CREATE TABLE movies (
  movieID int NOT NULL AUTO_INCREMENT,
  userID int DEFAULT NULL,
  imdbID int DEFAULT NULL,
  posterPath varchar(255) DEFAULT NULL,
  title varchar(255) DEFAULT NULL,
  status varchar(255) DEFAULT NULL,
  PRIMARY KEY (movieID),
  KEY movies_ibfk_1 (userID),
  CONSTRAINT movies_ibfk_1 FOREIGN KEY (userID) REFERENCES users (userID) ON DELETE CASCADE
) ;

CREATE TABLE rating (
  id int NOT NULL AUTO_INCREMENT,
  review text,
  movieID int DEFAULT NULL,
  userID  int DEFAULT NULL,
  rating int DEFAULT NULL,
  PRIMARY KEY (id),
  KEY rating_ibfk_1 (movieID),
  KEY rating_ibfk_2 (userID),
  CONSTRAINT rating_ibfk_1 FOREIGN KEY (movieID) REFERENCES movies (movieID) ON DELETE CASCADE,
  CONSTRAINT rating_ibfk_2 FOREIGN KEY (userID) REFERENCES users (userID) ON DELETE CASCADE
) ;

CREATE TABLE genero (
  id int NOT NULL AUTO_INCREMENT,
  genero varchar(255) DEFAULT NULL,
  descricao text,
  PRIMARY KEY (id)
) ;


--















