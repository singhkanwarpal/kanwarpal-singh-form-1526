// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>
let fullname=document.getElementById('fullname');

let email_id=document.getElementById('email');

let message=document.getElementById('message');

let submit=document.getElementById('submit-button')

// Declare variable that will 
// store regular expression for email
let regular_expression=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// console.log(input);
// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).



let fm = document.getElementById('contact-form');

function formValidator(ev){
    ev.preventDefault();

    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    
    let errors = [];
    let data = {};


    // +-----------+    
    // | FULL NAME |
    // +-----------+
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.
    if(fullname.value!==''){
        data.fullName=fullname.value;
    }
    else{
        errors.push('Please Enter your Full Name.');
    }

     // +-------+    
    // | EMAIL | 
    // +-------+
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.
    if(message.value!==''){
        data.message=message.value;
    }
    else{
        errors.push('Please Enter your Message.');
    }


    // +---------+    
    // | MESSAGE | 
    // +---------+
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.
    if(email_id.value!==''){
        data.email=email_id.value;
    }
    else{
        errors.push('Please Enter your Email ID.');
    }

    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
        if(errors.length!==0){
            console.log(errors);
        }

    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    else{
        console.log(data);
    }
    fullname.value='';
    email_id.value='';
    message.value='';

}

// Close your function here
    
// Register your form to "click" event.

fm.addEventListener('submit',formValidator);




    


   


    
    