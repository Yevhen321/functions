// 2 massiva obedinit i vivesti v stroku

//const { element } = require("prop-types");

/*
const array1 = [8,1,2,4,7,6,7,8,9];
const array2 = [2,3,7,8,0,5,4,3,2];
const c = array1.concat(array2);
console.log(c.toString());
console.log(c.join(' '));
const elements = ['Air', 'Wind', 'Star','Air', 'Wind', 'Star'];
console.log(elements.join([' &']));
 
*/

// Delete vse otricatelnie i nulevie elementy

/*
let c =[2, 4, -5, 0, 2, -1, 0, -4, 0, 5, 3, -9];
let res3 = [];
let i = 0, j = 0;
for (let i = 0; i < c.length; i++){
    if (c [i] > 0){
        res3 [j] = c [i];
    }

} 
console.log(res3);

const res4 = c.filter (element => (element > 0));
console.log (res4);
*/

//

/*
let a = [1,2,3,4,5,6,7];
a.splice (1,0,100);
console.log(a);
a.forEach(element => console.log(element * 100));
*/

//
/*
let arr = [1,2,3,4,5,6,7];
function add100 (currentValue, index, array){
array [index] *= 10 ;
}
arr.forEach (add100);
console.log(arr); 
*/

//

const users = [
    {
        name: 'user1',
        age: 20,
        isSelected: true,
    },
    {
        name: 'user2',
        age: 18,
        isSelected: true,
    },
    {
        name: 'user3',
        age: 16,
        isSelected: true,
    },
    {
        name: 'user4',
        age: 20,
        isSelected: true,
    },
    {
        name: 'user5',
        age: 17,
        isSelected: false,
    },
];
//users.forEach(function(elem){
  //      elem.isSelected = true;
        
//});


/*const adultUsers = users.filter (elem => (elem.age > 18));
console.log(adultUsers)

const selectedUsers = users.filter (elem => (elem.isSelected !== false));
console.log(selectedUsers)*/

const isEveryUserAdult = users.every (checkAdult);
function checkAdult (user){
    return user.age > 18;
}
console.log(checkAdult(users))