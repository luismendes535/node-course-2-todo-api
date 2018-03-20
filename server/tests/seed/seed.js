const {ObjectID} = require('mongodb');

const {Todo} = require('./../../models/Todo');
const {User} = require('./../../models/User');
const jwt = require('jsonwebtoken');

const UserOneId = new ObjectID();
const UserTwoId = new ObjectID();

const users =[{
    _id: UserOneId,
    email: 'luismendes535@gmail.com',
    password: '123456',
    tokens:[
        {
            access: 'auth',
            token: jwt.sign({_id:UserOneId.toHexString(),access: 'auth'},'abc123').toString()
        }    ]
},{
    _id: UserTwoId,
    email: 'miguel_vsc@hotmail.com',
    password:'654321'
}];

const todos= [{
    _id: new ObjectID(),
    text:'First test todo'
},
{   
    _id: new ObjectID(),
    text:'Second test todo',
    completed: true,
    completedAt: 333
}];



const populateTodos = (done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos, (error, docs) => {
            if(error){
                return done(error);
            }
        });
    }).then(() => done());
}

const populateUsers = (done)=>{
    User.remove({}).then(()=>{
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne,userTwo]);
    }).then(()=> done());
}; 

module.exports = {
    todos, populateTodos, users, populateUsers
}