var express = require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');

var app = express();
// var transporter = nodemailer.createTransport(
//     {
//     service: 'gmail',
//     auth: {
//         user: 'sach1810@gmail.com',
//         pass: 'London89'
//     }
// }
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('node_modules'));

// app.post('/contact-form',function(req,res){
//     console.log(req.body);
//     var test = req.body;
//
//     transporter.sendMail({
//       from: 'sach1810@gmail.com',
//       to: 'sach1810@gmail.com',
//       subject: test.name,
//       text: test.email
//     }, function(error, info){
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Message sent: ' + info.response);
//         }
//     });
// });

app.listen(8000);
console.log("server running on Port 3000");
