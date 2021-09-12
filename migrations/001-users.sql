DROP TABLE users;
CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  password TEXT NOT NULL,
  id VARCHAR(36) NOT NULL
);

INSERT INTO users (username, first_name, last_name, password, id)
VALUES ('testuser',
        'Test',
        'User',
        'password',
        'djnfidnrigndbi1e82'
        );
       
