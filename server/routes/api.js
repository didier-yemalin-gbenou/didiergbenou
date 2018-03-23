const express = require('express');
const email = require('emailjs');
const request = require('request');
const router = express.Router();

router.post('/captcha', (req, res) =>{
    
    const secretKey = '6LfWBkwUAAAAAIIraJv7tp2foeBBfymRc98NWBAY';
    
    verificationUrl = 'https://www.google.com/recaptcha/api/siteverify?secret='
                      + secretKey + '&response=' + req.body.response;
    
    request(verificationUrl, function(error, response, body){
        
        body = JSON.parse(body);

        if(!body.success){
         console.log(body);
        }
        
        res.send(body.success);
    })
})

/* GET api listing. */
router.post('/contact', (req, res) => {

    var server 	= email.server.connect({
        user:    "emailsender86@gmail.com", 
        password:"florany0582", 
        host:    "smtp.gmail.com", 
        ssl:     true
     });
    
    server.send({
        text:    req.body.message, 
        from:    req.body.email, 
        to:      "dgbenou@yahoo.fr",
        subject: req.body.subject
     }, function(err, message) { 
         
        res.setHeader('Content-Type', 'application/json');

         if (err === null){   
                resp = JSON.stringify({ value:'Email sent successfully' })
                res.send(resp) 
            }
         else{ 
             console.log(err.previous.smtp)
             resp = JSON.stringify({ value:'Oups! An error occurred while sending the email' })
             res.send(resp);  
            }
        });
});

module.exports = router;