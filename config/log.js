const log = require('noogger');

module.exports=()=>{
    
 
const logParams = {
    consoleOutput : true,
    consoleOutputLevel:'DEBUG',
    
    dateTimeFormat: "DD-MM-YYYY HH:mm:ss",
    fileNameDateFormat: "YYYY-MM-DD",
    fileNamePrefix:"myApp-",
    outputPath: "myLogs/"
};
 
 
log.init(logParams);
};