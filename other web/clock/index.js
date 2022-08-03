// let hour = document.getElementById("hour");
// let minute = document.getElementById("minute");
// let second = document.getElementById("secend");

// function md(){
//     var date = new Date();
//     let hr = date.getHours();
//     var min = date.getMinutes()
//      var sec = date.getSeconds()

   
//    hour.textContent = hr;
//    minute.textContent =min;
//    second.textContent = sec;


// }
// setInterval(md,1000)
 


var hour = document.getElementById ("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second")
var proges = document.getElementById("border")

function showrealtime(){
    date = new Date();
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
       
     hour.innerHTML = hr;
     minute.innerHTML = min;
     second.innerHTML =sec; 

    proges.style.width=(sec/60)*100 +"%"


}
setInterval(showrealtime,1000)

// function showrealtime(){
//     var date = new Date();
//     var hr = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();


//     hour.textContent=hr;
//     minute.innerHTML=min;
//     second.innerText = sec;


//     proges.style.width = (sec / 60)*100 + "%"


// }


// setInterval(showrealtime,1000)

