// let admin, name;
// name = "John";
// admin = name;
// alert(admin); 

// let ourPlanet = "Earth";
// let currentName = "Danaya";

// let name = "Ilya";


// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Ilya


// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// let a = 2;
// let x = 1 + (a *= 2); // a = 4, x = 5

// "" + 1 + 0 = "10" 
// "" - 1 + 0 = -1 
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" 
// "  -9  " - 5 = -14
// null + 1 = 1 
// undefined + 1 = NaN 
// " \t \n" - 2 = -2

// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);
// alert(a + b); // now it's 3
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(+a + +b); // also 3

// 5 > 4  // true
// "apple" > "pineapple" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false

// if ("0") {
//     alert( 'Hello' );
//   } // it'll be the output, because our string isn't empty, i mean, our string is true

// let value = prompt('Type a number', 0);
// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }

// let result = (a + b < 4) ? 'Below' : 'Over';

// let message = (login == 'Employee') ? 'Hello' :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';

// alert( null || 2 || undefined ); //the answer is 2

// alert( alert(1) || 2 || alert(3) ); //1, then 2

// alert(1 && null && 2); // null

// alert( alert(1) && alert(2) ); //1, then undefined

// alert( null || 2 && 3 || 4 ); // the answer is 3

// if (age >= 14 && age <= 90) 

// if (age < 14 || age > 90)


// if (-1 || 0) alert( 'first' ); // runs, the result of -1 || 0 = -1, truthy
// if (-1 && 0) alert( 'second' ); // doesn't run, -1 && 0 = 0, falsy
// if (null || -1 && 1) alert( 'third' ); executes, operator && has a higher precedence than || so -1 && 1 executes first, giving us the chain: null || -1 && 1  ->  null || 1  ->  1

// let userName = prompt("Who's there?", '');
// if (userName === 'Admin') {
//   let pass = prompt('Password?', '');
//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }
// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }

// let i = 3;
// while (i) {
//   alert( i-- );
// } // the last value is 3

// let i = 0;
// while (++i < 5) alert( i ); // from 1 to 4

// let i = 0;
// while (i++ < 5) alert( i ); // from 1 to 5

// for (let i = 0; i < 5; i++) alert( i ); //from 1 to 4

// for (let i = 0; i < 5; ++i) alert( i ); // from 1 to 4

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }

// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }


// let num;
// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i++) { 
//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime; 
//   }
//   alert( i ); 
// }

// if(browser == 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else {
//     alert( 'We hope that this page looks ok!' );
//   }

// let a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert( 0 );
//     break;
//   case 1:
//     alert( 1 );
//     break;
//   case 2:
//   case 3:
//     alert( '2,3' );
//     break;
// }

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
//   }
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Did parents allow you?');
//   } // no difference between these two functions

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
//   }

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
//     return result;
//   }
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
//   if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);
//   } else {
//     alert( pow(x, n) );
//   }

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
//   ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
//     return result;
//   }
//   let x = prompt("x?", "");
//   let n = prompt("n?", "");
//   if (n <= 0) {
//     alert(`Power ${n} is not supported,
//       please enter an integer number greater than zero`);
//   } else {
//     alert( pow(x, n) );
//   }

// describe("Raises x to power n", function() {
//     it("5 in the power of 1 equals 5", function() {
//       assert.equal(pow(5, 1), 5);
//     });
//     it.only("5 in the power of 2 equals 25", function() {
//       assert.equal(pow(5, 2), 25);
//     });
//     it("5 in the power of 3 equals 125", function() {
//       assert.equal(pow(5, 3), 125);
//     });
//   });

// let user = {};
// user.name = "Kamilya";
// user.surname = "Karzhaubaeva";
// user.name = "Aliya";
// delete user.name;

// function isEmpty(obj) {
//     for (let key in obj) {
     
//       return false;
//     }
//     return true;
//   }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
//   alert(sum); 

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

// function makeUser() {
//     return {
//       name: "Dilyara",
//       ref() {
//         return this;
//       }
//     };
//   }
//   let user = makeUser();
//   alert( user.ref().name ); // Dilyara

// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
//     mul() {
//       return this.a * this.b;
//     },
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert( this.step );
//       return this;
//     }
//   };
//   ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// let obj = {};
// function A() { return obj; }
// function B() { return obj; }
// alert( new A() == new B() ); // true

// function Calculator() {
//     this.read = function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     };
//     this.sum = function() {
//       return this.a + this.b;
//     };
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
//   let calculator = new Calculator();
//   calculator.read();
//   alert( "Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() );

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//       this.value += +prompt('How much to add?', 0);
//     };
//   }
//   let accumulator = new Accumulator(1);
//   accumulator.read();
//   accumulator.read();
//   alert(accumulator.value);

// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");
// alert( a + b );

// alert( 6.35.toFixed(20) ); // 6.34999999999999964473
// alert( 1.35.toFixed(20) ); // 1.35000000000000008882
// alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
// alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// function readNumber() {
//     let num;
//     do {
//       num = prompt("Enter a number please?", 0);
//     } while ( !isFinite(num) );
//     if (num === null || num === '') return null;
//     return +num;
//   }
//   alert(`Read: ${readNumber()}`);

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }

// function random(min, max) {
//     return min + Math.random() * (max - min);
//   }
//   alert( random(1, 5) );
//   alert( random(1, 5) );
//   alert( random(1, 5) );

// function ucFirst(str) {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   alert( ucFirst("Bibi") ); // Bibi

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }
//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }

// let fruits = ["Apples", "Pear", "Orange"];
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// alert( fruits.length ); // 4

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert( styles.shift() );
// styles.unshift("Rap", "Reggae");

// let arr = ["a", "b"];
// arr.push(function() {
//   alert( this );
// })
// arr[2](); // a,b,function(){...}

// function sumInput() {
//     let numbers = [];
//     while (true) {
//       let value = prompt("A number please?", 0);
//       if (value === "" || value === null || !isFinite(value)) break;
//       numbers.push(+value);
//     }
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
//   alert( sumInput() );

// function camelize(str) {
//     return str
//       .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//       .map(
//         // capitalizes first letters of all array items except the first one
//         // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
//   }

// function filterRange(arr, a, b) {
//     // added brackets around the expression for better readability
//     return arr.filter(item => (a <= item && item <= b));
//   }
//   let arr = [5, 3, 8, 1];
//   let filtered = filterRange(arr, 1, 4);
//   alert( filtered ); // 3,1 (matching values)
//   alert( arr ); // 5,3,8,1 (not modified)

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
//       // remove if outside of the interval
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
//   }
//   let arr = [5, 3, 8, 1];
//   filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
//   alert( arr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert( arr );

// function copySorted(arr) {
//     return arr.slice().sort();
//   }
//   let arr = ["HTML", "JavaScript", "CSS"];
//   let sorted = copySorted(arr);
//   alert( sorted );
//   alert( arr );

// function Calculator() {
//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
//     this.calculate = function(str) {
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2];
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
//       return this.methods[op](a, b);
//     };
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// let names = users.map(item => item.name);
// alert( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));
// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // John Smith

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
//   }
//   let john = { name: "John", age: 25 };
//   let pete = { name: "Pete", age: 30 };
//   let mary = { name: "Mary", age: 28 };
//   let arr = [ pete, john, mary ];
//   sortByAge(arr);
//   // now sorted is: [john, mary, pete]
//   alert(arr[0].name); // John
//   alert(arr[1].name); // Mary
//   alert(arr[2].name); // Pete

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }
//   let arr = [1, 2, 3];
//   shuffle(arr);
//   alert(arr);

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
//   // counts of appearances for all possible permutations
//   let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };
//   for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
//   } 
//   // show counts of all possible permutations
//   for (let key in count) {
//     alert(`${key}: ${count[key]}`);
//   }

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }
//   let john = { name: "John", age: 25 };
//   let pete = { name: "Pete", age: 30 };
//   let mary = { name: "Mary", age: 29 };
//   let arr = [ john, pete, mary ];
//   alert( getAverageAge(arr) ); // 28

// function unique(arr) {
//     let result = [];
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
//     return result;
//   }
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
//   alert( unique(strings) ); // Hare, Krishna, :-O

// function groupById(array) {
//     return array.reduce((obj, value) => {
//       obj[value.id] = value;
//       return obj;
//     }, {})
//   }

// function unique(arr) {
//     return Array.from(new Set(arr));
//   }

// function aclean(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//       let sorted = arr[i].toLowerCase().split("").sort().join("");
//       obj[sorted] = arr[i];
//     }
//     return Object.values(obj);
//   }
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//   alert( aclean(arr) );

// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// keys.push("more");
// alert(keys); // name, more

// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
//   ];
//   let readMessages = new WeakSet();
//   // two messages have been read
//   readMessages.add(messages[0]);
//   readMessages.add(messages[1]);
//   // readMessages has 2 elements
//   // ...let's read the first message again!
//   readMessages.add(messages[0]);
//   // readMessages still has 2 unique elements
//   // answer: was the message[0] read?
//   alert("Read message 0: " + readMessages.has(messages[0])); // true
//   messages.shift();
//   // now readMessages has 1 element (technically memory may be cleaned later)

// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
//   ];
//   let readMap = new WeakMap();
//   readMap.set(messages[0], new Date(2017, 1, 1));
//   // Date object we'll study later

// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//       sum += salary;
//     }
//     return sum; // 650
//   }
//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
//   alert( sumSalaries(salaries) ); // 650

// function count(obj) {
//     return Object.keys(obj).length;
//   }

// let user = {
//     name: "John",
//     years: 30
//   };
//   let {name, years: age, isAdmin = false} = user;
//   alert( name ); // John
//   alert( age ); // 30
//   alert( isAdmin ); // false

// function topSalary(salaries) {
//     let maxSalary = 0;
//     let maxName = null;
//     for(const [name, salary] of Object.entries(salaries)) {
//       if (maxSalary < salary) {
//         maxSalary = salary;
//         maxName = name;
//       }
//     }
//     return maxName;
//   }

// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//     return days[date.getDay()];
//   }
//   let date = new Date(2014, 0, 3); // 3 Jan 2014
//   alert( getWeekDay(date) ); // FR

// function getLocalDay(date) {
//     let day = date.getDay();
//     if (day == 0) { // weekday 0 (sunday) is 7 in european
//       day = 7;
//     }
//     return day;
//   }

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
//   }
//   let date = new Date(2015, 0, 2);
//   alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
//   alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
//   alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
//   }
//   alert( getLastDayOfMonth(2012, 0) ); // 31
//   alert( getLastDayOfMonth(2012, 1) ); // 29
//   alert( getLastDayOfMonth(2013, 1) ); // 28

// function getSecondsToday() {
//     let d = new Date();
//     return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
//   }
//   alert( getSecondsToday() );

// function getSecondsToTomorrow() {
//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
//     let totalSecondsInADay = 86400;
//     return totalSecondsInADay - totalSecondsToday;
//   }

// function formatDate(date) {
//     let dayOfMonth = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     let hour = date.getHours();
//     let minutes = date.getMinutes();
//     let diffMs = new Date() - date;
//     let diffSec = Math.round(diffMs / 1000);
//     let diffMin = diffSec / 60;
//     let diffHour = diffMin / 60;
//     year = year.toString().slice(-2);
//     month = month < 10 ? '0' + month : month;
//     dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//     hour = hour < 10 ? '0' + hour : hour;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     if (diffSec < 1) {
//       return 'right now';
//     } else if (diffMin < 1) {
//       return `${diffSec} sec. ago`
//     } else if (diffHour < 1) {
//       return `${diffMin} min. ago`
//     } else {
//       return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
//     }
//   }

// let user = {
//     name: "John Smith",
//     age: 35
//   };
//   let user2 = JSON.parse(JSON.stringify(user));

// let room = {
//     number: 23
//   };
//   let meetup = {
//     title: "Conference",
//     occupiedBy: [{name: "John"}, {name: "Alice"}],
//     place: room
//   };
//   room.occupiedBy = meetup;
//   meetup.self = meetup;
//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
//   }));
//   /*
//   {
//     "title":"Conference",
//     "occupiedBy":[{"name":"John"},{"name":"Alice"}],
//     "place":{"number":23}
//   }
//   */