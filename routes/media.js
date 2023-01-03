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

routes.get("/get",(req,res)=>{
    const client = require('twilio')("AC412c18c4e6febed43ff704f734f00505", "05836cee4f8e546adb5cb5d8814c8880");

client.messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .media
      .list({limit: 20})
      .then(media => media.forEach(m => console.log(m.sid)));
})


module.exports  = routes