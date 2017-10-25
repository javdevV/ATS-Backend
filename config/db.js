var mongoose =require('mongoose');
mongoose.Promise = global.Promise;
console.log('connected to database .. ');
module.exports = mongoose.connect('mongodb://localhost:27017/ats');
