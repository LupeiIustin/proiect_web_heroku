const mongodb = require('mongodb');
const { createPool } = require('generic-pool');
require('dotenv').config();

const mongoClient = mongodb.MongoClient;

let _database;
let pool;

const mongodbConnect = (callback) => {
  const uri = `mongodb+srv://${process.env.db_username}:${process.env.db_password}${process.env.db_host}`;

  // Create the connection pool
  pool = createPool({
    create: async () => {
      const client = await mongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      return client.db('informatii');
    },
    destroy: (db) => {
      return db.close();
    }
  });

  // Acquire a connection from the pool
  pool.acquire().then((db) => {
    _database = db;
    console.log("[database] Connected to MongoDB database!");
    callback();
  }).catch((err) => {
    console.log(err);
    throw err;
  });
};

const getDb = () => {
  if (_database) {
    return _database;
  } else {
    throw 'No database found!';
  }
};

exports.mongodbConnect = mongodbConnect;
exports.getDb = getDb;