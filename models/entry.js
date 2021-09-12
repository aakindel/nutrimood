const { connect, setup} = require('../database');
const {uuid} = require('uuidv4');

class Entry {
    static async createEntry(entry_date, food, mood, user) {
        const db = await connect();

        // generate uuid for new entry
        const id = uuid(); 
        
        // insert new data into entry table
        const addEntry = await db.run(`INSERT INTO entries (id, entry_date, food, mood, user)
            VALUES (?, ?, ?, ?, ?)`, id, entry_date, food, mood, user
            );
        
        const viewDb = await db.all(`SELECT * FROM entries`);
        console.log(viewDb);

        db.close();

        return JSON.stringify(addEntry);
    }

    static async getEntriesByUsername(username) {
        const db = await connect();
        const userEntries = await db.all(`SELECT * FROM entries WHERE user = ?`, username);

        db.close();
        return JSON.stringify(userEntries);
    }

    static async getAllEntries() {
        const db = await connect();
        const allEntries = await db.all(`SELECT * FROM entries`);
        console.log(`entries ${allEgitntries}`)

        db.close();
        return JSON.stringify(allEntries);
    }
}

module.exports = { Entry }