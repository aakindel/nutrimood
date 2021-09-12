const User = require('../../../models/user');

async function validateUniqueUsername(username) {
  let errorMsg = null;
  const usernameInDb = await User?.getUser(username);

  if (usernameInDb) {
    errorMsg = "Username already used"
  }

  return errorMsg;
}

export default async function userHandler(req, res) {
  
  const method = req.method;
  
  switch (method) {
    case 'GET':
      /* Gets all users from database */
      const users = await User?.getAllUsers();
      res.status(200).json({ users: users });
      break;
    case 'POST':
      const {username, first_name, last_name, password} = req.body;

      const errorMsg = await validateUniqueUsername(username);
      if (errorMsg) {
        res.status(400);
        res.json({ errorMsg });
        return;
      }

      /* Todo: create a new user */
      const user = await User?.createUser(username, 
        first_name, last_name, password);
      res.status(201).json({ user: user});
      break;
    default:
      res.setHeader('Allow', [ 'GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
