//  ++++++++++++++++++++++++++++++++++++++ animation with GSAP +++++++++++++++++++++++++++++++++++++
let tl = gsap.timeline();
tl.from(".logo",{
 y:-40,
    duration:0.12,
    delay:0.5,
})
tl.from(".ul",{
    y:-40,
    duration:0.13,
    stagger:0.2,
    opacity:0
})
tl.from(".hero-section",{
       y:500,
    duration:0.22,
    opacity:0,
  
})
gsap.from(".res",{
        y:-40,
    duration:0.25,
    delay:0.21,
    opacity:0,
    scrollTrigger:{
  trigger:".res",
  scroller:"body",
  start:"top 75%"
    }
})
gsap.from(".card",{
      y:100,
    duration:0.25,
    opacity:0,
    stagger:0.55,
    scrollTrigger:{
  trigger:".card",
  scroller:"body",
    }
    
})
gsap.from(".text",{
    y:80,
    duration:1,
    delay:0.23,
    opacity:0,
     scrollTrigger:{
        trigger:".text",
        scroller:"body",
        start:"top 80%",
        scrub:2

    }
   
})
gsap.from(".box1",{
      x:800,
    duration: 0.5,
    opacity:0.5,
     scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        start:"top 70%",
        end:"top 20%",
        scrub:2

    }
})
gsap.from(".box2",{
      x:-800,
    duration:0.5,
    opacity:0.5,
     scrollTrigger:{
        trigger:".box2",
        scroller:"body",
        start:"top 70%",
        end:"top 20%",
        scrub:2

    }
})
gsap.from(".shop-detail",{
     x:-800,
    duration:0.45,
    opacity:0,
     scrollTrigger:{
        trigger:".shop-detail",
        scroller:"body",
        start:"top 70%",
        end:"top 20%",
    }
})
gsap.from(".statements",{
     x:-800,
    duration:0.42,
    opacity:0,
     scrollTrigger:{
        trigger:".statements",
        scroller:"body",
        start:"top 70%",
        end:"top 20%",
    }
})
gsap.from(".women",{
     x:-800,
    duration:1,
    opacity:0,
  ease: "power4.out",
     scrollTrigger:{
        trigger:".women",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from(".men",{
     x:800,
    duration:1,
    opacity:0,
    ease: "power4.out",
     scrollTrigger:{
        trigger:".men",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from(".li",{
         y:200,
    duration:0.22,
    opacity:0,
    stagger:0.3,
    ease: "power4.out",
     scrollTrigger:{
        trigger:".li",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
    }
})

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++ here the logic start +++++++++++++++++++++++++++++++++++++++++++++

  async function api () {
    let response = await fetch("./data.json");
    let data = await response.json();
        return data.categories ;
    }

let ham = document.querySelector(".hamburger");
let drawer = document.querySelector(".mobile-menu");
let overlay = document.querySelector(".overlay");

ham.addEventListener("click", () => {
    drawer.classList.add("active");
    overlay.classList.add("active");
    gsap.from(".yoyo",{
      x:540,
    duration:0.13,
    stagger:0.2,
    opacity:0
    })
});

overlay.addEventListener("click", () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
});



let cart = document.querySelector(".cart");
cart.addEventListener("click",function(){
      window.location.href = "cart.html"; 
})
let shopping =document.querySelector(".btn-shop");
shopping.addEventListener("click",function(){
 document.getElementById("section-5").scrollIntoView({ behavior: "smooth" });
})
let read = document.querySelector(".btn-about");
read.addEventListener("click",function(){
    window.location.href ="about.html";
})
let shopnow = document.querySelector(".op");
shopnow.addEventListener("click",function(){
     document.getElementById("section-5").scrollIntoView({ behavior: "smooth" });
})
let women = document.querySelector(".women");
women.addEventListener("click",()=>{
    localStorage.clear();
    localStorage.setItem("category","women")
    window.location.href="collection.html";
   
    
})
let men = document.querySelector(".men");
men.addEventListener("click",()=>{
    localStorage.clear();
     localStorage.setItem("category", "men");
    window.location.href="collection.html";
})
let all = document.querySelector(".new");
all.addEventListener("click",()=>{
    localStorage.clear();
    window.location.href="collection.html";
})
let cards = document.querySelector(".cards")
function createCard(imgSrc, title, desc, price,size) {

    const card = document.createElement("div");
    card.classList.add("card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = title;

    const h3New = document.createElement("h3");
    h3New.textContent = "New";

    imageContainer.appendChild(img);
    imageContainer.appendChild(h3New);


    const detail = document.createElement("div");
    detail.classList.add("hoodies-detail");

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.textContent = desc;

    const h4 = document.createElement("h4");
    h4.innerHTML = `₹${price}` ; 

    detail.appendChild(h3);
    detail.appendChild(p);
    detail.appendChild(h4);

    
    card.appendChild(imageContainer);
    card.appendChild(detail);
    card.addEventListener("click",()=>{
         let productData = {
        imgSrc,
        title: title,
        desc,
        price,
        size
    };
    localStorage.clear()
    localStorage.setItem("productOverview", JSON.stringify(productData));
    window.location.href = "overview.html";
    })

    return card;
}

 async function newdrops (){
    let res = await api();
  for(let i = 0; i<2;i++){
    res[i].products.map((elem)=>{
       if(elem.new === true){
       let card = createCard(elem.imageUrl,elem.name,elem.description,elem.price,elem.sizes);
        cards.appendChild(card);
       }
    })
    
  }
  
}
newdrops()

let link1 = document.querySelectorAll(".link1");
link1.forEach((e)=>{
e.addEventListener("click",()=>{
   localStorage.clear()
   localStorage.setItem("category","men")
   window.location.href ="collection.html"
})
}
)
let link2 = document.querySelectorAll(".link2");
link2.forEach((e)=>{
e.addEventListener("click",()=>{
   localStorage.clear()
   localStorage.setItem("category","women")
   window.location.href ="collection.html"
})
}
)