// import { NextApiRequest, NextApiResponse } from "next";
// import sqlite3 from 'sqlite3';
// import setup from "../database";


const {setup} = require('../database')
let db = '';
async function getdb(){
    db = await setup();
}
getdb();
console.log(db)

// export default class User {
class User {
    static async createNewUser({username, first_name, last_name, password, id}) {
        const db = await setup();

        // query for duplicate username
        const duplicateQuery = await db.all(`SELECT COUNT(*) FROM users WHERE username = ?`, username);
        if (duplicateQuery >= 1) {
            throw new Error('Error: username already exists');
        }

        // insert new data into user table
        const addUser = await db.run(`INSERT INTO users (username, first_name, last_name, password, id)
            VALUES (?, ?, ?, ?, ?)`, username, first_name, last_name, password, id
            );
        
        const viewDb = await db.all(`SELECT * FROM users`);
        console.log(viewDb);
        
        db.close();
    }

    static async getUserById(id) {
        const db = await setup();
        const user = await db.all(`SELECT * FROM users WHERE id = ?`, id);
        db.close();

        return JSON.stringify(user);
    }

    static async getUserByUsername(username) {
        const db = await setup();
        const user = await db.all(`SELECT * FROM users WHERE username = ?`, username);
        db.close();

        return JSON.stringify(user);
    }
}