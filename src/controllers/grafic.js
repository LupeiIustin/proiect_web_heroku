const { viewGrafic } = require('../views/templates');
const { viewLoginRegister } = require('../views/templates');

function graficController(req, res) {
 
    switch(req.method) {
        case "GET" : 
        let value = ""
        let token = ""
        const cookieHeader = req.headers?.cookie
        // console.log(cookieHeader)
        
        if(cookieHeader) {
        cookieHeader.split(`;`).forEach(cookie => {
            let [name, ...rest] = cookie.split(`=`)
            console.log([name, ...rest])
            if(name.trim() == "jwt") {
            value = rest.join(`=`).trim()
            console.log(value)
            if(value) {
                token =  decodeURIComponent(value)
            }
            }
        });
        }
        
        if(value === "" || value === "undefined") {
            res.writeHead(401, { "Content-Type": "text/html"});
            res.end(viewLoginRegister, 'utf8');
            break;
        }else{

            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(viewGrafic, 'utf8');
            break;
        }
        default :
            res.writeHead(405);
            res.end();
    }
}

module.exports = {
    graficController
}