const {setup} = require('./database')
let db;
async function getUsers(){
    db = await setup()
    const users = await db.all(`SELECT * FROM users`);
    const entries = await db.all(`SELECT * FROM entries`);
    console.log(users);
    console.log(entries);

 
}

getUsers();