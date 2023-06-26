let array = [
  {
    question:
      "1. what is a large language model chatbot developed by OpenAI based on GPT-3.5",
    ans: ["ChatGpt", "Google", "Edge", "Alexa"],
  },
  {
    question: "2. DALL-E was named after?",
    ans: [
      "Salvador Dalí and Pixar’s WALL-E",
      "Sunder Pichai",
      "Jeff bejos",
      "Bill gates",
    ],
  },
  {
    question:
      "3. Who created a Discord community with bots that can turn your text into images in less than a minute.",
    ans: ["Discord community", "Midjourney", "Image converto", "Alphabet"],
  },
  {
    question:
      "4. what is a method for creating images from text prompts. It works by adding random noise to a set of training images, then learning how to remove noise to construct the desired image.",
    ans: ["ChatGPT", "diffusion model", "Google Scanner", "Noise remover"],
  },
];
let questions = document.getElementById("ques");
let answers = document.getElementsByClassName("ans");
let i = 0;
// let checkedAnswer=document.getElementsByName("answer");
// let arr2=["ChatGpt","Salvador Dalí and Pixar’s WALL-E","Midjourney","diffusion model"];
let n_btn = document.getElementById("next-btn");
let p_btn = document.getElementById("pre-btn");

print();
function print() {
    questions.innerHTML = array[i].question;
    for (j = 0; j < 4; j++) {
        answers[j].innerHTML = array[i].ans[j];
    }
    if(i==0){
        p_btn.style.display="none";
    }
    else{
        p_btn.style.display="block";
        document.getElementById("submit").style.display="none";
    };
    if(i==3){
        n_btn.style.display="none";
        document.getElementById("submit").style.display="block";
    }
    else{
        n_btn.style.display="block";
    };
}
n_btn.addEventListener("click", function () {
  i++;
  print();
});

p_btn.addEventListener("click", function () {
 i--;
 print();
});
let score=0;
let out=document.getElementById("submit");
let output=document.getElementById("result");
out.addEventListener('click',function(){
    output.style.display="block";
    output.innerHTML="your score is "+score+ "." + "     score is displaying zero because i am facing difficulty in suming it up." ; 
});