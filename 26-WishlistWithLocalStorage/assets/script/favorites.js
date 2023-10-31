let url = "https://fakestoreapi.com/products"
let products = document.querySelector(".products")
let product = document.querySelector(".product")
let check = document.querySelector(".check")
let productCount = document.querySelector(".productCount")
let totalPrice = document.querySelector(".totalPrice")
let details = document.querySelector(".details")
let removeAll = document.querySelector(".removeAll")

let quantity = 1
let favItemsAll = {}
// fetch(url).then(res => res.json()).then(data => {
//     data.forEach((element, i) => {
//         products.innerHTML += `<div class="product">
//         <img src="${element.image}" alt="">
//         <h2 class="productName">${element.title}</h2>
//         <div class="count">
//             <button class="increase">
//                 <p>+</p>
//             </button>
//             <p class="counter">2</p>
//             <button class="decrease">
//                 <p>-</p>
//             </button>
//         </div>
//         <div class="prices">
//             <h3 class="price">$${element.price}</h3>
//             <button class="save">Save for later</button>
//             <button class="remove">Remove</button>
//         </div>
//     </div>`
//     });
// })

let favItems = JSON.parse(localStorage.getItem("favItems"))
favItems.forEach(element => {
    let quantity = 1
    products.innerHTML += `<div class="product">
        <img src="${element.image}" alt="">
        <h2 class="productName">${element.title}</h2>
        <div class="count">
            <button data-id="${element.id}" class="increase">
                <p>+</p>
            </button>
            <p class="counter">2</p>
            <button class="decrease">
                <p>-</p>
            </button>
        </div>
        <div class="prices">
            <h3 class="price">$${element.price}</h3>
            <button class="save">Save for later</button>
            <button class="remove">Remove</button>
        </div>
    </div>`
    totalPrice += element.price
    details.innerHTML = `<div class="detailsLeft">
    <h3>
        Sub-Total
    </h3>
    <div class="productCount">${quantity} items</div>
    </div>
    <div class="detailsRight">
    <h1 class="totalPrice">$${totalPrice}</h1>
    </div>`


})
let save = document.querySelectorAll(".save")
let remove = document.querySelector(".remove")
let price = document.querySelector(".price")
remove.addEventListener("click", function(){
    totalPrice-=price.value
})

products.addEventListener("click", function (event) {
    if (event.target.classList.contains("increase") || event.target.classList.contains("decrease")) {
        const itemId = event.target.getAttribute("data-id");
        const item = favItemsAll[itemId];

        if (event.target.classList.contains("increase")) {
            item.quantity++;
            totalPrice.textContent = `$${item.price * item.quantity}`;
            productCount.textContent = `${item.quantity} items`;
        } else {
            if (item.quantity > 1) {
                item.quantity--;
                totalPrice.textContent = `$${item.price * item.quantity}`;
                productCount.textContent = `${item.quantity} items`;
            } else {
                delete favItemsAll[itemId];
            }
        }

        localStorage.setItem("favItems", JSON.stringify(Object.values(favItemsAll)));
    }
});



//checkout
check.addEventListener("click", function () {
    // productCount.textContent = "0";
    // totalPrice.textContent = "$0";
    products.innerHTML = "";
    details.innerHTML = `<div class="detailsLeft">
    <h3>
        Sub-Total
    </h3>
    <div class="productCount">0 items</div>
    </div>
    <div class="detailsRight">
    <h1 class="totalPrice">$0</h1>
    </div>`
    let favItems = [];
    localStorage.setItem("favItems", JSON.stringify(favItems));
});
// remove all
removeAll.addEventListener("click", function () {
    // productCount.textContent = "0";
    // totalPrice.textContent = "$0";
    products.innerHTML = "";
    details.innerHTML = `<div class="detailsLeft">
    <h3>
        Sub-Total
    </h3>
    <div class="productCount">0 items</div>
    </div>
    <div class="detailsRight">
    <h1 class="totalPrice">$0</h1>
    </div>`
    let favItems = [];
    localStorage.setItem("favItems", JSON.stringify(favItems));
});
// remove.addEventListener("click", function () {
//     console.log(this);
// })