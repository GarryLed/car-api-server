import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
let db;

try {
  conn = await client.connect();
  db = conn.db("wp1");
} catch (e) {
  console.error("Failed to connect to the database", e);
}

export default db;
