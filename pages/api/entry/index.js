const {Entry} = require('../../../models/entry');

export default async function entryHandler(req, res) {
  const method = req.method;

  const entry_date = req.body.entry_date
  const mood= req.body.mood
  const food= req.body.food
  const user_id = req.body.user_id;

  switch (method) {
    case 'GET':
      /* Gets all entries from database */
      const entries = await Entry.getAllEntries();
      res.status(200).json({ entries: entries });
      break
    case 'POST':
      /* Todo: create a new entry */
      const entry = await Entry.createEntry(entry_date, food, mood, user_id);
      res.status(200).json({ entry: entry});
      break;
    default:
      res.setHeader('Allow', [ 'GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
