const express  = require("express")
const app = express();
const bodyParser = require("body-parser")
const send = require("./routes/sendtext")
const Images = require("./routes/media")

app.use(bodyParser.urlencoded({extended : true}))


app.use(express.json());
app.use("/sendtext",send);
app.use("/sendimages",Images)


app.listen(3000,()=>{
    console.log("hi")
})


const { body, validationResult } = require('express-validator');
// app.post("/", (req, res) => {
//     const msg = req.body.msg;
//     client.messages.create({
//         from: 'whatsapp:+14155238886',
//         to: 'whatsapp:+918963089123',
//         body: msg
//       })
//       .then(message => res.send(message))
//       .catch(err => {
//         console.log(err);
//         res.send(err)
//       })
//   });]