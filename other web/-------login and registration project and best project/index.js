let sign_up_btn = document.getElementById("sign-up-btn")
let sign_up_section = document.getElementById("sign-up-section-id")
let sign_in_section = document.getElementById("sign-in-section-id")
let sign_in_btn = document.getElementById("sign-in-btn")



sign_up_btn.onclick = ()=>{
    sign_in_section.style.left = "200px"
    sign_up_section.style.right="-450px"
}
sign_in_btn.onclick = ()=>{
    sign_in_section.style.left = "-450px"
    sign_up_section.style.right="150px"
}

// // let login_main_btn = document.getElementById("iogin-main-btn");

// // login_main_btn.onclick= () =>{
// //     if(document.querySelector('input[type="checkbox"]:checked')){
// //         alert("rtvhj")

// //     }
// //     else{
// //          alert("its work")
//     }
// }
// --------------------error-massage-section---------------

let login_main_btn = document.getElementById("iogin-main-btn");
let first_page = document.getElementById("first-page")



let error_1_email_input = document.getElementById("email-1-email-input");
let error_1_pass = document.getElementById("email-1-error");
let error_1_pass_input = document.getElementById("error-1-pass-input");
let pass_1_error = document.getElementById("pass-1-error");


let c_box_message = document.getElementById("c-box-message")

login_main_btn.onclick = ()=> {
   if(error_1_email_input.value != "msmia01925@gmail.com" ){
      error_1_pass.innerHTML = "please enter your valid email"
   }
  
   else if(error_1_pass_input.value != "msmia"){
       pass_1_error.innerHTML="please enter your password"
       
   }
   
      
   
   else{
      first_page.style.display = "none"
      document.getElementById("wellcome-section").style.left = "50%"
      

   }
}

// -----------password hedden section----------

let eye = document.getElementById("eye");
let hide_eye = document.getElementById("hide-eye");




eye.onclick = ()=>{
    if(error_1_pass_input.type === 'password'){
       error_1_pass_input.setAttribute("type","text")
       eye.style.display = "none"
       hide_eye.style.display = "block"

      
        
    }
    else{
        error_1_pass_input.setAttribute("type","password")
        

    }
}


hide_eye.addEventListener("click",function(){
    if(error_1_pass_input.type === 'text'){
        error_1_pass_input.setAttribute("type","password")
        eye.style.display = "block"
        hide_eye.style.display = "none"
 
       
         
     }
     else{
         error_1_pass_input.setAttribute("type","text")
     }
         
})

// --------------------for secound password---------

let error_2_pass_input = document.getElementById("error-2-pass-input");


let eye_2 = document.getElementById("eye-2");
let hide_eye_2 = document.getElementById("hide-eye-2");

hide_eye_2.style.display = "none"


eye_2.onclick = ()=>{
    if(error_2_pass_input.type === 'password'){
        error_2_pass_input.setAttribute("type","text")
       eye_2.style.display = "none"
       hide_eye_2.style.display = "block"

      
        
    }
    else{
        error_2_pass_input.setAttribute("type","password")
        

    }
    
}


hide_eye_2.addEventListener("click",function(){
    if(error_2_pass_input.type === 'text'){
       error_2_pass_input.setAttribute("type","password")
        eye_2.style.display = "block"
        hide_eye_2.style.display = "none"
 
       
         
     }
     else{
        error_2_pass_input.setAttribute("type","text")
     }
         
})


// ------------------------  for-confirm password----------
let error_2_con_pass_input = document.getElementById("error-2-con-pass-input");


let eye_3 = document.getElementById("eye-3");
let hide_eye_3 = document.getElementById("hide-eye-3");

hide_eye_3.style.display = "none"


eye_3.onclick = ()=>{
    if(error_2_con_pass_input.type === 'password'){
        error_2_con_pass_input.setAttribute("type","text")
       eye_3.style.display = "none"
       hide_eye_3.style.display = "block"

      
        
    }
    else{
        error_2_con_pass_input.setAttribute("type","password")
        

    }
}


hide_eye_3.addEventListener("click",function(){
    if(error_2_con_pass_input.type === 'text'){
        error_2_con_pass_input.setAttribute("type","password")
        eye_3.style.display = "block"
        hide_eye_3.style.display = "none"
 
       
         
     }
     else{
        error_2_con_pass_input.setAttribute("type","text")
     }
         
})




// // ------------------error-message-section-2--------------

let reg_btn = document.querySelector (".btn1-res")

let error_2_name_input= document.getElementById("error-2-name-input")
let full_name= document.getElementById("full-name")
let error_2_phone_number = document.getElementById("error-2-phone-input")
let phone_Number = document.getElementById("phone-n")
let error_2_email_input = document.getElementById("error-2-email-input")
let reg_email = document.getElementById("reg-email")
let error_2_pass  = document.getElementById("error-2-pass-input")
let reg_pass_h5 = document.getElementById("reg-pass-h5")
let error_2_con_erorr_pass  = document.getElementById("error-2-con-pass-input")
let reg_con_pass_h5 = document.getElementById("reg-con-error")


reg_btn.addEventListener ("click",function(){
    if(error_2_name_input.value === ""){
        full_name.innerHTML = "Enter your full name"
    }
    else if(error_2_phone_number.value === ""){
        phone_Number.innerHTML = "Enter your phone number"
        full_name.innerHTML = ""
    }
    else if(  error_2_email_input.value === ""){
        reg_email.innerHTML = "enter your valid gmail Account"
        full_name.innerHTML = ""
        phone_Number.innerHTML = ""
    }
    else if (error_2_pass.value === ""){
        reg_pass_h5.innerHTML ="enter password"
        full_name.innerHTML = ""
        phone_Number.innerHTML = ""
        reg_email.innerHTML=""
    }
    else if (error_2_con_erorr_pass .value != error_2_pass.value){
        reg_con_pass_h5.innerHTML = "password not match" 
        reg_pass_h5.innerHTML =""
        full_name.innerHTML = ""
        phone_Number.innerHTML = ""
        reg_email.innerHTML=""
    }
    else{
        reg_con_pass_h5.innerHTML = "" 
        reg_pass_h5.innerHTML =""
        full_name.innerHTML = ""
        phone_Number.innerHTML = ""
        reg_email.innerHTML=""

        sign_in_section.style.left = "200px"
        sign_up_section.style.right="-450px"
    }
})

// --------------------for dark Section------------------------

let setting = document.getElementById("for-dark")
let dark_color = document.getElementById("for-color")

setting.onclick = () =>{
    dark_color.classList.toggle("active")
    
}

let moon = document.getElementById("moon");
let sun = document.getElementById("sun");


moon.onclick = () =>{
    sign_in_section.style.background = "rgba(21, 20, 20, 0.645)"
    sign_up_section.style.background = "rgba(21, 20, 20, 0.645)"
    moon.style.color = "black"
    sun.style.color = "#fff"
    // setting.style.background = "rgba(21, 20, 20, 0.645)"
    
}
sun.onclick = () =>{
    sign_in_section.style.background = " rgba(0, 123, 255, 0.764)"
    sign_up_section.style.background = " rgba(0, 123, 255, 0.764)"
    moon.style.color = "#fff"
    sun.style.color = "black"
    // setting.style.background = "rgba(0, 123, 255, 0.764)"
    
}
