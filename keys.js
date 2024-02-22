const glass = {
    name:'glass',
    color:'golden',
    price:12,
    isCleaned:true
};

console.log(glass);
const keys =Object.keys(glass);
//All Property Name
//[ 'name', 'color', 'price', 'isCleaned' ]
// console.log(keys);

const values = Object.values(glass);
//All property Values
//[ 'glass', 'golden', 12, true ]
// console.log(values);

const entries = Object.entries(glass);
// console.log(entries);
// array of array ,two dimesntinal array
/*[
    [ 'name', 'glass' ],
    [ 'color', 'golden' ],
    [ 'price', 12 ],
    [ 'isCleaned', true ]
  ]
*/

// delete glass.isCleaned;

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

//freeze
// Object.freeze(glass);
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);
