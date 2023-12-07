// console.log('Before')
// setTimeout(() => {
//     console.log('fetching user');
// }, 2000)
// console.log('After');
// console.log('After');
// console.log('After');
// console.log('After');
// console.log('After');
// console.log('After');
// console.log('After');
// console.log('After');
// console.log('After');
// console.log('After');
// console.log('After');
// console.log('After');



function myDisplayer(something) {
    console.log(something)
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
  
myCalculator(5, 5, myDisplayer)
  