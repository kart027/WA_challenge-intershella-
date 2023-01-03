const express = require("express");
const routes = express.Router();

const { body, validationResult } = require('express-validator');


routes.post("/images",(req,res)=>{
   
       
const{SID,AUTHTOKEN,FROM,TO,BODY,MEDIAURL} = req.body;

var twilio = require("twilio")(SID, AUTHTOKEN);

twilio.messages
.create({
    from: `${FROM}`,
    to: `${TO}`,
    body: BODY,
    mediaUrl:MEDIAURL

})
.then(function(res) {console.log("succesfull")})
.catch(function(err)  {
    console.log(err);
    res.send(err)
});
})




module.exports  = routes