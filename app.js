const express  = require('express');
const users = require('./usermodel');
const app = express();

app.get('/' , (req , res)=>{ 
     res.send('Hello World!');
})

app.post('/create' , async (req,res)=>{ 
    let {name , age , email} =   req.query;
     const newUser = await users.create({ 
          name : name,
          age : age,
          email : email,
     });
    
     res.send(newUser);
})

app.get('/update', async (req,res)=>{ 
   const updateuser =  await users.findOneAndUpdate({name: 'siddhant dubey'} , {age : '22'} , {new: true}) ;
  res.send(updateuser);
});

app.get('/view' , async(req, res)=>{ 
     const user  = await users.find();
     res.send(user);
})

app.get('/delete' , async (req , res)=>{ 
     const deleteUser = await users.findOneAndDelete({age: '22'});
     res.send(deleteUser);
})



app.listen(3300 , ()=>{
      console.log('Server is running on port 3300');
});
