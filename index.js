const hum = document.querySelector(".humburguer")
const show = document.querySelector(".show");
const see = document.querySelector(".see");
const date = document.querySelector(".date");
const footer = document.querySelector("footer")


hum.addEventListener("click", function(){
    show.classList.toggle("see");
})

date.innerHTML = new Date();
footer.innerHTML =new Date();

