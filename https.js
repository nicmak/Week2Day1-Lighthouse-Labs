var https = require('https');


var requestOptions = {
	host: 'sytantris.github.io', //This is the domain name you want to read from
  path: '/http-examples/step2.html'            //This is path to resource, / is root path 
};
//using .get method... first parameter is inserting the host/path info
https.get(requestOptions, function(response) { // response is the stream that represents http reponse

	response.setEncoding('utf8'); //set encoding of received data to UTF-8, 
	//we are converting response stream with utf8 code
  
  var array = [];
  response.on('data', function (data) { //Callback invoked when data chunk is receieved
    array.push(data);
    return array;
    
  });

  response.on('end', function() {
    console.log('Response stream complete');
  });
});