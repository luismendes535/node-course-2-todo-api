const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');
var id = "5aa9b274e9d0793100a9cda9";
var userId= '5aa88a90ab715c1884bd6e21';

if(!ObjectID.isValid(userId)){
    console.log('ID not valid');
}



// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });


// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('ID not found!');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e)=>{
//     console.log(e);
// });

User.findById(userId).then((user)=>{
    if(!user){
        return console.log('User not found!');
    }
    console.log(JSON.stringify(user, undefined,2));
}).catch((e)=>{
    console.log(e);
})