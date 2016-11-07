var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

   var newHtml = html.toLowerCase();
   console.log(newHtml);

}

getHTML(requestOptions, printLowerCase);