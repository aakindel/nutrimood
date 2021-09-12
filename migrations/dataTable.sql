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
  date TEXT NOT NULL,
  food_health_rating TEXT NOT NULL,
  mood TEXT NOT NULL,
  food TEXT NOT NULL, /* Combine list of food into a large string */
  user_id REFERENCES users(id)
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
        'feb08,2021',
        '8',
        'happy',
        'banana,chicken,oreo',
        'djnfidnrigndbi1e82'
        );