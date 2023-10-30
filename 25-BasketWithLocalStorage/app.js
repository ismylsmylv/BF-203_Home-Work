let url = "https://fakestoreapi.com/products"
let products = document.querySelector(".products")

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

let cartItems=JSON.parse(localStorage.getItem("cartItems"))
cartItems.forEach(element=>{
    products.innerHTML += `<div class="product">
        <img src="${element.image}" alt="">
        <h2 class="productName">${element.title}</h2>
        <div class="count">
            <button class="increase">
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
})
