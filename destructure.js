const actor = {
    name : 'Ananta',
    age :30,
    phone:'01780566585',
    money:1235458
}
//if right side is an objects left side of destructureing will be objects as ,well

//use property name as a variable that contains the property value 
const {phone ,age:boyos} = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

// console.log(phone);
// // console.log(name);
// // console.log(age);
// console.log(boyos);

const numbers = [45,99]
const [first ,second] = numbers;
const [x,y] = [12,66];

// advanced
function doubleThem (a,b){
    return [a*2,b*2]
}

const [prothom ,ditiyo] = doubleThem(6,9);
console.log(prothom, ditiyo);