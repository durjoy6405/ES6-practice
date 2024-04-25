const person = {name: "Durjoy", Age: 24, 
profession: "Student", friends:['Anam', 'Shanto', 'Jahid']};

const {name, Age} = person;
const pName = person.name;

//console.log(pName, Age);
//console.log(pName);
//console.log(pName);

const friends = ['Anam', 'Shanto', 'Jahid'];

const [firstFrnd, secondFrnd, ...rest] = friends;
console.log(rest);

const complexobject ={
    name: "abc",
    info: {
        address: "kolabagan",
        phone: 1515245930
    }
}
const {address} = complexobject.info;
console.log(address);