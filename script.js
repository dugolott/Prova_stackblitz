console.log('hello!')
let n=0;
let visitor = "";

window.onload =function(e){
  document.querySelector("input").addEventListener("click", count);
  visitor = document.querySelector("h4").innerText;
  count();
};

function count(){
  n++;
  console.log("n = "+n);
  document.querySelector("h4").innerHTML = visitor + "<span>  "+n+"</span>"
}