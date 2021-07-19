// const button: HTMLElement = document.getElementById('custom-btn');
// const output: HTMLElement =  document.getElementById('output')
// button.addEventListener('click', fizzbuzz);

// const fbinput: HTMLElement = document.getElementById('fbinput');
// const fboutput: HTMLElement = document.getElementById('fboutput');
// function fizzbuzz () {
//   const startNumInput: HTMLInputElement = <HTMLInputElement>(document.getElementById('start-num')
//   );
//   const startNumVal: number = Number(startNumInput.value);

//   for (let i = startNumVal; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0) {
//       output.innerHTML += '<div>fizzbuzz ' + '</div>';
//       // console.log('fizzbuzz', i);
//     }
//     if(i % 3 == 0) {
//       output.innerHTML += '<div>fizz ' + '</div>';
//       // console.log('fizz', i);
//     } else if (i % 5 == 0) {
//       output.innerHTML += '<div>buzz ' + '</div>';
//       // console.log('buzz', i);
//     }
//   }
// }
// class Student 
// {
//   firstname: string;
//   lastname: string;
//   id: number;
//   age: number;

//   constructor(_firstname: string, _lastname: string, _id:number, _age: number){
//     this.firstname = _firstname;
//     this.lastname = _lastname;
//     this.id = _id;
//     this.age = _age;
//   }
//   getFullName() {
//     return '${this.firstname} ${this,lastname}';
  
//     //return this.firstname + " " + this.lastname;
//   }
// }
// const student1: Student = new Student("Rishabh","Nigam",103607336,19);
class car {
  rego: string;
  speed: number;
  maxSpeed: number = 120;

  constructor(_speed: number, _rego: string){
    this.rego = _rego;
    this.speed = _speed;
  }
  increaseSpeed(spd: number) :void{
    this.speed += spd;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }
}
let innerHtml: string = '';

const selectDropdown: HTMLElement = document.getElementById('cars');
const cars: string[] = ['car1', 'car2','car3'];
// const sports: string[] = ['soccer', 'basketball','baseball'];
// console.log(sports);

// for(let i = 0; i < sports.length; i++){
//   innerHtml += `<option value=${sports[i]}>sport: ${sports[i]}  </option>`;
// }
selectDropdown.innerHTML = innerHtml;

  const car2: car = new car(10,"321abc");
  const car1: car = new car(0,"123bbc");
  const car3: car = new car(20,"EDP445");

  for(let i = 0; i < cars.length; i++){
  innerHtml += `<option value=${cars[i]}>cars: ${cars[i]}  </option>`;
}
console.log(car1);
car1.increaseSpeed(140);
console.log(car1);


