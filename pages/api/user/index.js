const User = require('../../../models/user');

export default async function userHandler(req, res) {
  
  const method = req.method;
  const {username, first_name, last_name, password, id} = req.body;
  
  switch (method) {
    case 'GET':
      /* Gets all users from database */
      const users = await User.getAllUsers();
      res.status(200).json({ users: users });
      break
    case 'POST':
      /* Todo: create a new user */
      const user = await User.createNewUser(username, first_name, last_name, password, id);
      res.status(200).json({ user: user});
      break;
    default:
      res.setHeader('Allow', [ 'GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
