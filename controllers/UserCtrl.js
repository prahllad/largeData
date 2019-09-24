'use strict';
const multer = require('multer');
const DIR = './uploads/';
const upload = multer({ dest: DIR }).single('data');
const fs = require('fs');
const dbHelper = require('./../helper/dataHelper');
module.exports = {

  fileUpload: async (req, res) => {
    var path = '';
    upload(req, res, function (err) {
      if (err) {
        // An error occurred when uploading
        console.log(err);
        return res.status(422).send("an Error occured")
      }
      // No error occured.
      path = req.file.path;
      let rawdata = fs.readFileSync(path);
      let data = JSON.parse(rawdata);
      let yearlyData = [];
      yearlyData.push({ ts: new Date(data[0].ts), temparature: data[0].val });
      let year = new Date(data[0].ts).getUTCFullYear();
      for (let i = 1; i < data.length; i++) {
        if (year === new Date(data[i].ts).getUTCFullYear()) {
          let obj = { ts: new Date(data[i].ts), temparature: data[i].val };
          yearlyData.push(obj);
        }
        else{
          break;
        }
      }
      let x = 0;
      let minimizedData = [];
      let sum = 0;
      let day = yearlyData[0].ts.getDate();
      let month = yearlyData[0].ts.getMonth();
      year = yearlyData[0].ts.getUTCFullYear();
      while (yearlyData.length != 0 && x != yearlyData.length) {
        if (yearlyData[x].ts.getDate() === day && yearlyData[x].ts.getMonth() === month) {
          sum = sum + yearlyData[x].temparature;
          x++;
        }
        else {
          yearlyData.splice(0, x);
          minimizedData.push({ 'date': day + '-' + month + '-' + year, temp: sum / x });
          sum = 0;
          day = yearlyData[0].ts.getDate();
          month = yearlyData[0].ts.getMonth();
          year = yearlyData[0].ts.getUTCFullYear();
          x = 0;



        }
      }
      setTimeout(()=>{
          dbHelper.syncData(data);
      },1000);
      return res.send({ data: minimizedData, processed: true });
    });
  },
  test: async (req, res) => {
    return res.send('completed');
  }


}