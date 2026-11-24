IMask(document.getElementById('phone'), {
    mask: '+{7} (000) 000-00-00'
});
const burger=document.getElementById("burger")
const nav=document.getElementById("nav")

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
});
const track=document.querySelector(".track");
const zad=document.querySelector(".btn-gallery");
const pered=document.querySelector(".btn-gallery1");
const slides=document.querySelectorAll(".slides");
const box=document.querySelector(".dots");
    slides.forEach((_, i) => {
        const dot=document.createElement("button");
        dot.className="dot";
        dot.setAttribute("arial-label","Фото " + (i+1));
        dot.addEventListener("click", () => {
            track.scrollTo(
                { left: i * track.clientWidth, behavior:"smooth"});
        });
        box.appendChild(dot);
    });

const dots =box.querySelectorAll(".dot");

function update(){
    const i=Math.round(track.scrollLeft/track.clientWidth);
    dots.forEach((d,n) => d.classList.toggle("active", n===i));
    zad.disabled = i ===0;
    pered.disabled = i === slides.length - 1;
    
}
track.addEventListener("scroll",update);

zad.addEventListener("click", () =>{
    track.scrollBy({left:-track.clientWidth, behavior:"smooth"});
});
pered.addEventListener("click", () =>{
    track.scrollBy({left:track.clientWidth, behavior:"smooth"});
});

update();
   




const form=document.getElementById("form")
form.addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("error").textContent="";
    document.getElementById("error_phone").textContent="";
    document.getElementById("error_email").textContent="";

    let ok=true;
    const nameval=form.name.value.trim();
    const namereg=/^[а-яА-ЯёЁa-zA-Z\s-]+$/;
    if (form.name.value.trim().length < 2 || !namereg.test(nameval)){
        document.getElementById("error").textContent="Введите Имя";
        ok=false;
    }

    if(form.phone.value.replace(/\D/g, "").length < 10) {
        document.getElementById("error_phone").textContent="Введите номер";
        ok=false;
    }

    const emailprov=form.email.value.trim();
    if(emailprov !==""){
        const emailreg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailreg.test(emailprov)){
            document.getElementById("error_email").textContent="Введите ваоидное имя почты";
       ok=false;
        }

    
    }

   if (!ok) return;
   const pop=document.querySelector(".pop");
   pop.classList.add("x")
        
   
    form.reset();

    setTimeout(function(){
        pop.classList.remove("x");

    }, 2000);
});