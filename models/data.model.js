const mongoose = require('mongoose')
 
const temeratureData = new mongoose.Schema({
    timestamp:{
        type:String,
        default:null
    },
    temperature:{
        type:Number,
        default:0
    }
});
module.exports = mongoose.model('temparature', temeratureData);