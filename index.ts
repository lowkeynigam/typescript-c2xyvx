// // Import stylesheets
// import './style.css';

// // Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');


const button: HTMLElement = document.getElementById('custom-btn');
const output: HTMLElement =  document.getElementById('output')
// button.addEventListener('clicking', event => {
//   console.log ('clicking');
// })
button.addEventListener('click', fizzbuzz);
function fizzbuzz () {
  for (let i = 0; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
      output.innerHTML += '<div>fizzbuzz ' + '</div>';
      // console.log('fizzbuzz', i);
    }
    if(i % 3 == 0) {
      output.innerHTML += '<div>fizz ' + '</div>';
      // console.log('fizz', i);
    } else if (i % 5 == 0) {
      output.innerHTML += '<div>buzz ' + '</div>';
      // console.log('buzz', i);
    }
  }
}
