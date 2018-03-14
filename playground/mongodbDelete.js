// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }else{
        var db = client.db('TodoApp'); 
        console.log('Connected to MongoDB server');
        db.collection('User').findOneAndDelete({_id: new ObjectID("5aa807d636a62b10f0fbfbf5")}).then((result)=>{
            console.log(JSON.stringify(result,undefined,2));
        });
        //deleteMany/ deleteOne / findOneAndDelete
        db.collection('User').deleteOne({name: 'Miguel'}).then((result)=>{
            console.log(result);
        });
        db.collection('User').deleteMany({name: 'Luis'}).then((result)=>{
            console.log(result);
        });


    }
     client.close();
});