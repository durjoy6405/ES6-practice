/*function doubleIt(num){
    return num*2;
}*/
const doubleIt = function (num){
    return num*2;
}
const doubleIt2 = num => num*2;
const result = doubleIt(5);
console.log(result);

const add = (x, y) => x+y;
//no parameter
const give5 = () => 5;

const avg = (x, y) =>{
    const sum = x+y;
    const a = sum /2;
    return a;
}

console.log(avg(5,6));
