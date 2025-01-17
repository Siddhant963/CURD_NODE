const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/users' )
.then(console.log('conected')
);

const userSchema = new mongoose.Schema({ 
     name : 'string',
     age : 'string',
     email :'string',
     
});

module.exports = mongoose.model('User', userSchema);

