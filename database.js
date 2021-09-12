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
    try{
    await db.migrate({
        migrationsPath: './migrations/',
        force: 'last'});
    }catch(error){
        console.log(error)
    }
    return db;
}

module.exports = {setup}

