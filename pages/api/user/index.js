const {User} = require('../../../models/user');

async function validateUniqueUsername(username) {
  let errorMsg = null;
  const usernameInDb = await User.getUserByUsername(username);

  if (usernameInDb.length != 0) {
    console.log(usernameInDb)
    errorMsg = "Username already used"
    return errorMsg;
  }

}

export default async function userHandler(req, res) {
  
  const method = req.method;
  console.log("IN USER ENDPOINT")
  switch (method) {
    case 'GET':
      /* Gets all users from database */
      const users = await User.getAllUsers();
      res.status(200).json({ users: users });
      break;
    case 'POST':
      //const {username, first_name, last_name, password} = req.body;
      
      const username = req.body.username
      const first_name = req.body.first_name
      const last_name = req.body.last_name
      const password = req.body.password

  

      console.log(username, "*******************")

      const errorMsg = await validateUniqueUsername(username);
      if (!errorMsg) {
        res.status(400);
        res.json({ errorMsg });
        return;
      }
      else{
        /* Todo: create a new user */
        const user = await User.createNewUser(username, 
        first_name, last_name, password);
        res.status(201).json({ user: user});
        break;
      }

     
    default:
      res.setHeader('Allow', [ 'GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
