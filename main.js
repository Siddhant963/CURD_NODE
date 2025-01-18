const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());

app.get('/', (req ,res)=>{ 
    let token  = jwt.sign({email : "siddhant@gmail.com"} , 'secret');
    res.cookie('token' , token);
    console.log(token);
    
    res.send('Hello World!');


})

app.get('/read' , (req ,res)=>{ 
   
jwt.verify( req.cookies.token , 'secret' , (err, decoded)=>{
     console.log(decoded);
     

})

})




app.get('/', (req, res) => {
     res.cookie("name" , "siddhant");
    res.send('Hello World!');
});

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send('Cookie value: '+ req.cookies.name);
});


app.get('/read', (req, res) => {
     bcrypt.compare('annu', '$2b$10$g13xJcb0MJZAD5IdhsUJAus94S99OK/5o7x.EV3ChOUcMAK9zCUWm', function(err, result) {
         console.log(result);
         
      });
});
app.get('/', (req, res) => {
     bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash("annu", salt, function(err, hash) {
           console.log(hash);
           
               
          });
      });
     });
app.listen(3300);