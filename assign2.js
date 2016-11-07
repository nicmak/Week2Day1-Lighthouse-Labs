var https = require('https');
var buffChunk = " "

function getAndPrintHTMLChunks () {
  
  var requestOptions = {
  	host: 'sytantris.github.io',
  	path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
  
    response.setEncoding('utf8');

    response.on('data', function (data) {
        buffChunk += data  
      });
      
 
    response.on('end', function () {
      console.log('We are done receiving');
      console.log(buffChunk);
    
    });



  });
  

  
}







getAndPrintHTMLChunks(process.argv);