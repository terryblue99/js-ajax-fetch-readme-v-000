
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

const token = 'd581b5779ab48ea052db0da327e349d91d8c71b4'
// fetch produces the same output as the above XHR code
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
  // the line then(res => res.json()) is getting the response res from fetch and
  // using the json method to turn it into JSON. Then it's passing the JSON to
  // the next line, then(json => console.log(json)) to be handled by that function
}).then(res => res.json())
  .then(json => console.log(json));
