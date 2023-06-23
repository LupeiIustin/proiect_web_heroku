const path = require('path');
const fs = require('fs');

function getView(url) {
    return fs.readFileSync(path.join(__dirname, url))
}

 
let viewHome = getView('./home.html');
let viewCartografic = getView('./cartografic.html');
let viewGrafic = getView('./grafic.html');
let viewTabelar = getView('./tabelar.html');
let viewLiniar = getView('./liniar.html');
let viewContact = getView('./contact.html');
let viewLoginRegister = getView('./login_register.html');




module.exports = {
   viewHome, viewCartografic, viewGrafic, viewTabelar, viewLiniar, viewContact, viewLoginRegister
}