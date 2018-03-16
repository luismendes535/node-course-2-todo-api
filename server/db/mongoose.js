var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Luismendes535:root@ds115579.mlab.com:15579/todoapp'||'mongodb://localhost:27018/TodoApp');

module.exports ={mongoose};