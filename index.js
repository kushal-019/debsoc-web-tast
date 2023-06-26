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
});

const score=0;
let submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    let sol1=document.getElementsByName("answer1");
    for(i=0;i<4;i++){
        if (sol1[i].checked){
            // console.log(sol1[i].value);
            if(sol1[i].value=="ChatGPT"){
                score++;
            }
        }
    }
    let sol2=document.getElementsByName("answer2");
    for(i=0;i<4;i++){
        if (sol2[i].checked){
            if(sol2[i].value=="Salvador Dalí and Pixar’s WALL-E"){
                score++;
            }
        }
    }
    let sol3=document.getElementsByName("answer3");
    for(i=0;i<4;i++){
        if (sol3[i].checked){
            if(sol3[i].value=="Midjourney"){
                score++;
            }
        }
    }
    let sol4=document.getElementsByName("answer4");
    for(i=0;i<4;i++){
        if (sol4[i].checked){
            if(sol4[i].value=="Diffusion model"){
                score++;
            }
        }
    }
});





