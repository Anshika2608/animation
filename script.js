

function changezindex(){
    document.getElementById("left").style.zIndex="-1";
    document.getElementById("right").style.zIndex="1";
    document.getElementById("sign-in1").style.zIndex="-1";
    document.getElementById("sign").style.zIndex="1";
    document.getElementById("sign").style.transform="translateX(425px)";
    
    document.getElementById("right").style.transform="translateX(-425px)";}
   
function changezindex1(){
    document.getElementById("left").style.zIndex="1";
    document.getElementById("right").style.zIndex="-1";
    document.getElementById("sign").style.zIndex="-1";
    document.getElementById("sign-in1").style.zIndex="1";
    document.getElementById("sign-in1").style.transform="translateX(-425px)";
    document.getElementById("left").style.transform="translateX(425px)";
   
}