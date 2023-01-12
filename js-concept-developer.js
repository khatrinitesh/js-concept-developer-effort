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

//***  START - January 12th, Thursday ***//
const fullname = 'nitesh khatri'
console.log(fullname)

const x = 10;
const y = 15;
const z = x+y
console.log(z);

const friends = ['vijay','rahul','amit','chandresh','rahul']
const resultfriends = friends.sort(function(a,b){
    if(a>b) return 1
    return -1
})
console.log(resultfriends);

// the ternary operator
const isEnable = false 
console.log(isEnable ? 'nitesh' : 'sameet')

// destructing 
const objects = ['table','iphone','apple'];
const [table,...rest] = objects 
// const furniture = objects[0]
// const mobile = objects[1]
// const fruit = objects[2]
console.log(table);
console.log(...rest);

// the fetch api
// const fetchdata = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then((data) => setState(data));
// console.log(fetchdata)

// async / await
async function  asyncFunction(){
    let promise = new Promise(resolve => {
        resolve();
    });
    let response = await promise;
    return console.log(response);
};

var a = 5;
console.log(5);


//***  END - January 12th, Thursday ***//
