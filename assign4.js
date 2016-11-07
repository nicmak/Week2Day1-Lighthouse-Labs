var https = require('https');
var emptyString = " "

function getHTML (options, callback) {

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

function printHTML (html) {
  console.log(html);
}


var requestOptions = { ///THIS IS OUTSIDE OF THE FUNCTION
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML);