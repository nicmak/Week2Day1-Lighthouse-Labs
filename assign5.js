module.exports = function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function(response){
  
  response.setEncoding('utf8');
  
  response.on('data',function (data) {
    emptyString += data
    callback(emptyString);
  });

  response.on('end', function() {
    console.log(emptyString);
    console.log("Data done Receiving");
  });

  });
  
}















