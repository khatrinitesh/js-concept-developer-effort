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