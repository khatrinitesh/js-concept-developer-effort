// 1 ternary operator
// 2 destructing
// 3 spread opeartor
// 4 array methods
// 5 arrow functions
// 6 promises
// 7 fetch api
// 9 async / await
// 10 es6 modules and import/export
// 11 hositing
// 12 closures
// 13 scope
// data types in ✅ String.
// data types in ✅ Number.
// data types in ✅ Bigint.
// data types in ✅ Boolean.
// data types in ✅ Undefined.
// data types in ✅ Null.
// data types in ✅ Symbol.
// data types in ✅ Object
// let, const and var
// operators
// data tpes 
// strings
// events
// event listener / event handler
// functions 
// objects
// array 
// getter
// setter 
// for loop
// for...in
// while loop
// do loop
// type conversion
// callbacks
// promises
// async, await
// closures
// timers
// prototyping
// generators
// unicode
// inheritance
// regular expression (regex)
// operations => assignmet operators / arithmetic operators / comparison operators / logical operators / bitwise operators / string operators / other opeartors 

//***  START - January 12th, Thursday ***//
// const fullname = 'nitesh khatri'
// console.log(fullname)

// const x = 10;
// const y = 15;
// const z = x+y
// console.log(z);

// const friends = ['vijay','rahul','amit','chandresh','rahul']
// const resultfriends = friends.sort(function(a,b){
//     if(a>b) return 1
//     return -1
// })
// console.log(resultfriends);

// the ternary operator
// const isEnable = false 
// console.log(isEnable ? 'nitesh' : 'sameet')

// destructing 
// const objects = ['table','iphone','apple'];
// const [table,...rest] = objects 
// const furniture = objects[0]
// const mobile = objects[1]
// const fruit = objects[2]
// console.log(table);
// console.log(...rest);

// the fetch api
// const fetchdata = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then((data) => setState(data));
// console.log(fetchdata)

// async / await
// async function  asyncFunction(){
//     let promise = new Promise(resolve => {
//         resolve();
//     });
//     let response = await promise;
//     return console.log(response);
// };

// var a = 5;
// console.log(5);
//***  END - January 12th, Thursday ***//

//***  START - January 17th, Tuesday ***//
// const str = 'nitesh'
// const strresult = str.split('').reverse('').join('')
// console.log(strresult)

// const fullname1 = 'nitesh khatri'
// const newfullname = fullname1.split(' ')
// const abbrev_name = function (str1) {
//     var split_names = fullname1.trim().split(" ");
//     if (split_names.length > 1) {
//         return (split_names[0].charAt(0).toUpperCase() + ". " + split_names[1].charAt(0).toUpperCase() + ".");
//     }
//     return split_names[0];
// };
// console.log(abbrev_name("Nitesh Khatri"));
//***  END - January 17th, Tuesday ***//

//***  START - January 18th, Wednesday ***//
// Getting comfortable with the JavaScript array methods like .map(), .filter() and .reduce() is an easy way to seriously elevate your JS skills. You'll be using them literally all the time when working with JS. Here's a few examples of how to use them to manipulate arrays 👇
// const people = [
//     {
//         id:1,
//         name:'nitesh',
//         age:33,
//         occupaton:'front-end developer'
//     },
//     {
//         id:2,
//         name:'sameet',
//         age:40,
//         occupaton:'field service engineering'
//     },
//     {
//         id:3,
//         name:'daddy',
//         age:67,
//         occupaton:'ladies talior'
//     },
//     {
//         id:4,
//         name:'mom',
//         age:64,
//         occupaton:'housewife'
//     },
// ]
// const userNames = people.map((user) => {
//     return user.name;
// })
// console.log(userNames)
// const filterpeople = people.filter((user) => {
//     return user.age > 40
// })
// console.log(filterpeople)
// const reducepeople = people.reduce((totalAge,user) => {
//     return totalAge += user.age
// },0 / people.length)
// console.log(reducepeople)

// // A value in JavaScript is always of a certain type. There are eight basic data types in JavaScript.: string, number, boolean, bigint, undefined, null, symbol and object
// let name = 'nitesh'
// console.log(`hello, ${name}`)
// console.log(`the result is ${1+2}`)
// const numbers1 = 3/0;
// console.log(numbers1);
// const numbers2 = 3/0
// console.log(numbers2);
// const numbers3 = 'abc'/3
// console.log(numbers3);
// const value1 = 90071992512470998n
// console.log(value1);
// const result1 = value1 + 1n
// console.log(result1)
// const result2 = value2 + 1;
// console.log(result2)
// const value1 = Symbol('hello 1');
// const value2 = Symbol('hello 2');
// console.log(value1);
// console.log(value2);
// const students = {
//     name:'nitesh',
//     age:33,
//     marks:{
//         science:79,
//         math:75
//     }
// }    
// console.log(students.name)
// console.log(students.marks.science)
// console.log(students.marks.math)

// const arr = [1,2,3,4,5]
// const filter = arr.filter(item => item !== 3)
// console.log(filter)

// // timers
// function greet(){
//     console.log('hello nitesh khatri')
// }
// setTimeout(greet,2000)
// console.log('this message is going to be loading');

// functions 
// function showMsg(){
//     console.log('nitesh khatri is functions')
// }
// showMsg()

// objects
// const student = {
//     name:'nitesh',
//     age:33
// }
// console.log(student.name)
// console.log(student.age)

// arrays 
// const object_name = {
//     key1:'value1',
//     key2:'value2',
// }
// console.log(object_name.key1)
// const myArray = ['hello','world','welcome']
// console.log(myArray)
// const newData = ['work','exercise',1,true]
// console.log(newData)
// getter
// const person = {
//     fName:'nitesh',
//     lName:'khatri',
//     fullName(){
//         return `${person.fName} ${person.lName}` 
//     }
// }
// console.log(`${person.fName} ${person.lName}`)

// for loop 
// const n = 5 ;
// for (let i=0;i<n;i++){
//     console.log('i am a programmer.');
// }

// for in 
// const student = {
//     name:'nitesh',
//     age:33,
//     class:7
// }
// for(let key in student){
//     console.log(`${key} => ${student[key]}`)
// }

// while loop
// while(i < 10){
//     text += 'the number is' + i
// }

// implicit conversion
// let result;
// result = '3' + 2
// console.log(result)

// explicit converstion
// let result;
// result = Number('324')
// console.log(result)
// result2 = Number('324e-1')
// console.log(result2)

// callbacks
// function greet(name){
//     console.log(`hi ${name}`)
// }
// greet('sameet')

// promises
// const count = true;
// let countvalue = new Promise(function(resolve,reject){
//     if(count){
//         resolve('this is a resolve')
//     }
//     else{
//         reject('this is a reject')
//     }
// })
// console.log(countvalue)

// async,await
// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('Promise resolved')
//     },1000)
// })
// async function asyncFunc(){
//     let result = await promise;
//     console.log(result);
//     console.log('hello');
// }
// asyncFunction();

// closures
// function greet(name){
//     function displayName(){
//         console.log('hi' + " " + name)
//     }
//     return displayName
// }
// const g1 = greet('sameet')
// console.log(g1)
// g1();

// timers 
// function greet(){
//     console.log('hello world')
// }
// setTimeout(greet,1000)
// console.log(greet);
// console.log('this message is shown first')

// prototyping 
// function Person(){
//     this.name = 'nitesh',
//     this.age = 33
// }
// const person = new Person()
// console.log(person.prototype)

//***  END - January 17th, Tuesday ***//

//***  START - January 20th, FRIDAY ***//
// const fullname1 = 'nitesh khatri'
// console.log(fullname1)
// console.log(fullname1.split(' '))
// console.log(fullname1.slice(0,5))
// const assurekitgroup = ['abhijeet','abhisar','gokul','zubair']
// const resultgroup1 = assurekitgroup.sort(function(a,b) {
//     if(a>b) return -1 
//     return 1
// })
// console.log(resultgroup1)
// const resultgroup2 = assurekitgroup.sort(function(a,b) {
//     if(a>b) return 1
//     return -1
// })
// console.log(resultgroup2)
// const resultgroup3 = assurekitgroup.map((item) => item.toUpperCase())
// console.log(resultgroup3)
// const resultgroup4 = assurekitgroup.filter((item) => item !== 'abhijeet')
// console.log(resultgroup4)
// const resultgroup5 = assurekitgroup.shift((item) => item)
// console.log(resultgroup5)
// const assurekitinsurance = [55,22,11,22,33,44,55]
// const resultassurekitinsurance = [...new Set(assurekitinsurance)]
// console.log(resultassurekitinsurance)
// const result2 = assurekitinsurance.filter(item => item !== 44)
// console.log(result2)
// const result3 = assurekitinsurance.filter(item => item === 44)
// console.log(result3)
// const result4 = assurekitinsurance.findIndex(item => item === 44)
// console.log(result4)
// const result5 = assurekitinsurance.lastIndexOf(item => item === 44)
// console.log(result5)
// const result6 = assurekitinsurance.filter(item => item === 44)
// console.log(result6)
// const result7 = assurekitinsurance.fill(11)
// console.log(result7)
// const result8 = assurekitinsurance.push('glen')
// console.log(result8)
// console.log(assurekitinsurance)
// let numonly = (val) => {
//     if(typeof(val) === 'number'){
//         return val;
//     }
//     let numbers = assurekitinsurance.filter(numonly)
//     console.log(numbers)
// }

// var now = new Date();
// var month = now.getMonth()+1;
// console.log(month);

// var months = ['January','February','March','April','May',
//               'June','July','August','September',
//               'October','November','December'];
// var now = new Date();
// var monthnew = months[now.getMonth()];
// console.log(monthnew)

// var days = ['Sunday','Monday','Tuesday','Wednesday',
//             'Thursday','Friday','Saturday'];
// var now = new Date();
// var dayOfWeek = days[now.getDay()]
// console.log(dayOfWeek)

// var sometime = new Date();
// var msElapsed = sometime.getTime();
// console.log(msElapsed)

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }
// console.log(iceCream)
//***  END - January 20th, FRIDAY ***//

//***  START - January 24th, Tuesday ***//
// map and filter
const DATA = [
    {id:1,title:'first'},
    {id:2,title:'second'},
    {id:3,title:'third'},
    {id:4,title:'fourth'},
]
// const upperData = DATA.map((el) => el.title.toUpperCase())
// console.log(upperData);
// console.table(upperData)
// const moduleData = DATA.filter((el) => el.id % 2 === 0)
// console.log(moduleData)

// const characterArr = [
//     'pranay','tejas','swati','mayur','vijay'
// ]
// const copyArr = [...characterArr]
// console.log(copyArr)

// copyArr.slice(0,1)
// copyArr.splice(copyArr.length,1,'wonder woman')
// console.log(copyArr)

// const selected = characterArr.slice(0,2)
// console.log(selected)
// console.log(characterArr)

// concat => this method returns a new array of merging two or more arrays 
// const arr1 = [1,2,3,4]
// const arr2 = [10,20,30,40]
// const arr3 = [100,200,300,400]
// const mergedArr = arr1.concat(arr2,arr3)
// console.log(mergedArr)

// find and findindex = the findmethod returns the first elemeent that satisfies the condition, while findindex returns the index of that element
// const itemFind = DATA.find((el) => el.id === 2)
// console.log(itemFind)
// const itemFindId = DATA.findIndex((el) => el.id === 3)
// console.log(itemFindId)

// destructing =>  the destructing assignment is a special syntax which enables unpacking assigning values from arrays or object properties directly into variables
// const name = ['nitesh','sameet']
// const [fname,lname] = name 
// console.log(name)

// const jodi = {
//     id:1,
//     name:'sachin tendulkar',
//     lightsaber:true,
//     species:'human'
// }
// const {name:sameet,species,...rest} = jodi 
// console.log(sameet)
// console.log(species)
// console.log(rest)

// reset and spread opartor
// rest parameter enables us to pass unspecified number of parameters to a function which will be placed into an array while the spread opeartor enables us to spread opeartor the content of a iterable (i.e. array) into individual elements
// spread
// const introduction = ['my','name','is','nitesh','khatri']
// const copyArray = [...introduction]
// console.log(copyArray)
// console.log(...copyArray)

// rest opeartor 
// const getSize = (...args) => {
//     return args.length
// }
// console.log(getSize(1,5,10))
// console.log(getSize('nitesh','sameet','daddy','mom'))

// promises => in simple terms promises are used to handle asynchronous opeartions. each promise can and as success or failure having 3 possible statues. pending, failure, fulfilled or rejected. In the example below we handle promises with the async await syntaxt while fetching data from API
// const fetchData = async () => {
//     try {
//         const response = await fetch('swapi.dev/api/people');
//         const result = await response.json()
//         return result;
//     }
//     catch(e){
//         console.log(e)
//     }
// }

// let obj = {
//     "userId":S,
//     "id":1,
//     "title":'nitesh khatri',
//     "completed":false
// }

// fetch('https://jsonplaceholder.typicode.com/todos',{
//     method:'POST',
//     body:JSON.stringify(obj)
// }).then((res) => {
//     return res.json()
// }).then((data) => {
//     console.log(data)
// })
//***  END - January 24th, Tuesday ***//
