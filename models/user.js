
const { connect,setup} = require('../database');
const {uuid} = require('uuidv4');


class User {
    static async createNewUser(username, first_name, last_name, password) {
        const db = await connect();

        // query for duplicate username
        const duplicateQuery = await db.all(`SELECT COUNT(*) FROM users WHERE username = ?`, username);
        if (duplicateQuery >= 1) {
            throw new Error('Error: username already exists');
        }

        // generate uuid for new user
        const id = uuid(); 
        
        // insert new data into user table
        const addUser = await db.run(`INSERT INTO users (username, first_name, last_name, password, id)
            VALUES (?, ?, ?, ?, ?)`, username, first_name, last_name, password, id
            );
        
        const viewDb = await db.all(`SELECT * FROM users`);
        console.log(viewDb);
        
        db.close();

        return JSON.stringify(addUser);
    }

    static async getUserById(id) {
        const db = await connect();
        const user = await db.all(`SELECT * FROM users WHERE id = ?`, id);
        db.close();

        return JSON.stringify(user); // return format may change
    }

    static async getUserByUsername(username) {
        const db = await connect();
        const user = await db.all(`SELECT * FROM users WHERE username = ?`, username);
        db.close();

        return JSON.stringify(user); // return format may change
    }

    static async getAllUsers() {
        const db = await connect();
        const users = await db.all(`SELECT * FROM users`);
        db.close();
        return JSON.stringify(users); // return format may change
    }
}

module.exports = { User }