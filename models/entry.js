const {setup} = require('../database');
const {uuid} = require('uuidv4');

class Entry {
    static async createEntry({date, food, mood, user_id}) {
        const db = await setup();

        // generate uuid for new entry
        const id = uuid(); 
        
        // insert new data into entry table
        const addEntry = await db.run(`INSERT INTO entries (id, date, food, mood, user_id)
            VALUES (?, ?, ?, ?, ?)`, id, date, food, mood, user_id
            );
        
        const viewDb = await db.all(`SELECT * FROM entries`);
        console.log(viewDb);

        db.close();

        return JSON.stringify(addEntry);
    }

    static async getEntriesbyUsername(username) {
        const db = await setup();
        const userEntries = await db.all(`SELECT * FROM entries WHERE user = ?`, username);

        db.close();
        return JSON.stringify(userEntries);
    }
}