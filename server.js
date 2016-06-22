var express = require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var reCAPTCHA=require('recaptcha2')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('node_modules'));

var transporter = nodemailer.createTransport(
    {
    service: 'gmail',
    auth: {
        user: 'sach1810@gmail.com',
        pass: 'London89'
    }
}
);

app.post('/contact-form',function(req,res){
    console.log(req.body);
    var message = req.body;

    transporter.sendMail({
      from: 'message.email',
      to: 'sach1810@gmail.com',
      subject: message.subject,
      text: message.name +": " +message.email +": "+ message.message
    }, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
});

app.listen(8000);
console.log("server running on Port 3000");
