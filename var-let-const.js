// var : no reason to use var
// let : allow it to reaasign
//const:do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [23,4, 23 ,12, 56];
// numbers = [4,5,7,7];
numbers[1] = 5;
numbers.push(8,9,56);
console.log(numbers);


//objects
const student = {
    name:'moyna Pakhi',
    class:12
}

// student = {name:'kokil konti'}
student.name= 'moyur konti';
console.log(student);


//loop
let sum = 0;
for(let i = 0 ; i <10;i++){
    const num = i;
    sum = sum + num;
}
console.log(sum);