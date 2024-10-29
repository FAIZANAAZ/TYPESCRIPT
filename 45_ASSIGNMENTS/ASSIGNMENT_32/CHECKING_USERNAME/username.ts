let current_user : string[] = ['FizA','SaaD','AlisHba','SaMeer','AlIna'];

let new_user:string[]=['Fiza','Hoor','Fabiha','Nida','SaaD'];

new_user.forEach(newusername => {
   let lowerCase :string = newusername.toLowerCase();

   if(current_user.map(C_name=>C_name.toLowerCase()).includes(lowerCase)) {
    console.log (`The username ${newusername} is not available .please write a different username`)

   }
   else{
    console.log(` The user name  ${newusername} is availale.`)
   }
})
