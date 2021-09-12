DROP TABLE users;
DROP TABLE entries;

CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  password TEXT NOT NULL,
  id VARCHAR(36) NOT NULL
);

CREATE TABLE entries (
  id VARCHAR PRIMARY KEY,
  entry_date DATE NOT NULL,
  food INTEGER NOT NULL, 
  mood INTEGER NOT NULL,
  user REFERENCES users(username)
);

INSERT INTO users (username, first_name, last_name, password, id)
VALUES ('testuser',
        'Test',
        'User',
        'password',
        'djnfidnrigndbi1e82'
        );
       
INSERT INTO entries (id, date, food_health_rating, mood, food, user_id)
VALUES ('lk4435hkj345l3fs',
        new Date(),
        8,
        5,
        'djnfidnrigndbi1e82'
        );