// ++++++++++++++++++++++++++++++GET CART DATA ++++++++++++++++++++++++++++++ 
let cart = JSON.parse(localStorage.getItem("cart")) || [];


let container = document.querySelector(".left");
let subtotalBox = document.querySelector(".total-price-value");
let shippingBox = document.querySelector(".shipping-value");
let grandTotalBox = document.querySelector(".grand-total-value");

// +++++++++++++++++++++++++++++++++++++SAVE CART+++++++++++++++++++++++++++++++++++++++++++
function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

//  +++++++++++++++++++++++++++++++++++++CALCULATE TOTALS +++++++++++++++++++++++++++++++++++++++++++
function calculateTotals() {
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.qty;
    });

    let shipping = subtotal > 0 ? 99 : 0; // rule: fixed shipping
    let grandTotal = subtotal + shipping;

    subtotalBox.textContent = "₹ " + subtotal;
    shippingBox.textContent = "₹ " + shipping;
    grandTotalBox.textContent = "₹ " + grandTotal;
}

//  +++++++++++++++++++++++++++++++++++++CREATE CART CARD+++++++++++++++++++++++++++++++++++++++++++
function createCartCard(item, index) {
    const card = document.createElement("div");
    card.classList.add("card");

    const product = document.createElement("div");
    product.classList.add("product");

    const crossBtn = document.createElement("button");
    crossBtn.classList.add("cross");
    crossBtn.innerHTML = `<i class="ri-close-line"></i>`;
    crossBtn.addEventListener("click", () => {
        cart.splice(index, 1);
        updateLocalStorage();
        loadCart();
    });

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;

    imgDiv.appendChild(img);

    const det = document.createElement("div");
    det.classList.add("det");

    const h3 = document.createElement("h3");
    h3.textContent = item.title;

    const pSize = document.createElement("p");
    pSize.textContent = `size: ${item.size}`;

    const qtyDiv = document.createElement("div");
    qtyDiv.classList.add("qty");

    const minusBtn = document.createElement("button");
    minusBtn.innerHTML = `<i class="ri-subtract-line"></i>`;
    minusBtn.addEventListener("click", () => {
        if (item.qty > 1) {
            item.qty--;
            updateLocalStorage();
            loadCart();
        }
    });

    const qtyValue = document.createElement("h4");
    qtyValue.textContent = item.qty;

    const plusBtn = document.createElement("button");
    plusBtn.innerHTML = `<i class="ri-add-line"></i>`;
    plusBtn.addEventListener("click", () => {
        item.qty++;
        updateLocalStorage();
        loadCart();
    });

    qtyDiv.appendChild(minusBtn);
    qtyDiv.appendChild(qtyValue);
    qtyDiv.appendChild(plusBtn);

    det.appendChild(h3);
    det.appendChild(pSize);
    det.appendChild(qtyDiv);

    product.appendChild(crossBtn);
    product.appendChild(imgDiv);
    product.appendChild(det);

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");

    const h5 = document.createElement("h5");
    h5.textContent = `₹${item.price * item.qty}`;

    priceDiv.appendChild(h5);

    card.appendChild(product);
    card.appendChild(priceDiv);

    return card;
}

//  +++++++++++++++++++++++++++++++++++++LOAD CART+++++++++++++++++++++++++++++++++++++++++++ 
function loadCart() {
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<h2>Your cart is empty 😔</h2>`;
        subtotalBox.textContent = "₹ 0";
        shippingBox.textContent = "₹ 0";
        grandTotalBox.textContent = "₹ 0";
        return;
    }

    cart.forEach((item, index) => {
        const card = createCartCard(item, index);
        container.appendChild(card);
    });

    calculateTotals();
}


loadCart();
// +++++++++++++++++++++++++++ CONTINUE SHOPPING ++++++++++++++++++++++++++++
document.querySelector(".btn-2").addEventListener("click", () => {
    window.location.href = "collection.html";   
});

 let back =document.querySelector(".nav-btn");
        back.addEventListener("click",()=>{
   window.location.href ="overview.html"
        })
        