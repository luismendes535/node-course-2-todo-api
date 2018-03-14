// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }else{
        var db = client.db('TodoApp'); 
        console.log('Connected to MongoDB server');
        db.collection('User').findOneAndUpdate({ _id: new ObjectID("5aa86b101938b2375cc253b7")},{ $inc: { age: 1}}, {returnOriginal: true
        }).then((result)=>{
            console.log(result);
        });


    }
     client.close();
});