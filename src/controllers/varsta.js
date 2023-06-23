const dataRepository = require("../models/countyModel");


async function varstaController(req, res){
    try {
        const products = await dataRepository.getCollection("varsta");
        
        res.writeHead(200, { "Content-Type": "application/json" });
        
        res.end(JSON.stringify(products));
        console.log(products)

      } catch (err) {
        console.log(err);
    
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify(err));
      }
}


module.exports = {
    varstaController
}