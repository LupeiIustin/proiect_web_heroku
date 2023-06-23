const { viewLoginRegister } = require('../views/templates');

function loginRegisterController(req, res) {
 
    switch(req.method) {
        case "GET" : 
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(viewLoginRegister, 'utf8');
            break;
        default :
            res.writeHead(405);
            res.end();
    }
}

module.exports = {
    loginRegisterController
}