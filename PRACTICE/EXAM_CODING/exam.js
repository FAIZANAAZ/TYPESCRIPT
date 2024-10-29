//strong typing  //type anonimous
//  let myname : string = "FAIZA"
// let myage : number  = 1234 
/////////////////////////////////////////////////////////////////////////
//module export
//  let mynamee : string = "FAIZA"
//  export default mynamee
//  export let myagee : number  = 1234
//  export {myname,myage}
//module import
//  import abc from "./myfile.js"
//  import {myname} from "./myfile.js"
//  import {mynamee,myage} from "./myfile.js"
//  import abc * as from "./myfile.js"
//  import {mynameee , mageee as age} from "./myfile.js"
/////////////////////////////////////////////////////////////////////////
// import inquirer from "inquirer"
// let my = await inquirer.promt ([{
//     name : "abc",
//     type : "number",
//     message : "i am faiza naaz"
// }])
/////////////////////////////////////////////////////////////////////////
//union literal
// let age :"A"|"B"|"C"= "C"
// age = "B"
//normal union 
// let agee : string |null = "aliza"
// agee = null
/////////////////////////////////////////////////////////////////////////
//narrowing
//***************spellig of to lovercase tostrin ke sath( ) lagygy */
// let mage :any = 16
// typeof mage==="string" ? mage.toLowerCase(): mage.tofixed()
// let randon :number = Math.random()
/////////////////////////////////////////////////////////////////////////
//type aliyas 
// type a = string | number 
// let A :a = "hjhh"
// A = 89
// type b = string & number //******************type ko intersectio ke sath hm variable me use nhi kr sky */
// let B : b = 87 //error 
/////////////////////////////////////////////////////////////////////////
//*************************esy bhi hm object ko type dekr name reuse krky value de skty hen */
//type annonimus
// let student :{
//     name :string,
//     age : number
// }
// student ={
//     name :"faiza",
//     age :76
// }
//...............
// let studentt :{
//     name :string,
//     age : number
// }={
//     name :"faiza",
//     age :76
// }
//...............
//*****************object me = zaror dalta he */
// interface ab {
//     name :string
//     age : number
// }
// let abc : ab = {
//     name :"faiza",
//     age :76
// }
//...............
// type abs = {
//     name :string
//     age : number
// }
// let abcc : abs = {
//     name :"faiza",
//     age :76
// }
//..............
// type abss = {
//     name :string
//     age : number
// }| {
//     name :string
//     age : number
//     id : number
// }
// let abccc : abss = {
//     name :"faiza",
//     age :76,
//     id : 195
// }
//....................
// type absss = {
//     name :string
//     age : number
// }&{
//     name :string
//     age : number
//     id : number
// }
// let abcccc : absss = {
//     name :"faiza",
//     age :76,
//     id : 195
// }
/////////////////////////////////////////////////////////////////////////////////////////
//*************kiski ko kisi type ke braber krna khlata he structrual type */
// interface a {
//     name :string
// }
// interface b {
//     name : string
// }
// let H : a ={name : "faiza"}
// let G : b = {name : "nimra"}
// G=H
// H=G
//............
// interface HB {name : string}
// interface GN {name : string
//                age : number
// }
// let B : HB ={name :"faoza"}
// let C :GN = {name :"nimra",
//     age : 189
// }
// B=C//TURE
// C=B//false
//*****************INDEX SIGNATURE 
// let myname :{name :string , [x : number]:any}
// let yy ={
//     name : "faiza",
//     age : 257
// }
//**************ak trha sy index signature optional hota he */
// myname=yy//true kioky index signature ho ya nhi osko frk nhi prhta osny dekha ke name he bs or == kr diya
// yy=myname//false kioky yy me name or age chiye zaror
// let nestes= {
//     name : "faiza",
//     age : 234,
//     object : {
//         name :"nimra",
//         age : 18
//     },
// //********************agr hm fun me koch return nhi krwaygy bs log krwaygy to print time wo ans ke sath undefined dega zaror
//     func :()=>{return"faiza"}
//     }
// let a = nestes.object.age
// console.log(a);
// interface ab {
//     name1 : string
//     age : number
// }
// interface bc {
//     name : boolean 
//     age1 : string
// }
//***********agr hmy intersection me  interface ko use krna hoto hm type ka use krty hen = krny ke liye kioky hm 
//interface me to = isiqual ka use krty hi nhi hen to intersection kesy krengy */
// type a = ab & bc
// let main : a = { 
//     name1 : " alina" ,
//     age : 27,
//     name : true,
//     age1 : "nimra"
// }
/////////////////////////////////////////////////////////////////////////////////////////
//explicit casting 
// let casting : string = "123"
// casting as unknown as number
// Number(casting)
// console.log(casting);
/////////////////////////////////////////////////////////////////////////////////////////
//************enum me let ka use nhi krty wrna wo variable bn jayga */
// enum av {
//     monday=7, 
//     tuesday=1,
//     wednesday
// }
// console.log(av);
//agr pora enum ka name bina . ke log krengy to result esa ayga
// {
//     '0': 'monday',
//     '1': 'tuesday',
//     '2': 'wednesday',
//     monday: 0,
//     tuesday: 1,
//     wednesday: 2
//   }
// console.log(av[2]);
// console.log(av.tuesday);
///..................................
// const enum dh {
//     monday=7, 
//     tuesday=1,
//     wednesday
// }
// //**********const enum ko direct bs enum ka name de kr . ya [ ] ye lgay bager acces nhi kr sky
// or isy hm value yani 0 1 2 sy acces nhi kr skty  */
// console.log(dh.monday);
/////////////////////////////////////////////////////////////////////////////////////////
// let a :any = 21
// switch(false){
// case a > 22 :console.log("no");
// break;
// case a <20 :console.log("no")
// break ;
// case a == 21 : console.log("yes");
// break;
// default : console.log("no");
// }
/////////////////////////////////////////////////////////////////////////////////////////
// let array1 : (string | number | boolean)[]= [ "faiza",123,true]
// console.log(array1);
// let array2 :string[]= ["faiza", "aliza","abiha"]
// console.log(array2);
// //************array ki type hm is trha bhi bayan kr skty hen ye khlata he alternative type */
// let array3 : Array<number> = [ 2 , 4, 5, 7]
// console.log(array3);
// let array4 : Boolean[]= [true , false , true]
// console.log(array4);
// //.................
//  let array_method= ["faiza","nimra","shoaib"]
//  console.log(array_method);
//  array_method.push("alina")
//  console.log(array_method);
//  array_method.pop()
//  console.log(array_method);
//  let concatt=array_method.concat(["rabiya", "shomaila"])
//  console.log(concatt);
//  let slicee= array_method.slice(0,2)
//  console.log(slicee);
//  array_method.shift()
//  console.log(array_method);
//  array_method.unshift("sadia")
//  console.log(array_method);
//  array_method.splice(1,2)
//splice me delet or add waly dono me phly index no hi hota  he phir os index ke bad kitny delet krny hen wo index waly ko mila kr
//or add waly me index waly ke bad delet wala phir name
//  console.log(array_method);
//  array_method.splice(1,0,"abiha")
//  console.log(array_method);
//  let mapp = array_method.map((e:any)=>e.length)
// console.log(mapp);
// let filter = array_method.filter((e:any)=>e.length>2)
// console.log(filter);
// let inclue =array_method.includes("faiza")
// console.log(inclue);
// let findd=array_method.find(e=>e)
// console.log(findd);
// let join =array_method.join()
// console.log(join);
// array_method.fill("sameer",0,1)
// console.log(array_method);
/////////////////////////////////////////////////////////////////////////////////////////
// function myname(){
//     console.log("hello");
// }
// myname()
// //............
// function hii(name : string) {
//     return name
// }
// console.log(hii("hii baby"));
// //.............
// function kesy(kesy:string , ho :string) {
//     return kesy+" "+ho
// }
// console.log(kesy("kesy","ho"));
//...............
// let anonimous_fun=function (age:number , age1 :number , age2? :number) {
//     if (age2) {
//         return age+age1+age2
//     }else{
//     return age+age1}
// }
// console.log(anonimous_fun(1,2))
// console.log(anonimous_fun(1,2,3));
// //........
// let arro_fun= (name:string ,...hmm:string[])=>{
//     return `${name} ${hmm}`
// }
// console.log(arro_fun("pagal"));
// console.log(arro_fun("no", "no","no"));
// //**********lambda funtion    matlb jismy hm arro fun me bina{}isky kam krty hen jesy */
// let lambda = (lam:string)=>lam
// console.log(lambda("faiza naaz"));
//**********with data type */
//void*******ki speling yad kro
// let data_type_fun:(name :string ,age:number)=>void =(name :string,gm:number)=>{
//     console.log(name ,gm);
// }
// data_type_fun("shoaib",23)
//...........with type aliyas ********ype aliyas ko function ke hmesha prameter me dety hen 
//************jb type aliyas me hm func dety hen to arrgument pora fun hi leta he or wo bhi alg sy bna kr or osko bhi any type dekr*/
// type sAN=(name :string )=>void
// function type_fun (name:sAN){
// console.log(name);
// }
// // type_fun("FAIZA")//error
// let aregument_fun :any = (name:"faiza")=>{console.log(name)}
// type_fun(aregument_fun)
//...with defaul parameter
// function defaultt(myname : string = "faiza") {
//     console.log(myname);
// }
// defaultt()
// defaultt("alina")
/////////////////////////////////////////////////////////////////////////////////////////
// //TYPLES
// let tuples:[string,number,boolean]= ["faiza",18,true]
// let types2:["aliza",193,false]=["aliza",193,false]
/////////////////////////////////////////////////////////////////////////////////////////
//function overloading
// function overload(name:string,name2:number ) :string//1
// function overload(name:number,name2 :boolean) :number//2
// function overload(name:boolean,name2:string ) :boolean//3
// function overload(name:any,name2:any ) :any{
//           console.log(`${name}, ${name2} `);
// }
// overload("faiza",123)//1
// overload(true,"string")//3
// overload(123,false)//2
//agr hm return data type any dety hen main body me to hm sb me alag alag type de skty hen or agr hm any ki jga koi type likhty hen string
//boolena koch bhi to sbko wahi type deni hogi or retun bhi osy foam me krwana pryga 
// function overload1(name:string,name2:number ) :string//1
// function overload1(name:number,name2 :boolean) :string//2
// function overload1(name:boolean,name2:string ) :string//3
// function overload1(name:any,name2:any ) :string{
//           return `${name},${name2}`
// }
// overload1("faiza",123)//1
// overload1(true,"string")//3
// overload1(123,false)
/////////////////////////////////////////////////////////////////////////////////////////
// function call_back(call:(name : string)=>void) {
//     setTimeout(()=>{
//         console.log("hello callback");
//         call("faiza")
//     },1000)
// }
// call_back((e:any)=>console.log(e))
//.............
// function call2(text:string,age :number , message : string) {
//     console.log(text , age , message);
// }
// function call_back2(name1:string  ,age1 :number , message1 : string, back:(text:string , age :number , message : string)=>void) {
//              back(name1,age1,message1)
// }
// call_back2("hi",123,"you are a callbacck funcion",call2);
/////////////////////////////////////////////////////////////////////////////////////////
//CALLBACK
//  async function dealyy(milisecond:number){
//    return new Promise ((resolve,reject)=>{
//       setTimeout(() => {
//          let data ="hello"
//          if(data){
//          resolve(data)}else{
//             reject("data is reject")
//          }
//       }, milisecond);
//    })}
// dealyy(2000).then((e:any)=>{console.log(e);
// }).catch((error:any)=>console.log(error)).finally(()=>{console.log("complete task");
// })
//............PROMIS
//    let promisesa = new Promise <string>((resolve,reject)=>{
//       setTimeout(()=>{
//          let api = "data is available"
//          if (api) {
//             resolve(api)
//          }else{
//             reject("DATA IS NOT AVAILABLE")
//          }
//       },2000)
//    })
// promisesa.then((e:any)=>e.toUpperCase()).then(g=>console.log(g)
// ).catch((f)=>console.log(f)
// ).finally(()=>{console.log("task complete");
// })
//..............
//ASYN AWAIT with tray catch
// async function awaitt() {
// try {
//    let api = ""
//    console.log(api);
// } catch (error) {
//    console.error(error);
// }finally{
//    console.log("finally complete task");
// }
// }
// console.log(awaitt());
/////////////////////////////////////////////////////////////////////////////////////////
// function iron_start(call_start : ()=>void){
// console.log("CLICK IRON BUTTON")
// setTimeout(()=>{
// console.log("IRON  START")
// call_start()
// },1000)
// }
// function iron_hot(call_hot:()=>void){
//    console.log("IRON CONTINUE TO HOT");
// setTimeout(()=>{
//    console.log("FINALLY IORON HOT");
//    call_hot()
// },5000)
// }
// function iron_OFF(){
//    console.log("IRON CONTINUE TO COOL");
// setTimeout(()=>{
//    console.log("FINALLY IORON COOL");
// },3000)
// }
// iron_start(()=>{
//    iron_hot(()=>{
//       iron_OFF()
//    })
// })
/////////////////////////////////////////////////////////////////////////////////////////
// function iron_start1(){
// console.log("CLICK START BUTTON")
// return new Promise((resolve,rejects)=>{
//    let button = "RIGHT CLICK"
// if (button) {
// setTimeout(()=>{
//    resolve("IRON START")
// },1000)
// }else{
//    rejects("PLEASE PRESS ON THE RIGHT BUTTON")
// }})
// }
// function iron_hot1(){
//    console.log("IRON CONTINUE TO HOT")
//    return new Promise((resolve,rejects)=>{
//       let button = "RIGHT CLICK"
//       if (button) {
//    setTimeout(()=>{
//       resolve("FINALLY IRON HAS BEEN HOT")
//    },5000)
// }else{
//    rejects("ERROR (NOT HOT)")
// }})
// } 
// function iron_cool1(){
//    console.log("IRON CONTINUE TO COOL")
//    return new Promise((resolve,rejects)=>{
//       let button = "RIGHT CLICK"
//       if (button) {
//    setTimeout(()=>{
//       resolve("FINALLY IRON HAS BEEN COOL")
//    },4000)
// }else{
//    rejects("ERROR (NOT COOL)")
// }})
// }
// iron_start1().then((value:any)=>{
// console.log(value);
// return iron_hot1()
// }).then((value1:any)=>{
//    console.log(value1);
//    return iron_cool1()
// }).then((value3:any)=>{
//    console.log(value3);
// }).catch((error:any)=>{
//    console.log((error));
// }).finally(()=>{
//    console.log("IRON OFF");
// })
/////////////////////////////////////////////////////////////////////////////////////////
// function iron_start1(){
//    console.log("CLICK START BUTTON")
//    return new Promise((resolve,rejects)=>{
//       let button = "RIGHT CLICK"
//    if (button) {
//    setTimeout(()=>{
//       resolve("IRON START")
//    },1000)
//    }else{
//       rejects("PLEASE PRESS ON THE RIGHT BUTTON")
//    }})
//    }
//    function iron_hot1(){
//       console.log("IRON CONTINUE TO HOT")
//       return new Promise((resolve,rejects)=>{
//          let button = "RIGHT CLICK"
//          if (button) {
//       setTimeout(()=>{
//          resolve("FINALLY IRON HAS BEEN HOT")
//       },5000)
//    }else{
//       rejects("ERROR (NOT HOT)")
//    }})
//    } 
//    function iron_cool1(){
//       console.log("IRON CONTINUE TO COOL")
//       return new Promise((resolve,rejects)=>{
//          let button = "RIGHT CLICK"
//          if (button) {
//       setTimeout(()=>{
//          resolve("FINALLY IRON HAS BEEN COOL")
//       },4000)
//    }else{
//       rejects("ERROR (NOT COOL)")
//    }})
//    }
//    async function awaitt(){
// try {
//    let iron1 =await iron_start1()
//    console.log(iron1);
//    let iron2 = await iron_hot1()
//    console.log(iron2);
//    let iron3 = await iron_cool1()
//    console.log(iron3);
// } catch (error) {
//    console.log(error);
// }finally{
//    console.log("IRON OFF");
// }
//    }
//    awaitt()
/////////////////////////////////////////////////////////////////////////////////////////
//QUATION 1
//  function awit() {
// return new Promise((res)=>{
//    setTimeout(()=>{
//      res("HELLO WORLD")
//    },2000) })
// }
// async function asyn(){
// let abc = await awit()  
//    console.log(abc);
// }
// asyn()
// /////////////////////////////////////////////////////////////////////////////////////////
//***********settimeout kabhi return nhi hota to hm nhi krwaty */
// // QUATION 2
// function out_call(in_call:()=>void){
//    setTimeout(()=>{
//       console.log("hello , callback");
//       in_call()
//    },1000)
// }
// out_call(()=>{})
/////////////////////////////////////////////////////////////////////////////////////////
//QUATION 3
// function promisee(){
//    return new Promise ((resolve,rejects)=>{
//       setTimeout(() => {
//          resolve("RESOLVE")
//       }, 3000);
//    })
// }
// promisee().then((value:any)=>{
//    console.log(value);
// })
/////////////////////////////////////////////////////////////////////////////////////////
//QUATION 4
// let promise1=new Promise((resolve)=>{
// setTimeout(()=>{
//    resolve("promise 1");
// },1000)
// })
// let promise2 =new Promise ((resolve)=>{
//    setTimeout(()=>{
//       resolve("promise 2");
//    },1000)
// })
// async function array() {
//    let p1 = await promise1 
//    let p2 = await promise2
//    return [p1 , p2]
// }
// console.log(await array());
///////////////////////////////////////////////////////////////////////////////////
//QUATION 5
// function loog() {
//    return new Promise ((resolve)=>
//    {
//          setTimeout(()=>{
//             resolve("PROMISE RESOLVE")
//          },2000)
//    })
// }
// async function result(){
//    let prom= await loog()
//    console.log(prom);
// }
// result()
///////////////////////////////////////////////////////////////////////////////////
//QUATION 6
// function reject() {
//    return new Promise ((resolve,reject)=>
//    {
//          setTimeout(()=>{
//             reject("PROMISE REJECT")
//          },2000)
//    })
// }
// async function result1(){
//    try {
//       let prom= await reject()
//    console.log(prom);
//    } catch (error) {
//       console.log(error);
//    }
// }
// result1()
///////////////////////////////////////////////////////////////////////////////////
//QUATION 7
// function squre(num:number) {
//    return new Promise ((resolve)=>{
// setTimeout(()=>{
//    resolve(num**2)
// },1000)
//    })
// }
// squre(5).then((value:any)=>{
// console.log(value)
// })
///////////////////////////////////////////////////////////////////////////////////
//QUATION 8
//promises ka array kha he yani 1 sy zada prmise
//  function array() {
//   return new Promise((resolve)=>{
//       setTimeout(()=>{
//          resolve("hello")
//       },0)
//    })
// }
// function array2() {
//    return new Promise((resolve)=>{
//        setTimeout(()=>{
//           resolve("world")
//        },0)
//     })
//  }
// async function result1() {
//    let promis1 = await array()
//    let promis2 = await array2()
//    return [promis1 , promis2]
// }
// console.log(await result1());
//second method ismy promise.all ak array accept krta he  wo sary promise ko ak array me accept krleta he 
// async function result2() {
//    let promis1 = await Promise.all([array(),array2()])
//    return promis1
// }
// console.log(await result2());
///////////////////////////////////////////////////////////////////////////////////
//QUATION 9
//1st method
// function seconds() {
// console.log("REPEAT FUN AFTER EVERY 2 SECNDS");
// setTimeout(seconds
//    ,2000)
// }
// seconds()
//***************************************************************** */
//2nd method
function repeat() {
    setTimeout(() => {
        console.log("FAIZA NAAZ");
    }, 2000);
}
//set timout ka use isi liye kiya he ke quation me likha tha wrna direct bhi set interval ka use kr skty thy
//variable bna kr incriment or if else iis liye lgaya taky rok sky kioky interval ak loop ki trhabar bar run hota he
let num = 0;
let stop = setInterval(() => {
    repeat();
    num++;
    if (num === 5) {
        clearInterval(stop);
    }
}, 2000);
export {};
///////////////////////////////////////////////////////////////////////////////////
//1st method again
//*****************agr hm ak fun bnakr osky ander koch bhi funationality likh kr ak set timout bnay or settimeout ke ander 
//wahi fun pass krden to wo bar bar print hoga apny time ke bad/
// function repeat() {
// console.log("prepeat");
//       setTimeout(repeat,2000)
//    }
// repeat()
///////////////////////////////////////////////////////////////////////////////////
//QUATION 10
// function q10(): Promise<number>{
//    return new Promise((resolve)=>{
//       setTimeout(()=>{
//          resolve(10)
//       },2000)
//    })
// }
// async function name(){
//      let a = await q10()
//      return new Promise((res)=>{
//       res(a*2)
//      })
// }
// console.log( await name());
