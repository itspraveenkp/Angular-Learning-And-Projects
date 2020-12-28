function canFly(constructorFunction: Function){
    console.log("Can Fly Invoked");
    constructorFunction.prototype.fly = true;
}

@canFly
class Person{
    private name: string;

    constructor(name: string){
        console.log("******** Constructor Colled  ********");
        this.name = name;
    }
}

console.log("********** Crating 1st *********");

let Clark: Person = new Person("Clark");
console.log(Clark);
console.log(`I can Fly: ${Clark['fly']}`);

console.log("********** Crating 2st *********");

let Able: Person = new Person("Able");
console.log(Clark);
console.log(`I can Fly: ${Able['fly']}`);
