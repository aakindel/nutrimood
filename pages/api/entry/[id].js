const Entry = require('../../../models/entry');

export default async function entryHandler(req, res) {
    const id = req.query.id;
    const method = req.method;
  
    switch (method) {
    case 'GET':
        /* Get a specific entry using th */
        const entries = await Entry.getAllEntries();
        res.status(200).json({ entries: entries });
        break
    default:
        res.setHeader('Allow', [ 'GET' ]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
