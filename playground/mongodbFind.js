// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }else{
        var db = client.db('TodoApp');
    //     console.log('Connected to MongoDB server');
    
    //     db.collection('Todos').find({_id: new ObjectID('5aa8492d3e47f51e6acd8c98')}).toArray().then((docs)=>{
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err)=>{
    //         console.log('Unable to fetch todos', err);
    //     });
    //  }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });
    
    db.collection('User').find({name:'Luis'}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });
    }
     client.close();
});