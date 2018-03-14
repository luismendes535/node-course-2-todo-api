// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }else{
        console.log('Connected to MongoDB server');
        var db = client.db('TodoApp');
    //     db.collection('Todos').insertOne({
    //         text: 'Something to do',
    //         completed: false
    //     },(err, result)=>{
    //         if(err){
    //         return console.log('Unable to insert todo', err);   
    //         }
    //         console.log(JSON.stringify(result.ops, undefined,2));
    //     })
    // }

        var db = client.db('TodoApp');
        db.collection('User').insertOne({
            name: 'Luis',
            age: 25,
            location: 'Guimarães, Portugal'
        },(err, result)=>{
            if(err){
                return console.log('Unable to insert user', err);
            }else{
                console.log(JSON.stringify(result.ops, undefined, 2));
                console.log(result.ops[0]._id.getTimestamp());
            }
        });

     }
    client.close();
});