let Anumber: number = 9;
let BNumber: number = 10;

if(Anumber > BNumber)
{
    console.log("A is grater than B");
}
else
{
    console.log("B is grater then A");
}

for(let i = 0; i < 5; i++)
{
    console.log("Value of i " + i);
}

let myArray = [10,12,15,18,19];

for(var val of myArray){
    console.log(val);
}

for(var index in myArray){
    console.log(index);
}

for(var valIndex in myArray){
    console.log(myArray[valIndex]);
}

