/* "use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Eigenschafft ${i} ist ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Eigenschafft ${key} ist ${options[key]}`);
        counter++;
    }
    
}

console.log(counter);


 */


/* let text = 'what is your name',
    msg = 'im sorry, but you didnt tell your name',
    name = prompt(text);

if (name != '') {
    msg = 
}

document.write(msg);
 */


/* let text = 'what is your name',
    name = prompt(text);

    if (name == '') {
        document.write('im sorry, but you didnt tell your name');
    } else {
        document.write("nice to mee you "+name+" !");
    }

     */


    function copy(mainObj) {
        let objCopy = {};

        let key;
        for (key in mainObj) {
            objCopy[key] = mainObj [key];
        }

        return objCopy;
     }

    const numbers = {
        a: 2,
        b: 5,
        c: {
            x: 7,
            y: 4
        }
    };

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));




const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'fghjk';
console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livej', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb']

console.log(internet);



function log(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

}

const num = [2, 5, 7, 'huy'];

log(...num);


const array = ['a', 'b'];
const newArrray = [...array];
console.log(array);
console.log(newArrray);


const q = {
    one: 1,
    two: 2,
    three: 3
};

const nq = {...q};

nq.one = 5;

console.log(q);
console.log(nq);




let str = "some";
let strObj = new String(str);

/* console.log(typeof(str));
console.log(typeof(strObj)); */

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello!');
    }
};

const john = Object.create(soldier);

john.health = 200;

/* const john = {
    health: 100
}; */



/* john.__proto__ = soldier; */


/* Object.setPrototypeOf(john, soldier); */

/* console.log(john.armor); */


console.log(john);


john.sayHello();