const toggle =document.querySelector("#toggle");
const signup=document.querySelector("#signup");
const modal=document.querySelector("#modal");
const close=document.querySelector("#closeicon");



toggle.addEventListener ("click", function(){
document.body.classList.toggle("shownav");
})


signup.addEventListener("click",function(){
  modal.classList.add("showmodal");
})

close.addEventListener("click",function(){
  modal.classList.remove("showmodal");
})

window.addEventListener("click", function(e){
e.target===modal?modal.classList.remove("showmodal"):false;
})
