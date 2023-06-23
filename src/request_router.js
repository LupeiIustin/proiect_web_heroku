const control1 = require("./controllers");
const fs = require('fs');
const mongodbConnect = require('./models/database').mongodbConnect
const path = require("path");



const PORT = process.env.PORT || 5500;


mongodbConnect(async () => {
  server.listen(PORT, () => console.log(`[server] Server running on port ${PORT}`))
})


const server = require("http")
  .createServer((request, response) => {
    if (request.url === "/") {

      control1.homeController(request, response);
    }
    else if (request.url.match(".css$")) {
      const cssPath = path.join(__dirname, request.url);
      const fileStream = fs.createReadStream(cssPath, "UTF-8");
      response.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(response);
      
    }
     else if (request.url.match(".js$")) {
      const cssPath = path.join(__dirname, request.url);
      const fileStream = fs.createReadStream(cssPath, "UTF-8");
      response.writeHead(200, { "Content-Type": "text/javascript" });
      fileStream.pipe(response);
      
    }
    else if (request.url === "/home.html") {

      control1.homeController(request, response);
    }
    else if (request.url === "/cartografic.html") {

      control1.cartograficController(request, response);
    }

    else if (request.url === "/grafic.html") {

      control1.graficController(request,response);
    }
    else if (request.url === "/contact.html") {

      control1.contactController(request,response);
    }
    else if (request.url === "/liniar.html") {

      control1.liniarController(request,response);
    }
    else if (request.url === "/tabelar.html") {
 
      control1.tabelarController(request,response);
    }
    else if (request.url === "/varsta") {
 
      control1.varstaController(request,response);
    }
    else if (request.url === "/educatie") {
 
      control1.educatieController(request,response);
    }
    else if (request.url === "/mediu") {
 
      control1.mediuController(request,response);
    }
    else if (request.url === "/tip") {
 
      control1.tipController(request,response);
    }
    else if (request.url === "/login") {
 
      control1.loginRegisterController(request,response);
    }
    else if (request.url === "/login-user") {
 
      control1.loginUserController(request,response);
    }
    else if (request.url === "/register-user") {
 
      control1.registerUserController(request,response);
    }
  })








