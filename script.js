console.log("cba");
const p = document.querySelector(".sidebar");
const burg = document.querySelector(".borgar");

burg.addEventListener("click", function(){
    console.log("abc");
    p.classList.toggle("sidebarthere");
});

