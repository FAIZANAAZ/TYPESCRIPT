import inquirer from  "inquirer"

let main_data :any= []
//while loop ko rokny ke liye condition ka variable bnaya he jb hm nichy jakr isy 
//false kr dengy to loop stop hojayga//

let condition =true
while(condition){
    let information =await inquirer.prompt([{
 name:"employ",
 type :"string",
 message : "whats is employ name"

    },

    {
        name:"id",
        type :"number",
        message : "whats is employ id"
       
           },

    {
        name:"sellery",
        type :"number",
        message : "whats is employ selerry"
           
               },
])


main_data.push(information)
console.log("\n\t","your ubdate information is");
console.log("\n\t",main_data);

let otheremploy=await inquirer.prompt([{
    name: "quation",
    type:"confirm",
    message: "you want to add more Employ data",
    default : true 

}])
if(otheremploy.quation===false){
    condition=false
    console.log("\n\t","your final list is :",main_data);
    
}}

let condition2= true  
     
while(condition2){
    let ubdate_list :any =await inquirer.prompt([{
    name : "edit",
    type : "confirm",
    message  : " Do you want to ubdate your Emplyees  list",
    default:true

}])

if (ubdate_list.edit===true){
    let choies:any=await inquirer.prompt([
{
    name:"ubdating",
    type :"list",
    message:"please select one option ",
    choices: ["Add","Delete","Edit"]

}

])

if(choies.ubdating==="Add"){
    let added :any= await inquirer.prompt([{
        name:"employ",
        type: "string",
        message:"what is  the name of new employ  added to the list"
    },
    {
        name:"id",
        type: "number",
        message:"what is  the id of new employ  added to the list"},

        {
            name:"sellery",
            type: "number",
            message:"what is  the sellery of new employ  added to the list"}
])
main_data.push(added)
console.log("\n\t","your  new ubdate list is");
console.log("\n\t",main_data);
}



if(choies.ubdating==="Edit"){
   


     let step  = main_data.map((item :any , index:any )=>{
  
        return { 
            name :`employ ${item.employ} ,id ${item.id} , sellery ${item.sellery }`,
            value : index
        }

     })

     let select  =await inquirer.prompt([{

        name:"it",
        type :"list",
        message :"which employ do you want to edit",
        choices : step

     }] )

      let item :any= await inquirer.prompt([{
        name:"delete",
        type: "list",
        message:"choose any one",
       choices  : ["Id","Name","Sellery"]
        
    },

    {   name:"new",
        type: "input",
        message:"enter the new value",
       
        
    },
])

switch (item.delete) {
    case "Name":main_data[select.it].employ=item.new;
        
        break;
    case "Id": main_data[select.it].id=Number(item.new);
    break ;

    case "Sellery":main_data[select.it].sellery=Number(item.new);
        break;
        
}

console.log("\n\t","your list after edit",main_data);



}

if(choies.ubdating==="Delete"){
   


    let step_by_step  = main_data.map((item :any , index:any )=>{
 
       return { 
           name :`employ ${item.employ} ,id ${item.id} , sellery ${item.sellery }`,
           value : index
       }

    })

    let select_employ  =await inquirer.prompt([{

       name:"delet",
       type :"list",
       message :"which employ do you want to delet",
       choices : step_by_step

    }] )

    if(select_employ.delet>= 0){
     let delet_employ =main_data.splice(select_employ.delet,1)
     console.log("\n\t","you delet",delet_employ );
     console.log("\n\t","your final list after deleted ", main_data);
     
     


    }
    
}}else (ubdate_list.edit===false);{
    condition2=false
    console.log("\n\t","your list is ready",main_data);
    
}}
