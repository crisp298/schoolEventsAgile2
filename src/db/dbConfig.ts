import { Database, sqlite3 } from "sqlite3";

const sqlite3 = require("sqlite3").verbose();
const filePath: string = "./db/Participants.db";

const createDbConnection = () => {
    let db: Database = new sqlite3.Database(filePath, (error: Error) => {
        if (error) {
            return console.error(error.message);
        }
    });
    console.log("Connection with SQLite has been estabilished");
    db.exec(`CREATE TABLE IF NOT EXISTS Participants (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        type VARCHAR(50),
        );
        `);
    return db;
}


export { createDbConnection }