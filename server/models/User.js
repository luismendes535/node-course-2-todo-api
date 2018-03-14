var mongoose = require('mongoose');

var User = mongoose.model('User',{
    name:{},
    age:{},
    email:{
        required: true,
        trim: true,
        type: String,
        minlength: 1
    }

});

module.exports={User}