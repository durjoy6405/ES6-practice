const n = 2;
const n1 = "2";
if (n == n1){
    console.log("not type checking");
}
else if (n === n1) {
    console.log("value & type checking");
} else {
    console.log("nothing is matched");
}


const numbers = [2, 3, 4, 5, 6];
const square = numbers.map(element => element * element);
console.log(square);

const bigger = numbers.filter(x => x>3);
console.log(bigger);

const isThere = numbers.find(x => x>3);
console.log(isThere);

const students = [{ id : 1, name: "a"},
{ id: 2, name: " b"},
{id: 3, name: "c"},
{id:4, name: "d"}];

const names = students.map(x => x.name);
console.log(names);

const numlist = [1,2,3,4,5,6];
const a1 = numlist.slice(2,4);
console.log(a1);
const a2 = numlist.splice(2,4, 8,9,10,11);
console.log(a2);
const a3 = numlist.join(" , ");
console.log(a3);