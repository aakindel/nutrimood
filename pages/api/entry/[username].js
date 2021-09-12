const {Entry} = require('../../../models/entry');

export default async function entryHandler(req, res) {
    const username = req.query.username;
    const method = req.method;
  
    switch (method) {
    case 'GET':
        /* Get a specific entry using th */
        console.log("username",username)
        const entries = await Entry.getEntriesByUsername(username);
        res.status(200).json({ entries: entries });
        break
    default:
        res.setHeader('Allow', [ 'GET' ]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
