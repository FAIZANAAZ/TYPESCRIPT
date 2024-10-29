import { Console } from "console"

//write a program that creates objects containing these items
//object1
interface person {
age:number,
name:string,
nationality:string,
student:boolean
}

let person:person= {
    age :18,
    name :'faiza',
    nationality:"pakistani",
    student: true
    }

    console.log(person);

    //objest2
    interface car {
maker : string,
color : string,
autometic : boolean

    }
    let car={
maker : 'toyota',
color : 'black',
autometic : true
}
console.log(car);