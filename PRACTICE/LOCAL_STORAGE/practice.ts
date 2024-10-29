// localStorage ek aisi storage hoti hai jisme hum kisi bhi data ko save kar sakte hain aur use kar sakte hain.

// localStorage.setItem():
// (Data ko save karna) Yeh do cheezein leta hai: pehla "name" (data ka naam), aur doosra "value" (jo data rakhna hai).
// Is mein hum kisi bhi form se data mangwa kar store kar sakte hain.
// Example: Hum ek resume bana rahe hain aur form submit event use karke form par addEventListener laga kar kehte hain:


// localStorage.setItem("name", firstname.value);
// "firstname" matlab wo input field jisme user ka naam likha gaya hai, usko hum getElementById se get karenge pehle.
// Pehle hum input field ki value ko save karenge aur uska name rakhenge "name".
// localStorage.getItem():
// (Mangway hue data ko use karna)
// Yeh wahi "name" leta hai jis naam se data store kiya gaya tha setItem() mein.

// Example:

// let firstname = localStorage.getItem("name");
// Humne usko store kar liya ek variable mein.

// Jab bhi form submit ho, pehle wo "name" lekar aayega jahan data ko use karna hai.

// javascript
// Copy code
// let phlaname = document.getElementById("phlaname");
// phlaname.textContent = firstname;
          