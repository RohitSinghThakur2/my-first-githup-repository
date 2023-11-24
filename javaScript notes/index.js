// Q.1 Difference between var , let , & const variables in js.

// var is a Globle Scoped and Function Scoped variable &
// let and const is a Braces Scoped variable not a Globle scoped .
// const is also Braces Scoped variable keyword but this const variable value is only one time set not change this  value and nighter change this value.

//Function Scoped or Globle Scoped Variables :->
function fncScoped() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}
fncScoped();

//Braces Scoped or Globle Scoped Variables :->
// function notfncScoped() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   // console.log(i)   //

//   for (const j = 0; j<10; j++ ) {
//     console.log(j);
//   }
//   // console.log(j)   //
// }
// notfncScoped();


// var adds itself to the Window Object but - (var khud ko window pr add krta hai)
// Let & Const doesn't adds itself to the Window Object -(let & Const khkud ko window pr add nhi karte hai).

var a = 10; //going to the console and type here Window and click then Show you var(a) variable in window Object  
let b = 10; //but let(b) and const(c) doesn't show in Window Object.
const c = 10;


function hello(){
    var x=5;
    console.log(x)
    // var y= 3;
    console.log(y)
    function hii(){
        var y= 15;
        console.log(y)
    }
    // hii();
};
hello();
