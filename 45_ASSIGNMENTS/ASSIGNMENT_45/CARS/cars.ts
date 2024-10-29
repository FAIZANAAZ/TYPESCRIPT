import { features } from "process";


function car_infomation(manufacture:string , modeName: string , ...extraoption:{ [key :string] : any} []) {
    const carinfo = {
        manufacture,
        modeName,
        ...Object.assign({},...extraoption)
    }
    return carinfo;
};
let answer = car_infomation('HONDA','Civic',{Color:'Black'}, {features :['Navigation',  'power window']})
console.log(answer);
