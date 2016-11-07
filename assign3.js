var https = require('https');
var emptyString = " "

function getAndPrintHTML (options) {

https.get(options, function(response){
  
  response.setEncoding('utf8');
  
  response.on('data',function (data) {
    emptyString += data
    return emptyString
  });

  response.on('end', function() {
    console.log(emptyString);
    console.log("Data done Receiving");
  });

});
  

}

var requestOptions = { ///THIS IS OUTSIDE OF THE FUNCTION
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);