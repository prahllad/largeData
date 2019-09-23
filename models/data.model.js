const mongoose = require('mongoose')
 
const temeratureData = new mongoose.Schema({
    ts:{
        type:String,
        default:null
    },
    val:{
        type:Number,
        default:0
    }
});
module.exports = mongoose.model('temparature', temeratureData);