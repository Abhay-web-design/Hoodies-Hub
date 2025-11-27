
let product = JSON.parse(localStorage.getItem("productOverview"));

if(product){
 let center = createProductSection(product.imgSrc,product.title,product.desc,product.price,product.size);
 document.querySelector(".main").appendChild(center);
}
function createProductSection(mainImgSrc, title, desc, price,size) {
    const center = document.createElement("div");
    center.classList.add("center");

    //+++++++++++++++++++++++++ Left Side +++++++++++++++++++++++++++
    const left = document.createElement("div");
    left.classList.add("left");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    const mainImg = document.createElement("img");
    mainImg.id = "main-img";
    mainImg.src = mainImgSrc;

    imageDiv.appendChild(mainImg);

    // const smallImagesDiv = document.createElement("div");
    // smallImagesDiv.classList.add("small-images");

    // smallImages.forEach(src => {
    //     const imgCon = document.createElement("div");
    //     imgCon.classList.add("img-con");

    //     const img = document.createElement("img");
    //     img.classList.add("batman");
    //     img.src = src;

    //     imgCon.appendChild(img);
    //     smallImagesDiv.appendChild(imgCon);
    // });

    left.appendChild(imageDiv);
    // left.appendChild(smallImagesDiv);

    //+++++++++++++++++++Right Side ++++++++++++++++++++++++++++
    const right = document.createElement("div");
    right.classList.add("right");

    const heading = document.createElement("div");
    heading.classList.add("heading");
    const h3 = document.createElement("h3");
    h3.textContent = title;
    heading.appendChild(h3);

    const para = document.createElement("div");
    para.classList.add("para");
    const h5 = document.createElement("h5");
    h5.textContent = "Product Description";
    const p = document.createElement("p");
    p.textContent = desc;
    para.appendChild(h5);
    para.appendChild(p);

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
    const h4Price = document.createElement("h4");
    h4Price.textContent = `₹${price}`;
    priceDiv.appendChild(h4Price);

    const sizeDiv = document.createElement("div");
    sizeDiv.classList.add("size");
    const h3size = document.createElement("h3");
    h3size.textContent = "Sizes";

    const md = document.createElement("div");
    md.classList.add("md");
    size.forEach(size => {
        const sizeBox = document.createElement("div");
        sizeBox.classList.add("ru");
        sizeBox.textContent = size;
        md.appendChild(sizeBox);
    });

    sizeDiv.appendChild(h3size);
    sizeDiv.appendChild(md);

    const review = document.createElement("div");
    review.classList.add("review");

    const reviewH4 = document.createElement("h4");
    reviewH4.innerHTML = `<i class="ri-star-fill"></i> 4.6`;
    const reviewP = document.createElement("p");
    reviewP.textContent = "reviewed by 154 customer's";
    review.appendChild(reviewH4);
    review.appendChild(reviewP);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn");

    const btn1 = document.createElement("button");
    btn1.classList.add("btn-1");
    btn1.textContent = "Buy now";

    const btn2 = document.createElement("button");
    btn2.classList.add("btn-2");
    btn2.textContent = "Add to cart";
    btn2.addEventListener("click",()=>{

    let productData = {
        img: mainImgSrc,
        title,
        desc,
        price,
        size: size || ["S","M","L","XL","XXL"],
        qty: 1
    };


    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productData);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
});


   

    btnDiv.appendChild(btn1);
    btnDiv.appendChild(btn2);

    right.appendChild(heading);
    right.appendChild(para);
    right.appendChild(priceDiv);
    right.appendChild(sizeDiv);
    right.appendChild(review);
    right.appendChild(btnDiv);

    center.appendChild(left);
    center.appendChild(right);

    return center;
}


 let back =document.querySelector(".nav-btn");
        back.addEventListener("click",()=>{
   window.location.href ="collection.html";
        })
        let cartbtn =document.querySelector(".ul");
        cartbtn.addEventListener("click",()=>{
   window.location.href ="cart.html";
        })
