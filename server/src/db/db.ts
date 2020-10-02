import { 
  Db,
  Collection,
  MongoClient,
} from 'mongodb'; 

const dbURL = process.env.DB_URL || "mongodb://localhost:27017"
const dbName = process.env.DB_NAME || "todos"
const collectionName = process.env.COLLECTION_NAME || "todos"


export const client: MongoClient = new MongoClient(dbURL);
export let db: Db;
export let todos: Collection;

;(async () => {
  await client.connect();
  db = client.db(dbName)
  todos = db.collection(collectionName)
})();
