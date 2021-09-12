const {setup} = require('./database')
async function getUsers(){
    const db = await setup()
    const users = await db.all(`SELECT * FROM users`);
    console.log(users);
    // await db.run(`INSERT INTO users (username, first_name, last_name, password)
    // VALUES ('testuser8',
    //         'Test',
    //         'User',
    //         'password'
    //         )`);
    // const userss = await db.all(`SELECT * FROM users`);
    // console.log(userss);
}

getUsers();