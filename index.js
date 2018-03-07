
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

const token = '6948be3ff488f402f37bae2eac8dcc6694d4de6d'
// fetch produces the same output as the above XHR code
fetch('https://api.github.com/user/repos')
  .then(res => res.json()) // give me the body of the response parsed as JSON
  .then(json => console.log(json))
  