//date:23/04/2022
//author:ms mia
//description:color picer application.......

//globals




//onlode handler





//main or boot function ; this function will take care of getting all the DOM references



//dom handler




//event handler/




//ulitly function

function randomcolorgenaretor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

  return `rgb(${red},${green},${blue})`
}


var randomcolorbutton = document.getElementById("random-color-button");
var colorbox = document.getElementById("color-box");
var rgbinputvalue = document.getElementById("rgb-input-text");

randomcolorbutton.addEventListener("click" ,function(){
    colorbox.style.background = randomcolorgenaretor()
     
    rgbinputvalue.value = randomcolorgenaretor()

    haxinputtext.value = ""
    massege.innerHTML = ""
    

})

var haxinputtext = document.getElementById("hax-input-text");

haxinputtext.addEventListener("keyup", function(){

  
     colorbox.style.background = haxinputtext.value

})
var massege = document.getElementById("copymassege");
var copybtn=document.getElementById("copybutton");
// var selectrgb = document.getElementById("forrgbcode")
copybtn.addEventListener("click",function(){
   
    if(rgbinputvalue.value === ""){
        massege.innerHTML = "please select color"
    }

   else if (document.getElementById("forrgbcode").checked){
        
        navigator.clipboard.writeText(rgbinputvalue.value)

        massege.innerHTML = "your color copyed"
    }
    else {
        massege.innerHTML = "please cilck the qualety of color"
         
}
  
})