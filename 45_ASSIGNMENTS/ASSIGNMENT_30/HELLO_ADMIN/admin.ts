//hello admin:make an array of five or more username, including the name'admin'.imagine 
//you ar writing code that will print a greeting to each user after they log in to a website
//loop through the array ,and print a greeting to each user:
//if the username is 'admin', print a special greeding(message) ,such as hello admin ,would
// you like to see a status report?
//otherwise ,print a message sach as Hello eric ,thank you for logging in again.




const persons_Name :string[]=['Admin','Alina','Shamir','Faiza','Hina']

for(let i=0; i<persons_Name.length; i++){
    if(persons_Name[i]==='Admin'){
        console.log(`Hello Admin , would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${persons_Name[i]},thank you for logging in again.`)
    }
}
 