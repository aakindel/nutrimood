const User = require('../../../models/user');

export default async function userHandler(req, res) {
    const id = req.query.id;
    const method = req.method;

    switch (method) {
        case 'GET':
            /* Get specific user from the database using id*/
            const user = await User.getUser(id);
            res.status(200).json({ user: user})
            break
        default:
            res.setHeader('Allow', [ 'GET' ]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
  }