const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const {open} = require('sqlite');

let db;
async function openDB (){
    return open({
        filename : './db.sqlite',
        driver: sqlite3.Database
    });
}

async function connect(){
    const db = await openDB()
    return db
}

async function setup(){
    db =  await openDB();
    await db.migrate({
        migrationsPath: './migrations',  
        force: 'last'});
    const users = await db.all(`SELECT * FROM users`);

    return db;
}

module.exports = {connect, setup}

