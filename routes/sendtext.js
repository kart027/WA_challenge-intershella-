const express = require("express");
const routes = express.Router();

const { body, validationResult } = require('express-validator');


routes.post("/send",(req,res)=>{
   
       
const{SID,AUTHTOKEN,FROM,TO,BODY} = req.body;

var twilio = require("twilio")(SID, AUTHTOKEN);

twilio.messages
.create({
    from: `${FROM}`,
    to: `${TO}`,
    body: BODY,
})
.then(function(resposnse) {res.send("sucessfull")})
.catch(function(err)  {
    console.log(err);
    res.send(err)
});
})


module.exports  = routes