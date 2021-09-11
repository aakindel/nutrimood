const {setup} = require('./database')
async function getUsers(){
    
    const db = await setup()
    const users = await db.all(`SELECT * FROM users`);

    console.log(users);
}

getUsers();