
let incrimentbtn = document.querySelector(".incriment");
let output = document.querySelector(".output");

function incrimentnum (){

let newvalue = Number(output .value)
newvalue = newvalue + 1

output .value = newvalue
}
incrimentbtn.addEventListener(`click` , incrimentnum )




let decrimentbtn = document.querySelector(".decriment");

function decrimentnum (){
    let newvalue = Number(output .value)
    if(newvalue == 0)
    return false;
    newvalue = newvalue - 1
    
    output .value = newvalue  
}

decrimentbtn.addEventListener('click', decrimentnum )



            // range slider 


let slide = document.querySelector(".slider")
let result = document.querySelector('.rangeslider p span')

function priceupdate(){
   let newvalue = slide .value;
   result.innerHTML =  newvalue

}

slide.addEventListener('input' , priceupdate )

           


                // color changer 
let ccbtn = document.querySelector('.DMicons')
let body = document.querySelector('body')
function colorChanger(){
    let red = Math.round(Math.random() *255);
    let green =Math.round(Math.random() *255);
    let blue =Math.round(Math.random() *255);
  body.style.backgroundColor = `rgb(${red} ,${green}, ${blue})`
    
}


ccbtn.addEventListener("click" , colorChanger)


        // img changer 


let box = document.querySelector('.box')
let frontImg = document.querySelector('.front')
let backImg =document.querySelector('.back')

function fontimgchange(){
    frontImg.classList.add("hoverd");
}


box.addEventListener("mouseenter" ,fontimgchange )

function backimgchange(){
    frontImg.classList.remove("hoverd");
}


box.addEventListener("mouseleave" ,backimgchange )