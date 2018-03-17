const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = mongoose.Schema({
    name:{},
    age:{},
    email:{
        required: true,
        trim: true,
        type: String,
        minlength: 1,
        unique: true,
        validate:{
            validator: (value)=>{
                validator.isEmail(value);
            },
            message:'{value} is a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength:6
    },
    tokens: [{
        access:{
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function(){
    var user = this;
    var userObject = user.toObject();
    
    return _.pick(userObject,['_id','email']);
}

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens = user.tokens.concat([{access,token}]);

    return user.save().then(()=>{
        return token; 
    });
};

var User = mongoose.model('User', UserSchema);

module.exports={User}