const max = Math.max(6,32,45,23,89,23);
const numbers = [2,3,4,5,6,7,8,68,90,103];
const arrayMax  = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax);

//use spread operator to copy
const friends = [4,5,87,9];
const bonduhu = friends;
const dosto = [...friends] //copy
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);

//advanced
const sonkha = [...friends ,9999] //add extra elements while copy
console.log(sonkha);
