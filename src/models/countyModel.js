const getDb = require('./database').getDb


function getCollection(collection) {
  try {
  const db = getDb()
   return  db.collection("alldata").find().toArray();
  }catch(err){
    console.log(err);
  }
}

module.exports = {
  getCollection
}