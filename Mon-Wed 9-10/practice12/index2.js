let a = 10;
let b = 10;

// console.log(a != b); 
// console.log(!(a != b));
if (!(a != b)) {
  // console.log('true');
}

let obj = { name: 'Chantha', age: 25 };
let newObj = { ...obj };
// console.log(newObj);



// if (a_if > 3) {
//   console.log('a_if is greater than 3');
// } else if(a_if === 2){
//   console.log('a_if is equal to 2');
// }
// else {
//   console.log('a_if is not greater than 3');
// }

let a_if = 2;

switch (a_if) {
  case 3:
    console.log('a_if is greater than 3');
    break;
  case 2:
    console.log('a_if is equal to 2');
    break;
  default:
    console.log('a_if is not greater than 3');
    break;
}
