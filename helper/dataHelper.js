const mongoose = require('mongoose');
const temeratuer = require('./../models/data.model');
module.exports ={

    syncData:async(data)=>{
        try { 
       let array = [];
    //    let reqArray = [];
       i = 0;
       let length = 100000;
       for(let i = 0; i< data.length;){
           if(i<length){
                array.push({'timestamp':data[i].ts,'temperature':data[i].val});
                i++;

           }
           else{
               await temeratuer.insertMany(array);
               array = [];
               let temp = i;
               i = length;
               length = length + temp;

               
           }
       }
    //    temeratuer.insertMany(array, function(error, docs) {
    //        if(error){
    //            console.log(error);
    //        }
    //        else{
    //            console.log(docs);
    //        }
    //    });

        // Promise.all(reqArray);
            
         } catch (e) {
            console.log(e);
         }
         finally{
             console.log('success');
         }
    }
}