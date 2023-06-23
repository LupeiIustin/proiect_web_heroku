const mongodb = require('mongodb')
require("dotenv").config();
const mongoClient = mongodb.MongoClient

let _database

const mongodbConnect = (callback) => {

    mongoClient
        .connect("mongodb+srv://" + process.env.db_username + ":" + process.env.db_password + process.env.db_host)
        .then(client => {
            _database = client.db('informatii')
            console.log("[database] Connected to mongodb database!")
            callback()
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const getDb = () => {
    if(_database) {
        return _database
    }
    else {
        
        throw 'No database found!'
    }
}

exports.mongodbConnect = mongodbConnect
exports.getDb = getDb