'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// require('./../models/data.model');

module.exports = () => {
    try{

    mongoose.connect('mongodb+srv://scott:tiger@cluster0-adtmv.mongodb.net/test', {useUnifiedTopology: true},()=>{
          console.log('connected to dattabase');

    },err=>{

    });

    }
    catch(err){
        Console.log(err);
    }
    // var MyModel = mongoose.model('Test', new Schema({ name: String }));
};