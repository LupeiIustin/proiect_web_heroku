const { viewHome } = require('../views/templates');

function homeController(req, res) {
 
    switch(req.method) {
        case "GET" : 
            res.writeHead(200, {'Content-Type' : 'text/html'});
            
            res.end(viewHome, 'utf8');
            break;
        default :
            res.writeHead(405);
            res.end();
    }
    
}

module.exports = {
    homeController
}