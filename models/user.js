// import { NextApiRequest, NextApiResponse } from "next";
// import sqlite3 from 'sqlite3';
// import uuid from 'uuidv4';
// import setup from "../database";

const {setup} = require('../database');
const {uuid} = require('uuidv4');

let db = '';
async function getdb(){
    db = await setup();
}
getdb();
console.log(db)

// export default class User {
class User {
    static async createNewUser({username, first_name, last_name, password}) {
        const db = await setup();

        // query for duplicate username
        const duplicateQuery = await db.all(`SELECT COUNT(*) FROM users WHERE username = ?`, username);
        if (duplicateQuery >= 1) {
            throw new Error('Error: username already exists');
        }

        const id = uuid(); // generate uuid for new user
        
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

        return JSON.stringify(user); // return format may change
    }

    static async getUserByUsername(username) {
        const db = await setup();
        const user = await db.all(`SELECT * FROM users WHERE username = ?`, username);
        db.close();

        return JSON.stringify(user); // return format may change
    }

    static async getAllUser() {
        const db = await setup();
        const users = await db.all(`SELECT * FROM users`);
        db.close();

        return JSON.stringify(users); // return format may change
    }
}