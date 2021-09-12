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

async function setup(){
   
    db =  await openDB();

    await db.migrate({
        migrationsPath: './migrations',  // TODO: this path doesn't work 
        force: 'last'});

    const users = await db.all(`SELECT * FROM users`);
    // console.log(users);

    return db;
}

module.exports = {setup}

