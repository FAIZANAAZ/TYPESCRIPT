//string me sb koch " " me likhty hen 

let user_name :string= "FAIZA"
console.log(user_name);

//number me hm " " use nhi krty or jo bhi likhy gy sbka number hona lazmi he

let user_id :number= 1234
console.log(user_id);

//boolean hm wha use krty hen jha ans srif 2 condition me ana ho jesy true/fluse 

let user_login :boolean= true
console.log(user_login);

//any me hm koi bhi type me likh skty hen srting  ,number ,array, boolean koch bhi de skty hen any me
let flexiblevalue:any;

flexiblevalue = 55
console.log(flexiblevalue);

flexiblevalue = "faiza"
console.log(flexiblevalue);

flexiblevalue = true
console.log(flexiblevalue);

//undefined jb hmy pta hi na ho ke value kiya assign krni  hen to hm oski data type undefine rakh dety hen
let X : undefined = undefined
console.log(undefined);

//unknown jb hmy pta na ho ke user jo input de ga wo konsi type me dega
// wo numbeer bhi de skta he string ya koch bhi

let user_input :unknown
user_input = "ten"
console.log(user_input);

user_input = 10
console.log(user_input);

//bigint is me hm bhut bary bary no rakhty hen 100000 ye businees wagera ki financial data ke liye 
//oe end me n lagya lazmi he jesy 10000n
let bignumber:bigint= 10000n

console.log(bignumber);

//symbol ismy hm 2 variabe ko ak  jesi 
//value de skty hen lekin wo ak dosry ke braber nhi hongi

let key1 = Symbol("key");
let key2 = Symbol("key");
console.log(key1===key2)//wesy to ye braber hen but kioky symbol me hen to ans fluse ayga

//null ye bhi jb rakhty jb hmary pas koi variable ki value na ho 
let result :null =null;
console.log(result);
//
