
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';
//
// xhr.onload = function() {
//   console.log(xhr.response);
// };
//
// xhr.onerror = function() {
//   console.log('Booo');
// };
//
// xhr.send();

const token = '3c22ddb84606fadf0e6da86add01981582dcd559'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

//the line then(res => res.json()) is getting the response res from fetch and
//using the json method to turn it into JSON. Then it's passing the JSON to the
//next line, then(json => console.log(json)), to be handled by that function
