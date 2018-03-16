var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');
var {ObjectID} = require('mongodb')

var app = express();
const port = process.env.PORT || 3000;  

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{ 
        res.send({todos});
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Invalid ID :(')
    }
        Todo.findById(id).then((todo)=>{
            if(!todo){
                res.status(404).send('Unable to find todo');
            }
            res.send({todo});
        }).catch((e)=>{
            res.status(400).send();
        });
    });

app.listen(port,()=>{
    console.log(`Started up at port ${port}.`);
})

module.exports = {app}