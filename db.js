const sqlite = requrire('sqlite');

const db = sqlite.open('./db.sqlite');

module.exports = db;