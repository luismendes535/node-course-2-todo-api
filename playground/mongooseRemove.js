const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove({_id:'5aab224df36d2876ecd47a16'}).then((todo)=>{
//     console.log(todo)
// })


// var id = '5aab224df36d2876ecd47a16';
// Todo.findByIdAndRemove(id).then((result)=>{
//     return console.log(result);
// });
