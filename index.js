let thame = document.querySelector(".setting-section");
let thame_btn = document.getElementById("setting-btn");
let close_thame_btn =document.getElementById("setting-close-btn");
let web_scroll = document.getElementById("scroll-web");



// ==================================scroll-animation-part===========================
web_scroll.addEventListener("scroll" , function(){
    var scrolltopyes = web_scroll.scrollTop;
    var conformscroll =Math.floor(scrolltopyes);
    // console.log(Math.floor(scrolltopyes))

    if(conformscroll >=450){
        // console.log(conformscroll)
        document.querySelector(".progress-under-html").classList.add("pro-var");
        document.querySelector(".progress-under-css").classList.add("pro-var");
        document.querySelector(".progress-under-java").classList.add("pro-var");
        document.querySelector(".progress-under-boot").classList.add("pro-var");
        document.querySelector(".progress-under-j-q").classList.add("pro-var");
        document.querySelector(".progress-under-react").classList.add("pro-var");
    }
    
    else if (conformscroll <=450 || conformscroll >=850){
        document.querySelector(".progress-under-html").classList.remove("pro-var");
        document.querySelector(".progress-under-css").classList.remove("pro-var");
        document.querySelector(".progress-under-java").classList.remove("pro-var");
        document.querySelector(".progress-under-boot").classList.remove("pro-var");
        document.querySelector(".progress-under-j-q").classList.remove("pro-var");
        document.querySelector(".progress-under-react").classList.remove("pro-var");
    }
   
})

web_scroll.addEventListener("scroll" , function(){
    var scrolltopyes = web_scroll.scrollTop;
    var conformscroll =Math.floor(scrolltopyes);
    // console.log(Math.floor(scrolltopyes))

   if(conformscroll >= 1040){
      document.querySelector(".education").classList.add("pro-edu");
      document.querySelector(".experience").classList.add("pro-exp");
   }
   else{
    document.querySelector(".education").classList.remove("pro-edu");
    document.querySelector(".experience").classList.remove("pro-exp");
   }
})



web_scroll.addEventListener("scroll" , function(){
    var scrolltopyes = web_scroll.scrollTop;
    var conformscroll =Math.floor(scrolltopyes);
    // console.log(Math.floor(scrolltopyes))
   if(conformscroll >= 1800){
    document.querySelector(".services--items-all").classList.add("pro-ser")
   }
   else{
    document.querySelector(".services--items-all").classList.remove("pro-ser")
   }
  
})














// ============================thame-active------section====================


thame_btn.onclick = ()=>{
    thame.classList.add("active")
   
}
web_scroll.addEventListener("scroll" , function(){
    thame.classList.remove("active")
})
close_thame_btn.onclick = ()=>{
    thame.classList.remove("active");
}


// ===========================nav-active-section================


let nav_icon = document.querySelector("#nav-icon");
let side_nav = document.querySelector(".side-navber");



nav_icon.onclick = ()=>{
    
    side_nav.classList.toggle("active")
    nav_icon.classList.toggle("rotate-nav-icon")
}
web_scroll.addEventListener("scroll" , function(){
   
          side_nav.classList.remove("active")
    
  
   
})

// ===========================thame-color-active-section=======================

let color_thame_btn = document.querySelectorAll(".theme-btn");



color_thame_btn.forEach(color =>{
    color.addEventListener("click" , function (){
        let data_color =  color.getAttribute("data-color");
        document.querySelector(":root").style.setProperty("--change-color" , data_color);
    })
})

let nav_input = document.querySelector(".nav-input");

nav_input.addEventListener("click" , function(){
    nav_input.classList.add(".pro-nav-input")
})

// ===============================dark-mode-section========================

let dark_btn = document.querySelector("#dark-btn");
let moon = document.getElementById("moon"); 

let p_color =document.getElementById("p-color")

dark_btn.addEventListener("click" ,function(){
    dark_btn.style.display = "none";
    moon.style.display = "block";
    document.querySelector(":root").style.setProperty("--for-extra-background" , "#f0fff3");
    document.querySelector(":root").style.setProperty("--for-light-background" , "rgba(164, 162, 162, 0.38)");
    document.querySelector(":root").style.setProperty("--for-fonts" , "rgba(22, 22, 22, 0.84)");
    document.querySelector(":root").style.setProperty("--for-p-color" , "rgb(66, 64, 64)");

    p_color.classList.toggle("p-color-dark");
})

moon.addEventListener("click" , function(){
    dark_btn.style.display = "block";
    moon.style.display = "none";
    document.querySelector(":root").style.setProperty("--for-extra-background", "rgba(1, 1, 1, 0.821)");
    document.querySelector(":root").style.setProperty("--for-light-background" , " rgba(80, 80, 80, 0.984)");
    document.querySelector(":root").style.setProperty("--for-fonts" , "#fff");
    document.querySelector(":root").style.setProperty("--for-p-color" , "rgba(239, 236, 236, 0.832)");
})

// ===============================portfolio-img-gellary-section==================

let img_gallary = document.querySelector(".this-is-for-img-gallary");
let main_img = document.querySelector("#main-img");
    
function imgf (pic){
    img_gallary.style.display="block"
    main_img.src = pic
}
function closeall(){
    img_gallary.style.display = "none"
}

// ==============================name-and-profetion-text-animation=====================



let typed = new Typed(".typed",{
    strings:["", "Web designer" ,"Web Devleoper" ,"Front End Web Designer" ,"Freelancer" ],
    typeSpeed:120,
    BackSpeed:20,
    loop:true
})
let typed_two = new Typed(".typed-two",{
    strings:["", "Web designer" ,"Web Devleoper" ,"Front End Web Designer" ,"Freelancer" ],
    typeSpeed:100,
    BackSpeed:20,
    loop:true
})



// ==========================other-option-section===============



let other_app =document.querySelector(".this-is-for-other-app");
let other_btn = document.querySelector("#other-btn");
let close_btn_projects = document.querySelector("#my-project-close-btn");

other_btn.addEventListener("click" , function(){
    other_app.classList.add("pro")
})
close_btn_projects.onclick = ()=>{
    other_app.classList.remove("pro")
}
web_scroll.addEventListener("scroll" , function(){
    other_app.classList.remove("pro")
})

let lode_sec = document.querySelector(".this-is-for-loading")
function onload(){
    lode_sec.style.display = "none"
}



// function send_email(){
//     Email.send({
//         Host : "51a07405-7d63-4130-b0cb-58e8058744b3",
//         Username : "msmia01925@gmail.com",
//         Password : "msmia01925",
//         To : 'msmia01925@gmail.com',
//         From : document.querySelector(".email").value,
//         Subject : document.querySelector(".subject").value,
//         Body : document.querySelector(".maintext").value
//     }).then(
//       message => alert(message)
//     );
// }


// ======================email-validition-----------------===========

// let name_input = document.querySelector(".name");
// let gmail = document.querySelector(".email");
// let subject = document.querySelector(".subject");
// C4411538DDBBF782165CB68CA1772A5D619F
// let maintext = document.querySelector(".maintext");
// let email_sent_btn = document.querySelector("email-send-btn");






// let form_content = document.querySelector("contact-form");


// function sentmasge(e){
//     e.preventDefault();
//     let name_input = document.querySelector(".name");
//     let gmail = document.querySelector(".email");
//     let subject = document.querySelector(".subject");
//     let maintext = document.querySelector(".maintext");
//     let email_sent_btn = document.querySelector("email-send-btn");
//     Email.send({
//                    SecureToken : "51a07405-7d63-4130-b0cb-58e8058744b3",
//                     To : 'msmia01925@gmail.com',
//                     From : gmail.value,
//                     Subject : subject.value,
//                     Body : maintext.value
//            }).then(
//            message => alert(message)
//            );
// }
// form_content.addEventListener("submite",sentmasge);

// email_sent_btn.addEventListener("click" , function(){
//       Email.send({
//             SecureToken : "51a07405-7d63-4130-b0cb-58e8058744b3",
//             To : 'msmia01925@gmail.com',
//             From : gmail.value,
//             Subject : subject.value,
//             Body : maintext.value
//         }).then(
//         message => alert(message)
//         );
// })
      


// function send_email(){
//     if(name_input.value == ""){
//         alert("Enter your name")
//     }
//     else if(gmail.vlaue == ""){
//         alert("Enter A valid Gmail Id")
//     }
//     else if(subject.value == ""){
//         alert("Enter subject")
//     }
//     else if(maintext.value == ""){
//         alert("Enter massege with minimam 20 word")
//     }
//     else(
//         alert("email sent compleat")
//     )
// }