// let laptop ={
//     make : "faiza",
//     model : "honda",
//     year : 2022 ,
//     method :function (){
//         console.log(`this  laptop is  ${this.make}  ${this.model}  ${this.year}` );
//     }
// }
// laptop.method()
//********************************************************************** */
// let laptops_array=[
// {
// make : "dell",
// module :"aiso",
// year : 2019
// }, {
//     make : "hp",
//     module :"sim",
//     year : 2018
//     },
//     {
//         make : "lenovo",
//         module :"hmk",
//         year : 2017
//         }
// ]
// let [ laptop1 , laptop2 , laptop3] = laptops_array
// console.log(laptop1);
// console.log(laptop2);
// console.log(laptop3);
//*********************************************************** */
//  let laptop_price1 :any[] =[30 , 40 , 50]
//  let laptop_price2  = [60 , 70 , 80]
//  let combine_array =[...laptop_price1 , ...laptop_price2].sort((a : number, b :number)=>a*b)
//  console.log(combine_array);
//**************************************************************************** */
// let hoby :string[] = [ "namaz","exercise","quran"]
// function hobies( [...array] :string[]) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(` I enjoy that ${array[i]}`);
//     }
// }
// hobies(hoby)
//*********************************************************** */
//literal tamlate ``
// let myliteral = `my idea day : 
// 1 : I getup early in the morning
// 2 : I perfoam 5 time nama
// 3 : I doing coding dealy`
// console.log(myliteral);
//************************************************************** */
// function simple(width : number , height :number ) {
//     return width * height
// }
// let arror_function =(rectangle : number ) =>{
//    return rectangle
// }
// console.log(arror_function(simple(7 ,8)));
//****************************************************************** */
// let smartphon ={
//     medel : "iphon",
//     brand : 2024 ,
//     features : {
//        storage : "128gb",
//         sizescreen : "5inch",
//         bettrytiming : "3hrs"
//     }
// }
// console.log(smartphon);
//************************************************************ */
// let nested_object ={
// language :["java","types","paython"],
// tools :["react","node","vue"],
// framwork : ["git","webpage", "docker"]
// }
// let {language , tools , framwork} = nested_object  
// console.log(`${language } & ${tools} & ${framwork}`);
//*********************************************************************** */
// function flacsible(key : string , value : string) {
//    let  dynamic={
// key ,
// value
//    }
//    dynamic.key= value
//    return dynamic
// }
//  let abc = flacsible("123", "789")
//  console.log(abc);
//*************************************************************************  */
// let double = [1 , 2 ,3 ,4 ]
// let double_number = double.map((e)=>e*2)
// console.log(double_number);
//*********************************************************************** */
// let grade = [1 , 2 , 3, 4, 5 ,6]
// let grade2  =grade.reduce((e , f)=>e  + f )/grade.length 
// console.log(grade2);
//*********************************************************************** */
// let items=["mango","banana",2, true , 4 ,"tuesto"]
// let items2 =items.filter((e)=>typeof e ==="string")
// console.log(items2);
//************************************************************************** */
// function score([...scoree]:number[]){
//     let score_average = scoree.reduce((e ,f)=>e+f)/scoree.length
//     return score_average
// }
// console.log(score([1 , 2 , 3 , 4]));
//************************************************************************** */
// function magic(score:number):(number:number)=> number{
//     return function (number:number):number {
//         return number + score 
//     }
// }
//     let addfve =magic(5)
//     console.log(addfve(10));
//***************************************************************************** */
//function return data by it self
// let userprofile = (function () {
//     let name = "faiza"
//     let age = 18
//      return {
//         abc : function() {
//             console.log(`Name ${name} , Age ${age} `);
//         }
//      }
// })()
// userprofile.abc()
//************************************************************************************* */
//     enum abc{ cars , trucks , motercycle , baik     }
//    console.log(abc.motercycle);
//*************************************************************************************** */
// interface blueprint {
//     name : string,
//     age : number ,
//     class : string
// }
// let object_student : blueprint = {
//     name :"faiza",
//     age : 18 ,
//     class : "12th"
// }
// console.log(object_student);
//********************************************************************************************* */
// day 21
// type shapes ={
//     name :" circle" | "ractangle"
//     witdh? : number
//     hight? : number 
//     redius? : number
// }
// let circle : shapes ={
//     name : " circle",
//     redius : 4.4
// }
// let ractangle : shapes = {
//     name : "ractangle",
//     hight : 5 ,
//     witdh : 9
// }
// console.log(ractangle);
// console.log(circle );
//********************************************************************************************* */
//day22
// function age(string:string , number : number):string {
// return string + number
// }
// console.log(age("Age : " ,30));
//********************************************************************************************* */
//22
// function remander(num1 : number , num2 : number) : number{
//     return num1 % num2
// }
//     console.log(remander(5 , 4));
//****************************************************************************************** */
//ismy ye he ke agr hm function me 2 types dety hen or dono ko return krwaty waqt hm agr && ka use kren to 
//wo dono ko ak kr deta he or jo bad wala argument hota he osy print kra deta he
// function operator(operator:boolean , operator2 :boolean) {
//        return operator && operator2
// }
// console.log(operator(true ,false ));
//*********************************************************************************** */
//23 day
//ismy hmny type ko mix kr diya number to number hi he or sting ko bhi hmny kha ke number lo or + krdo 
//to osny 67 or 18 ko + krdiya
// function operatiom(string:string , Numberr :number) {
//        return Numberr + Number(string)
// }
// console.log(operatiom ("67", 18));
//**************************************************************************************** */
// ismy hmny argument me 2 number liye decimal yani . waly ki foam me phir osy round of krwa diya math. round of
//ke zariye sy 
// function decimal(numberr:number , numberr2 : number ) : number{
//     return Math.round((numberr * numberr2)*100)/100
// }
// console.log(decimal(0.1 , 0.2));
//*************************************************************************************** */
// function remainders(num1:number , num2 :number):{quotient : number , remainderr : number} {
//      let quotient = Math.floor(num1/num2)
//      let remainderr = num1 % num2
//     return {
//         quotient,
//         remainderr
//     }
// }
// console.log(remainders(20 , 8));
//******************************************************************************************* */
//24 day
//yaha hmny bs ak function me loop ko rkha he jb esa hoto sric console hm ak hi bar krwaygy loop me bs or
//perameter oor argument nhi dengy 
// function loop() {
//     for (let i = 1; i <=5; i++) {
//     console.log(i);
//     }
// }
// loop()
//******************************************************************************************* */
//catch sy ye hota he ke hm errror ko catch krtyhen or phir osky sath ak sms print krwa dety hen isy  ye hota
//he ke terminal me error to ata he osky sath sms a jata he ke ye error kio aya he wo sms hm khod likhty hen
// let myname = " faiza"
// myname = "nimra "
// console.log(myname);
// const myage = 78
// try {
//     myage = 66
// }catch (error){
//     console.log("error : cant reassign a `const` _ declared variable");
// }
//****************************************************************************************** */
// let letblock = "faiza"
// const sonstblock = 18
// try{
//     console.log(letblock);
// }catch (error){console.log("letblock is not accessiable outside of the block");
// }
// try{
//     console.log(sonstblock);
// }catch (error){
//        console.log("constblock is not accessiable outside of the block");
// }
//******************************************************************************************** */
// function ubdate() {
// let mayname = "faiza"
// console.log("'asign value", mayname);
//   mayname  =  "Ahmad" 
//   console.log("ubdated value", mayname);
// }
// ubdate()
//*********************************************************************************** */
//ismy function bs name ka he bs hmny ye kiya he ke phly a ki value 5 or b ki 10 rakhi (ismy ye krna tha ke variabl
//name ke zariye swap matlb value ko adla badli krni thi)to hmny a ko b ke braber kr diya or ak or varia bna kr osy
//a ke braber kr diya phir b ko temp de diya
// function swap() {
// let a = 5
// let b = 10 
// console.log("before swap",,"a", a ,"b",b);
// let temp = a
// a = b
// b=temp
// console.log("after swap" ,"a", a ,"b",b);
// }
//    swap()
//************************************************************************************* */
//ismy koch bhi nhi he bs ak variable ki value ke sath arthimatic opertors ko use krna tha
// let x = 3
// console.log(x);
// x += 5
// console.log(x);
// x -= 4
// console.log(x);
// x /=3
// console.log(Math.floor(x));
// (x *= 2)
// console.log(Math.floor(x));
//************************************************************************************** */
//26 day
// function add(num1 : number , num2 : number): number {
//     return num1 + num2
// }
// console.log(add(2 , 2));
//************************************************************************************** */
//  function user(name:string = "anonymous" ) {
//     console.log(`HELLO ${name}`);
//  }
// user()
// user("faiza")
//*************************************************************************************** */
//typescript me hhm 2 trha sy simple function ko likh skty hen ak function ko name dekr or dosra vaiable me stor krky 
//variable ke name ko call krwa kr
// function simple_fun(numbers:number) {
//     return numbers*numbers
// }
// console.log(simple_fun(4));
// let variable_fun =  function (numbers:number){
//     return numbers*numbers
// }
// console.log(variable_fun(5));
//*************************************************************************************** */
//27 days
// let car = {
//     make : "faiza",
//     model : "carola",
//     year :2010
// }
// console.log(car.model);
//****************************************************************************************** */
//yani hm object me carr.color ="black"; esy krky bhi add krwa deta he property but hmy osky liye type any deni hogi 
//lekin ye acha trika nhi he bhter ye he ke hm interface bnaden or colour ko ? de kr optional bna den phir bad me add krden
// let carr :any = {
//     name : "toyota",
//     model : "carola",
//     year :2010,
// }
// carr.color ="black";
// carr.year = 2011
// console.log(carr);
//**************************************************************************************** */
//ismy hmny ak func bnaya he or osmy ak object rkha he or andr for in loop ka use kiya he bhi function ki trha hota he (){}
// ye dono brases likhta he or print ye bhi line se krwata he for loop ki trha is lopp ke console me hmny kha he ke
//object me in lga kr ke property in object krky objec ki proprty ko properties kha he or phir properties ke khali name 
//print krway hen phir : obj[property] yani properties ki value phin func ke argument me ak object pas kr diya
// function object_fun(obj:any) {
//      for (let property in obj){
//     console.log(`${property} : ${obj[property]}`)}
// }
// object_fun({    name : "toyota",model : "carola",year :2010,})
//************************************************************************************* */
//28 day
// function lenthh(name:string) {
//     return name.length
// }
// let number =lenthh("faiza")
// console.log(number);
//*********************************************************************************** */
// function casee(namee:string):string {
//     return `${namee.toUpperCase() } , ${namee.toLowerCase() }`
// }
// console.log(casee("faiza"));
//********************************************************************************** */
//replace ka kam ye hota he ke replace me hm 2 chizen dety he ak wo jisko replace krna he yani jiski jga koch
//lana ho or dosra wo jisko phly waly ki jga pr replace krna he or jisy replace krna he osy /javascript/ /<= 
// ye dalengy or /g g bhi likha hota he
// function casee(namee:string ):string {
//     return namee.replace(/javascript/g , "typescrip")
// }
// console.log(casee("javascript is a good lenguage"));
//********************************************************************************* */
//29
// index of ko ko jb value mil jati he to wo index no return krta he or nhi milti to -1 to kha hmny index of ko kha 
//code ko dhondo or argument me hmny faiza pass kiya osko nhi mila to osny -1 retun krwa diya
// function index(name:string) {
//     return name.indexOf("code")
// }
// console.log(index("code"));
//*********************************************************************************** */
//include dhondta he ke majood he value ke mhi mil jati to true deta na milti to false
// function includee(name:string) {
//     return name.includes("code")
// }
// console.log(includee("code"));//true
// console.log(includee("faiza"));//false
//********************************************************************************** */
//subtracting me jitny number hm pas krty hen wo stat sy otny no ko kat deta he baqi print kr wa deta he
// function substringg(name:string):string {
//     return name.substring(5)
// }
// console.log(substringg("I love using javascript"));
//*********************************************************************************** */
//30 day
//simplw math.rount value ko round kr deta he agr . ke bad wali value 5 ya osy bari ho wrna nhi
// function round(num :number):number {
//     return Math.round(num)
// }
// console.log( round(5.6))
//*********************************************************************************** */
// ismy parseFloat or parseInt ye dono string ko convert kr dety hen number me lekinparseInt normal number "1234"esy or 
//parseFloat decimal number "1234.67" agr hm decimal ko parseInt sy convert kry gy to phir 1234 dega bs . ke bad wali ni
// function perseint(name:string):number {
//     return parseFloat(name)
//         //parseInt(name)
// }           
// console.log(perseint("1234.67"));
//************************************************************************************ */
//isNaN ye krta he ke not a number yani number nhi he agr value string me hogi to and tru krey ga ke hn is not a number 
//agr number hoto false ke ye namber he or nan ka matlb number nhi hona chiye
// function nan(na:any):Boolean {
//     return isNaN(na)
//         //parseInt(name)
// }           
//output true
// console.log(nan("aliza"));
//************************************************************************************** 
//31 day 
// let fruit =[ "apple " , " banana", "mango"]
// fruit.push ("graps")
// console.log(fruit);
//************************************************************************************** */
//ismy ye he ke agr hm array likh kr pop krwaygy to wo last wali value ko hta dega or prin baqi bachi hoi values ko krwa dega
//or agr yehi kam hm ak array bna kr or ak function me rakhy gy or PARAMETER ME ARRAY PASS krengy or return pop krwaygy to 
//wo pop wali yani jo value delet hoi he osko pring krwayga
// let fruit =[ "apple " , " banana", "mango"]
// function name(arr:string[]) {
// return arr.pop()
// }
// console.log(fruit);
// console.log(name(fruit));
//******************************************************************************** */
//ismy bs hmny bnanan ka indexof chq kiya he or khav he ke agr wo -1 ke braber na ho to oski jga pr yani replace krdena
//chary ko or osny kr diya kioky -1 jb ata he jb indexof ko value array me na mily                                                  
// function indexof(arrr:string[]) {
//    const index = arrr.indexOf(" banana")
//    if (index !== -1){
//     fruitk[index]="chary"
//    }
// }
// let fruitk  =[ "apple " , " banana", "mango"]
//  indexof(fruitk);
//    console.log(fruitk);
/************************************************************************************** */
//32 day 
//map ko use kiya or lenth maloom ki
// let arry = [ "1234" , "dsks", "qgew"]
// let returnn = arry.map((p: any)=>p.length);
// console.log(returnn);
// console.log(arry);
//******************************************************************************* */
//filter ka method use kiya
// let num_array = [ 1 , 5 , 6 , 11, 12 , 13]
// let filterr = num_array.filter(p=> p > 10)
// console.log(filterr);
//********************************************************************** */
//reduce ka method use kiya he reduce ye krta he ke osky arrow function me agr hm 2 prameter den or osy + krwa den to wo 
//khd hi pory array ko + kr deta he 
// let num_array = [ 1 , 5 , 6 , 11, 12 , 13]
// let reduse = num_array.reduce((p , e ) => p + e);
// console.log(reduse);
//************************************************************************************************* */
//33 day  DD-MM-YY yani date month or years lana he date object ki madad sy
//string is liye likha he ke paddstart string pr hi appaly hota he bs
// function DD_MM_YY() {
// let  now = new Date()
// let day = String(now.getDate()).padStart(2,"0")
// let month = String(now.getMonth()).padStart(2,"0")
// let year = now.getFullYear() 
// return ` ${day}-${month}-${year}`
// }
// console.log(DD_MM_YY());
//********************************************************************************* */
//ismy kha tha ke pta kren ke next year any me kitny din baqi hen
// let today = new Date
// let newyear = new Date (today.getFullYear()+1 , 0 ,1)
// let diff = newyear.getTime()-today.getTime()
// let days = Math.ceil (diff/(1000 * 60*60*24))
// console.log("remaning days comming soon after ",days ,days);
//********************************************************************* */
// let full_date = new Date()
// let bir_year = full_date.getFullYear()
// let days = full_date.getMonth()+6
// let date = full_date.getDate()+3
// let datofbirth = `${date}-${days}-${bir_year}`
// console.log(datofbirth);
//********************************************************************************** */
//34 day 
//math.sqrt sy hm squre maloom krty hen no ka
// let squre_root = 144
// let root = Math.sqrt(squre_root)
// console.log(root);
//******************************************************************************** */
//randon 0 . 5788799 esy no deta he khod phir hm kisi bhi no sy osy multiply krty hen to wo 0 ki jga wo no de deta he 
// or math. ceil ya math. floor .ke bad waly numbers ko hta dety hen Math. floor (Math.random())*3 yesy bhi likh skty hm
// let randomm = Math.random()*3
// let floor =Math.floor(randomm)
// console.log(randomm);
// console.log(floor);
//************************************************************************************ */
//math.abs ke ander hm koch bhi math ka kam krwa skty hen + - * koch bhi or ye sign bhi note krta he jesy - - + hota he
// let abbs = Math.abs(-87-78)
// console.log(abbs);
//************************************************************************************ */
//35 day
//ismy kha tha ke randon number generate kren or koi trivk use kren ke ans true ya false me ay to meny ey krdi ak function sy 
//or ak if else sy 
// let randomm = Math.floor(Math.random())
// if(randomm > 0.5){
//     console.log(true);
// }else {console.log(false);
// }
// console.log(randomm);
// function true_false():boolean {
//     return Math.random() < 0.5
// }
// console.log(true_false());
//************************************************************************************ */
//gernerate krny ko kha he hex colour code
// let mycolour ="#"+Math.floor(Math.random()*0XFFFFFF).toString(16).padStart(6,"0")
// console.log(mycolour);
//ismy hmny hex color code generate kiya he khod sy
//*************************************************************************************** */
//ismy kha tha ke 1 sy 6  tk hi numbers any yani (dice) chiye ns zada na km to randam ko jb bhi log krwao to wo alag number deta he 
//hmny *6 kiya matlb wo 6 sy oper nhi jayga floor ke zariye .ke bad ki values ko hta diya or + 1 isi liye likha ke jb 
//0 ay to + 1 ho jay or ans 1 ay kioky 0 1 sy chota ho jayga joky ak dice me nhi hota
// let randam_dice = Math.floor(Math.random()*6)+1
// console.log(randam_dice);
//********************************************************************* *
//******************************************************************** */
//********************************************************************** */
//38   , 49.2 , 49.3 
//*************************************************************************** */
//36 day
//ye bhi nichy waly ki terha he bs old or new year dekr triki kr diya he swal
// function compare(year:number) : boolean{
//     return year % 4 === 0 && year % 100 !== 0 
// }
// console.log(compare(2020));
// console.log(compare(1900));
//************************************************************************* */
//inmy kha ke ak condtion cheq kren logical operator ke zariye or ans true false me ata jb condition cheq ka bolen 
//or kha ke koi esa no jo 2 sy bhi devide ho or 3 sy bhi pr remander koch na bachy to hmny 12 diya jo braber he 0 yani 0 
//remender or 3 ke bhi table me ata he to wo bhi 0 hoga but 14 2 ke liye to 0 hoga but 3 ke liye ni or && me dono ka 
//same hona lazmi  he to ans false ayga or phly waly ka true
// function module(devide:number):boolean {
//     return devide % 2 === 0 && devide % 3 === 0
// }
// console.log(module(12));
// console.log(module(9));
//******************************************************************************* */
//ismy kha ke 2 string likhen jo === hon or ak me na hon but case ka khyal nhi rakhen to meny phly kh diya ke jo bhi 
//ay wo lowercase ho jay dono me taky case ka frk sy ans chang na ho
// function string(casee:string,casee1 : string):boolean {
//     let a=casee.toLowerCase()
//     let b=casee1.toLowerCase()
//     return a === b
// }
// console.log(string("faiza","FAIZA"));
// console.log(string("faiza","faiz"));
//******************************************************************************** */
// //37 day ismy bs hourse ko data obj sy if me use krna tha gethours 24 ghanty consider krta he abhi rat ke 3 bjry he yni osky hisab sy 15 
//bajry hen to 12 sy bara hoto goodnight de diya
// let hourse =new Date()
// let iff = hourse.getHours()
// if (iff > 12) {
//     console.log("good night");
// }
//****************************************************************** */
//if & else chan with grades
// function if_else(score : number) {
//     if (score <= 100) {
//         console.log( "you gate A Grade");
//     }
//     if (score <= 90) {
//         console.log( "you gate B Grade");
//     }
//     if (score <= 80) {
//         console.log( "you gate C Grade");
//     }
//     if (score <= 70) {
//         console.log( "you gate D Grade");
//     }
//     if (score <= 60) {
//         console.log( "you gate F Grade");
//     }
// }
// if_else(100)
// if_else(85)
//******************************************************************************************* */
//if _else chain with ages
// function iff_else(age:number) {
//     if (age <= 13) {
//         return "child"
//     }
//     if (age > 13 && age < 19) {
//         return "teenager"
//     }
//     if (age >=20) {
//         return "older"
//     }
// }
// console.log(iff_else(2));
// console.log(iff_else(17));
// console.log(iff_else(25));
//**************************************************************************************************** */
//38 days 
// //map object bnana he
// let mapp = new Map([
//     ["pakistan","islamabad"],
//     ["india","dehli"],
//     ["america","zalni"]
// ])
// //yaha or keys add krwani he or map me add . set sy hoti he jesy
// mapp.set("usa","washington")
// mapp.set("france", "paria")
// console.log(mapp)
//************************************************************************************** */
//map. has or .get ka use krna he
// let  maap =new Map([
//         ["pakistan","islamabad"],
//         ["india","dehli"],
//         ["america","zalni"]
//     ])
//.get me keys likhna prhrti he or pring value hoti he
// console.log(maap.get("pakistan"));
// console.log(maap.get("india"));
//.has me bhi keys deni hoti hen or wo cheq krta he ke osmy ye key he to true or wrna false wo chek krta he include ki trha
// console.log(maap.has("islamabad"));
//*************************************************************************************** */
//ismy for each or for map ka use kha he
// let  maap =new Map([
//         ["student","faiza"],
//         ["id","457"]
//     ])
//for each wesy hi ak error func leta he but ismy jo chiz hm phly likhty hen wo value hoti he or jo badme likhty hen wo keys jesy nichy
//agr hm log me v print krwaygy to vo key print kryga or k krwaygy to wo value print kryga to value hongi yani olta
// maap.forEach((k,v)=>{
//     console.log(v,k);
// })
//for of me hm koi bhi nae dekr agr 0 likhengy to wo keys dega agr 1 likhengy to value agr srif name to dono
//or iska ak or taria he ke hm ak array me do name de den jb phla name print krengy to value or 2 name print krengy to value
//  for(let x of maap){
//     console.log(x);
//  } 
//  for(let [x , y] of maap)  {
//     console.log(y);
//  }
//********************************************************************** */
//39 days
//swich statment with week
//  let week = 7
//  switch ( week) {
//     case 7:console.log("sunday");
//         break;
//         case 1:console.log("monday");
//         break;
//         case 2:console.log("tuesday");
//         break;    
//         case 3:console.log("wednesday");
//         break;
//         case 4:console.log("thursday");
//         break;
//         case 5:console.log("friday");
//         break;
//         case 6:console.log("saturday");
//         break;
//  }
//****************************************************************** */
//
//swich statment with week
//  let weather = 4
//  switch ( weather) {
//     case  12 :
//         case  1:
//             case  2:
//         console.log("winter");
//         break;
//     case  3 :
//         case  4:
//             case  5:
//                 console.log("spring");
//                 break;
//     case  6 :
//       case  7:
//          case  8:
//                         console.log("summer");
//                         break;
//     case  9 :
//          case  10:
//             case  11:
//                 console.log("fall");
//                 break;
//      default :
//      console.log("invalid month");
//        break ;
//  }
//****************************************************************************** */
//swich statment me hm esy bhi de skty hen 3  4 case ka ak hi console log yani && use krny ki need hi nhi he
//  let week = 7
//  switch ( week) {
//     case 7:console.log("sunday");
//         break;
//         case 1:console.log("monday");
//         break;
//         case 2:console.log("tuesday");
//         break;    
//         case 3:console.log("wednesday");
//         break;
//         case 4:console.log("thursday");
//         break;
//         case 5:console.log("friday");
//         break;
//         case 6:console.log("saturday");
//         break;
//  }
//****************************************************************** */
//swich statment or ismy default valuse chlni chiye thi
//  let weather = 13
//  switch ( weather) {
//     case  12 :
//         case  1:
//             case  2:
//         console.log("winter");
//         break;
//     case  3 :
//         case  4:
//             case  5:
//                 console.log("spring");
//                 break;
//     case  6 :
//       case  7:
//          case  8:
//                         console.log("summer");
//                         break;
//     case  9 :
//          case  10:
//             case  11:
//                 console.log("fall");
//                 break;
//      default :
//      console.log("invalid month");
//        break ;
//  }
//************************************************************************************* */
//40 day
// for (let i = 1; i <= 10; i++) {
//    console.log(i);
// }
//************************************************************************************** */
// let ans = 1
// while (ans===1) {
//     console.log("hello world");
//     ans = 2
// }
//************************************************************************************* */
//for off bhi foor loop ki trha kam krta he yani print krta he hmy ismy ak varible bna ke osy osy of likh kr array ke orignal
//name dety hen or phir variable ka anme print krwaty hen yani of likha hota aham kioky ye he hi for of
// let fev_fruit =["mango","apple","banana"]
// for(let fruiet of fev_fruit){
//     console.log(fruiet);
// }
//*********************************************************************************** *//
//41 day
//yaha pr kha tha ke for loop me 10 tk print krway lekin 5 nhi ana chiye
// for (let i = 1; i <=10 ; i++) {
//  if (i < 5) {
//     console.log(i);
//  }else if (i>5){
//     console.log(i);
//  }
//yaha meny likha he ke jb m 5 ke braber ay to continue krdena rokna nhi print krwany
// for (let m = 1; m <=10; m++) {
//      if (m === 5) {
//         continue;
//      }
//     console.log(m);
// }
//**************************************************************************************** */
// ismy ye kha he ke loop chlaen esa ke 10 sy start ho or 5 pr rok jay or jha tk phoncha wha sy wo phir sy incrimint ho jay
//to hmny 10 ke braber kr diya or kha ke 0 sy jb tk bara ho loop chly or 5 pr rok jay if ki condition me kha or kioky 
//variable 10 ke braber tha to 10 sy start howa 5 tk phoncha rok gya or phir incriment howa 10 9 8 7 6 5 
// let array : any = 5
// while (array > 0) {
//     if (array === 5) {
//         break;
//     }
//    console.log(array);
//    array--
// }
//******************************************************************************************* */
//ismy kha tha ke loop chlay is trha ke vovel words ay to  ak vovel word print  ho or loop wahi rok jay
// na ay to ho jay to meny func bnaya 
//phir ak variable jismy vovel words rakh diye or phir loop hlaya osmy bs ye yehi kiya ke jo of krky foorof loop 
//me krty hen or function ke perameter ke braber kr diya  phir if condition chlai ke wovel word ay phla  to 
//breack krdena wrna
// or ak sms print krwana sath or wo vovel word bhi sath lekin lopp bhi rok dena agy nhi brhna
//nhi or phir func call krwayaa or osmy ak vovel word wla diya or ak me bina vovel wla 
// function vovel_words (vol:string) {
//     let char ="aeiouAEIOU"
//     for (const words of vol) {
//         if (char.includes(words)){
//             console.log(`first vovel : ${words}`);
//             break ;
//         }
//        console.log(words);
//     }
// }
//     vovel_words("hgyt")
//     vovel_words("eahj")
//***************************************************************************************** */
//42 day
// let objj={
//     name : "faiza ",
//     fuun : function() {
//                return  this.name 
//               }, 
// }
// console.log(objj.fuun());
//************************************************************************************* */ 
//simple objct me tis ka use krna he
// function namee() {
//     let obj = {
//         name : "faiza ",
//         id : 178,
//         class : 11,
//        fun : function() {
//         return ` ${this.name} , ${this.id} ,  ${this.class}`
//        }, 
// }
// console.log(obj.fun());
// }
// namee()
//**************************************************************************************** */
//nested function ka use kiya he yaha bs obj agr fun ke sath ho to osy .krky bhi call krwa skty hen agr log fun ke ader
//ho choka he to
// const nested_fun = {
//     property : "value",
//     obj_fun : function () {
//         console.log(this.property);
//         let fun_fun = ()=>{
//             console.log(this.property);
//         }
//       fun_fun()  
//     }
// }
// nested_fun.obj_fun()
//********************************************************************************** */
//43 day
//traditional wo fun hota jo khod call na ho skta ho variable ke zaria jesy arrow 
//fun hota he but ho wo function hi bina name ka
// let traditional= function () {
//     return "nimra"
// }
// console.log(traditional());
// let arrow = ()=>{
//     return "faiza"
// }
// console.log(arrow());
//**************************************************************************** */
//ismy bs ye ke arrow fun bnay jo zada numbers leta ho yani rest parameter ki bat hori
//reduce 2 parameter leta he phir osky bich me * - koch bhi lga do or argument jitny bhi dedo wo sb ko + * krdeta he
// let arrow = (...array :number[])=>{
//     return array.reduce((e:any,f:any)=>e*f)
// }
// console.log(arrow(2,3,4,5,6));
//***************************************************************************** */
//ismy ye btaya ke ak object me arrow function  this .krky property acces ni krta error deta he jbky dosra func kr 
//let he
// let obj= {
//     value: "valuse",
//  traditional:function () {
//     console.log( this.value);
// },
//  arrow : ()=>{
//     console.log(this.value);
// }
// }
// obj.traditional();
// obj.arrow();
//********************************************************************************************* */
//44 day
// export  default function exportt(){
//     return "faiza"
// }
//***************************************************************************************** */
//ismy hmny class ko normal tariky sy export kiya he lekin class ko jo sir ne btaya tha oop me
// export  class person {
//     name : string ;
//     constructor(name1 : string) {
//         this.name = name1
//     }
//     greet(){
//         console.log(`my name is ${this.name}`);
//     }
// }
//********************************************************************************************* */
//  let myname = " faiza"
//  export default myname
// export let myage = 18
//****************************************************************************************** */
//45 day
// java ke obj ko chang krna  he jeson me or ans jeson ki trha ayga jesy key or valluse dono " "is mee" name": "faiza"
// let obj={
//     name: "faiza",
//     age : 18,
//     id : 213
// }
// let json_convert = JSON.stringify(obj)
// console.log(json_convert);
//**************************************************************************************************** */
//jeson ke triky sy likh kr jawa me chang krna he
// let jsonn : any={
//     "name": "faiza",
//     "age" : 18 ,
//     "id": 1234
// }
// let jawa_convert  = JSON.parse(jsonn)
// console.log(jawa_convert);
//********************************************************************************************** */
//stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string
//yani stringify obj ke agrument ke ilawa oper wali chizen bhi le skta he 
//but ans me koi farq nhi prhata
// let obj={
//     name: "faiza",
//     age : 18,
//     id : 213
// }
// let json_convert = JSON.stringify(obj, null, 2, )
// console.log(json_convert );
//******************************************************************************************* */
//day 46
// for (let i = 0; i <=5 ; i++) {
// console.log(`${i}`,i);
// }
// //agr hm loop me esy ak i ${ }ismy or dosra esy print krwaygy to ans esy ayga nichy dekhen ak trha sy isy debug khengy
// 0 0
// 1 1
// 2 2
// 3 3
// 4 4
// 5 5
//****************************************************************************************** */
//error handle ka ak trika try ke ander ye ak key he  ()key =throw new Error( ye use krny sy bhi hota he simple
// he error hoga to ye sms sath print hoga otherwisee srif sms pring ho jay ga
// try{
//     throw new Error("somthing went wrong");
// }catch(error : any){
//     console.log(error.message);
// }
//******************************************************************************************* */
//ismy ak log simble krwaya he or ak breat krky yani break poin khlata he yani enter krky sms likha he 
// console.log("i am a girls");
// console.log(
//     "i am a boy "
// );
//******************************************************************************************* */
//47 day
//reserver words jo hon typescript me jinka name ho or onka faiza bhi esy 3 chizen likhen
// function special(name : string , age : number) {
//     console.log(name , age);
// }
// special("faiza", 18)
// special("nimra ", 19)
// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }
// if (true) {
//     console.log("my name is faiza");
// }
//************************************************************************** */
//inho ne kha koi reserver word ko variable ka name bna kr lihen to wo error dega jo syntex error khlayga to if to khod 
//ak reserve variabe he jesy if_else
// let if = "faiza"
//****************************************************************************** */
//inho ne kha async function ya kisi me bhi await ka use btaen ke wo kiya krta he wo intazar krtaa he
// async function awaitt(){
//     const  myname = await "api data "
//     console.log(myname);
// }
// awaitt()
//************************************************************************************ */
//48 day 
//48 ke dono quation me ak me then or ak me catch ka kha he meny dono sath kr diye promis ke
// let ab = new Promise((resolve, reject) => {
//     let data = ""
//     if (data) {
//       setTimeout(() => {
//         resolve ("data a gya")
//     }, 2000); }else{
//         reject("data nhi aya")
//     }
// })
// ab.then((a)=>{console.log(a);
// }).catch((b)=>{console.log(b);
// })
//******************************************************************************************** */
//proms.all ka btaya he ....promise. all ye krta he ke hm alag alag kism ke promis bna yr ya varia koch bhi bna kr
//promise.all krky ak array me de dety hen to wo sbko mila deta he he yani hm isy koch bhi chizen milany ke liye use 
//kr skty hen 3 variable bnay osy mila diya ya 3 promis ya 3 fun koch bhi
// let promis1 = Promise.resolve(3)
// let promis2 = 42 
// let promis3 = new Promise((resolve)=>{
//     setTimeout(resolve ,  1000 , "foo")
// })
// Promise.all([promis1 , promis2 , promis3]).then((ab)=>{console.log(ab);
// })
//****************************************************************************************** */
//49 day 
//callback function  //callback ka simple ye he ke normal wala fun bnay gy bs parameter me wo ak function receive kry ga or call bhi wo osi 
//fun me hoga parameter wala or simple fun ke argument me ak arrow fun passs krdengy jisko simple func me call krwaya tha just
// function orignal(ab :()=>void) {
//    setTimeout(() => {
//     console.log("faiza");
//    }, 1000);
//     ab()
// }
// function second(ab :()=>void) {
//     setTimeout(() => {
//         console.log("nimra");
//        }, 2000); 
//        ab()
// }
// function third(ab :()=>void) {
//     setTimeout(() => {
//         console.log("aliza");
//        }, 3000); 
//        ab()
// }
// orignal(()=>{second(()=>{third(()=>{console.log("complete");
// })})})
//******************************************************************************************** */
// ismy kha tha ke ak array ho jismy number hon or phir ak filter method lgay jo callback receve kre or callback num retern kry jo 5 sy bra ho
//or filter array pr apllay ho
// let array6 :any= [1 ,3 ,6 ,8 ,9 , 10]
// function orignal(num : number) {
// return num>5
// }
// let call_with_filter = array6.filter(orignal)
// console.log(call_with_filter);
//********************************************************************************************* */
//ismy error handling ki he ismy user ka jo ans ata he agr ghalat ho to wo direct rror print kr deta he ans nhindikhata
//ismy hmny ye kiya he ke ak func bnaya he jo ak or func leta he yani callback fun hogya he ander wala fun 2 argument leta he data or error
//ke name he or error ki data type ak errror obj he or data ki string yani api data sring me hoga phirhmny do variable bnay ye bs iis liye hen 
//chizen store krky osy koi name deny ke liye phir error ke variable me obj error rakh diya or dta me api dta p hmny ak condition lgai main fun
// me ke math.random sy num diy or agr number 0.5 sy bara hoga  to data print hoga or agr chota hega  to program roky ga nhi blky
//error obj osy handle kryga or message print krdega phir mny main data ko call krwaya jo ke ak callback fun leta he or osy 2 parameter bhi 
//chiye to wo bhi likhe or phir osmy bhi ak if elsy likh diya jimy hmny data ko to normal kha ke error na ho to krwadena deta but if me hmny 
//likha ke agr error ay to error. message krwana iska matlb he ke error object jo he wo error ko jb handle krta he to osky pas 2 keys value hoti
//hen ak name ki errr ke or ak message ki to hmny kha bs arror.message krwana  
//
// function apidataa(caalback:(error :Error | null, data? : string)=>void) :void{
//            let error = new Error ("FAILED API DATA")
//            let data ="some data"
//            if (Math.random()> 0.5) {
//             caalback(null,data)
//            }else{
//             caalback(error)
//            }
// }
// apidataa((error, data )=>{
//     if (error) {
//         console.error(error.message);
//     }else{
//         console.log(data);
//     }
// })
//********************************************************************** */
//50 day 
// setTimeout(() => {
//     console.log("faiza");
// }, 1000);
//*************************************************************************** */
//event loop asyncronus ko bs handle krta he setttimeout me agr second 0 bhi hongy to bhi wo bad me hi chly ga syncronus ke
// console.log("333");
// setTimeout(() => {
//     console.log("1111");
// }, 0);
// console.log("2222");
//************************************************************************************************************** */
//asyn or syncronus me bara fark ka bola he matlb wali ke asyn age waly code ko apni waja sy nhi rokta jbky syn ka loop rok deta he
console.log("befora syncronus");
for (let i = 0; i <= 1000; i++) {
    console.log(i);
}
//ab loop jb tk khatm ni hoga agy ka code run nhi hoga
console.log("after syncro");
console.log("before asyn ");
setTimeout(() => {
    console.log("faiza");
}, 1000);
export {};
// //jbky ismy sary code run ho jaygy phir wo hoga but set kisi ko rokyga nhi
// console.log("after asyncronus");
//************************************************************************************* */
//day 51
//only read artical
//day 52 same 51
// console.log(+2);
// console.log(6-"4");
//************************************ */
//repeat method bs string ke liye hota he ke 3 bar likh deta he jesy //output 100100100
// let data :any = "100"
// console.log(( data as string).repeat(3));
//**************************** */
//# sourceMappingURL=cooding.js.map