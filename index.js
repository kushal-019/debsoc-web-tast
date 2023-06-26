let read = document.getElementById("readmore");
let invi = document.getElementById("invinci");
let d = document.getElementsByClassName("main");
let hide = document.getElementById("readless");
read.addEventListener("click", function () {
  invi.style.display = "block";
  d[0].style.overflow = "scroll";
  read.style.display = "none";
  hide.style.display = "block";
});
hide.addEventListener("click", function () {
  invi.style.display = "none";
  d[0].style.overflow = "hidden";
  hide.style.display = "none";
  read.style.display = "block";
  
});

let quiz = document.getElementsByClassName("quiz");
let showquiz = document.getElementById("test-btn");
showquiz.addEventListener("click", function () {
  quiz[0].style.display = "block";
  let time1;
  let timer1=document.getElementById("text4");
(function(){
var sec2=60;
time1 = setInterval(()=>{
    timer1.innerHTML='00:'+sec2 ;
    sec2--;
    if(sec2==0){
        sec2=60;
    }
},1000)
})()
});

let time;
let timer=document.getElementById("text3");
(function(){
var sec=60;
time = setInterval(()=>{
    timer.innerHTML='00:'+sec ;
    sec--;
    if(sec==0){
        sec=60;
    }
},1000)
})()





