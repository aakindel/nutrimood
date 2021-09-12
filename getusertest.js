const {setup} = require('./database')
let db;
async function getUsers(){
    db = await setup()
    const users = await db.all(`SELECT * FROM users`);
    console.log(users);
 
}

getUsers();