// marquee
const root = document.documentElement;
const marqueeElementsDisplayed= getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
}


// navbar
function myFunction() {
    var x= document.getElementById("myTopnav");
    if(x.className === "topnav"){
      x.className +=" responsive";
    }
    else{
      x.className="topnav";
    }
  }

  
// timer
 var countDownDate = new Date ("jan 15, 2022 15:37:25").getTime();
 var x =setInterval(function(){
     var now= new Date().getTime();
     
     var distance = countDownDate - now;

     var days= Math.floor(distance/(1000 * 60 *60* 24));
     var hours= Math.floor((distance % (1000*60*60*24)) /(1000 *60*60));
     var minutes = Math.floor((distance % (1000 *60*60)) /(1000 *60));
     var seconds= Math.floor((distance %(1000 *60)) /1000);
     document.getElementById("demo").innerHTML= days +"d " + hours +"h " +minutes +"m "+ seconds+ "s";
     
     if(distance<0){
         clearInterval(x);
         document.getElementById("demo").innerHTML= "EXPIRED";
     }
      if(seconds<10){
     document.getElementById("demo").innerHTML= days +"d " + hours +"h " +minutes +"m "+  +"0"+seconds+ "s";
        

     }

 },1000);


//  slide-shows

        var slideIndex=[1,1,1,1];
        var slideId=["mySlides1"]
        showSlides(1,0);
        
        
        function plusSlides(n, no){
            showSlides(slideIndex[no] +=n, no);
        }
        function showSlides(n, no){
            var i;
            var x=document.getElementsByClassName(slideId[no]);
            if (n> x.length) {slideIndex[no] =1 }
            if (n<1) {slideIndex[no]=x.length}
            for (i=0; i<x.length; i++){
                x[i].style.display="none";
            }
            x[slideIndex[no]-1].style.display="block";
            // setTimeout(showSlides, 2000);

        }
//  setInterval(function(){
//      slideIndex ++;
//      showSlides(slideIndex);
//  },2000);








