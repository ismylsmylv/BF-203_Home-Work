let body = document.querySelector("body")
let products = document.querySelector(".products")
let card = document.querySelector(".products")
let url = "https://fakestoreapi.com/products/"
let favs = document.querySelector(".favs")
let cart = document.querySelector(".cart")
let favBtn = document.querySelectorAll(".favBtn")
let total = document.querySelectorAll(".total")

fetch(url).then(res => res.json()).then(data => {
    // console.log(data);
    data.forEach((element, i) => {
        products.innerHTML += ` <div class="card product" style="width: 18rem;">
    <img class="card-img-top"
        src="${element.image}"
        alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text price "><b>$${element.price}</b></p>
        <div class="details">
            <p class="card-text category "><i class="fa-solid fa-bag-shopping"></i> ${element.category}</p>
            <p class="card-text rating "><i class="fa-solid fa-star"></i> ${element.rating?.rate}</p>
            <p class="card-text stock "><i class="fa-solid fa-truck"></i> ${element.rating?.count}</p>
        </div>
        <div class="btns mb-0">
            <button  name="${i}" type="button" class="favBtn btn btn-danger"><i class="fa-solid fa-heart"></i>
                <p>Favorite</p>
            </button>
            <button type="button" name="${i}"class="addBtn btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>
                <p>Cart</p>
            </button>
        </div>

    </div>
</div>`

    })

    // adding to favorite btn
    let favBtns = document.querySelectorAll(".favBtn");
    for (let btn of favBtns) {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            console.log(data[btn.name]);
            favs.innerHTML += `
            <div class="favElem">
                <div class="info">
                    <p class="name">${data[btn.name].title}</p>
                    <p class="price">$${data[btn.name].price}</p>
                </div>
                <button type="button" class="btn btn-light"><i class="fa-solid fa-ban"></i></button>
            </div>`

        })
    }

    // adding to cart btn
    let addBtns = document.querySelectorAll(".addBtn");
    for (let btn of addBtns) {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            console.log(data[btn.name]);
            cart.innerHTML += `
            <div class="cartElem">
                <div class="info">
                    <p class="name">${data[btn.name].title}</p>
                    <p class="price">$${data[btn.name].price}</p>
                </div>
                <button type="button" class="btn btn-light"><i class="fa-solid fa-ban"></i></button>
            </div>`
            

        })
    }




}).catch()

//total.textContent += data[btn.name]