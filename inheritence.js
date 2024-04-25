class Parent{
    constructor(fatherName){
        this.fatherName = fatherName;
    }
}
class Child extends Parent{
    constructor(fatherName, name){
        super(fatherName);
        this.name = name;
        
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}


const baby = new Child( "Dog","puppy");
console.log(baby);
console.log(baby.getFullName());