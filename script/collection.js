      let value = localStorage.getItem("category") || "All";
      let container = document.querySelector(".container");
      let box = document.createElement("div");
      box.classList.add("men");
      const line = document.createElement("h4");
      line.innerHTML= `${value} collections`;
      box.appendChild(line);
      container.appendChild(box);

      // +++++++++++++++++++++++++++++++++++++++ API calling ++++++++++++++++++++++++++++++++++++
    
    async function api () {
    let response = await fetch("./data.json");
    let data = await response.json();
        return data.categories ;
    }

//    +++++++++++++++++++++++++++++++++++++++++++ Function to create card +++++++++++++++++++++++++++++++++++++++++
function createCard(imgSrc,name, desc, price ,size) {
    // Card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Image container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = name;

    imageContainer.appendChild(img);

    // Hoodie details
    const detail = document.createElement("div");
    detail.classList.add("hoodies-detail");

    const h3 = document.createElement("h3");
    h3.textContent = name;

    const p = document.createElement("p");
    p.textContent = desc;

    const h4 = document.createElement("h4");
    h4.innerHTML =`₹ ${price}`  ; // using innerHTML because of the span

    detail.appendChild(h3);
    detail.appendChild(p);
    detail.appendChild(h4);

    // Add everything to card
    card.appendChild(imageContainer);
    card.appendChild(detail);
    card.addEventListener("click", () => {
    let productData = {
        imgSrc,
        title: name,
        desc,
        price,
        size
    };
     localStorage.clear()
    localStorage.setItem("productOverview", JSON.stringify(productData));
    window.location.href = "overview.html";
});


    return card;
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++ show the products of men or  women+++++++++++++++++++++++++++++++
let cards = document.querySelector(".cards");
 async function show (value){
    let res = await api();
   if(value === "women"){
     res[1].products.map(function(elem){
     let card = createCard(elem.imageUrl,elem.name,elem.description,elem.price,elem.sizes)
     
     cards.appendChild(card); 
    })
   }
   else if(value === "men"){
     res[0].products.map(function(elem){
     let card = createCard(elem.imageUrl,elem.name,elem.description,elem.price,elem.sizes)
     cards.appendChild(card);   
    })
   }
   else
    {
        for(let i = 0; i<2;i++){
    res[i].products.map((elem)=>{
       let card = createCard(elem.imageUrl,elem.name,elem.description,elem.price,elem.sizes);
        cards.appendChild(card);
    })
    
  }
        
    }
}
 show(value)

 let back =document.querySelector(".back");
        back.addEventListener("click",()=>{
   window.location.href ="index.html"
        })
        let cartbtn =document.querySelector(".cart-btn");
        cartbtn.addEventListener("click",()=>{
   window.location.href ="cart.html"
        })
 
