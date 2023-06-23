const User = require("../models/userModel");
const bcrypt = require("bcrypt");


function getPostData(req) {
    return new Promise((resolve, reject) => {
       try {
           let body = ''
           req.on('data', (chunk) => {
               body += chunk.toString()
           })

           req.on('end', () => {
                resolve(body)
           })
       } catch(err) {
           reject(err)
       }
    })
}

async function registerUserController(req, res) {
    console.log("[saveUser]");
    try {
      const body = await getPostData(req);
  
      const { username, password1, email, password2 } = JSON.parse(body);
      console.log("[user-controller]", username, password1, email, password2);
  
      if (User.validateUsernameFormat(username) === null || username === undefined || username === '') {
        console.log(
          "[user-controller] Username format is invalid. Don't use special characters such as $, <>, ! or {}!"
        );
        res.writeHead(200, { "Content-Type": "application/json" });
  
        res.end(
          JSON.stringify({
            route: "/Register.html",
            message:
              "Username format is invalid. Don't use special characters such as $, ! or {}!",
          })
        );
      } else {
        const findUser = await User.findByUsername(username);
  
        if (!findUser.length) {
          if (User.validateEmailFormat(email) === null || email === undefined || email === '') {
            console.log(
              "[user-controller] Email must not contain special characters such as $, ! or {}!"
            );
            res.writeHead(200, { "Content-Type": "application/json" });
  
            res.end(
              JSON.stringify({
                route: "/Register.html",
                message:
                  "Email must not contain special characters such as $, ! or { }",
              })
            );
          } else if (User.validatePasswordFormat(password1) === null || password1 === undefined || password1 === '') {
            console.log(
              "[user-controller] Password: 1 number, 1 uppercase, 1 lowercase and at least 8!"
            );
            res.writeHead(200, { "Content-Type": "application/json" });
  
            res.end(
              JSON.stringify({
                route: "/Register.html",
                message:
                  "Password: 1 number, 1 uppercase, 1 lowercase and at least 8!",
              })
            );
          } else if (password1 !== password2) {
            console.log(
              "[user-controller] Please make sure your passwords match!"
            );
            res.writeHead(200, { "Content-Type": "application/json" });
  
            res.end(
              JSON.stringify({
                route: "/Register.html",
                message: "Please make sure your passwords match!",
              })
            );
          } else {
            let hashPassword = bcrypt.hashSync(
              password1,
              parseInt(process.env.BCRYPT_SALT)
            );
  
            const user = new User(username, hashPassword, email);
            user.save();
  
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(
              JSON.stringify({
                route: "/home.html",
                message: "Your account has been created successfully!",
              })
            );
          }
        } else {
          console.log(
            "[user-controller] Username (%s) already exists!",
            username
          );
          res.writeHead(409, { "Content-Type": "application/json" });
  
          res.end(
            JSON.stringify({
              route: "/login",
              message: "Username already exists!",
            })
          );
        }
      }
    } catch (err) {
      console.log(err);
  
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify(err));
    }
  }


  module.exports = {
    registerUserController
  }