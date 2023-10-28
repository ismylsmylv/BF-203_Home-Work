let body = document.querySelector("body")
let products = document.querySelector(".products")
let card = document.querySelector(".products")
let url = "https://fakestoreapi.com/products/"
let favs = document.querySelector(".favs")
let cart = document.querySelector(".cart")
let favBtn = document.querySelectorAll(".favBtn")
let remBtn = document.querySelectorAll(".remBtn")
let total = document.querySelector(".total")
let favHead = document.querySelector(".favHead");
let cartHead = document.querySelector(".cartHead");
let sum = 0

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
            favHead.innerHTML = `<p>Favorites</p>`
            favs.innerHTML += `
            <div class="favElem"><img 
            src=${data[btn.name].image}
            alt="Card image cap">
                <div class="info">
                    <p class="name">${data[btn.name].title}</p>
                    <p class="price">$${data[btn.name].price}</p>
                </div>
                <button type="button" class="btn btn-light remBtn"><i class="fa-solid fa-trash"></i></button>
            </div>`
            Swal.fire({
                icon: 'success',
                title: `${data[btn.name].title} added to favorites`,
            })
            let remBtns = document.querySelectorAll(".remBtn");
            for (let btn of remBtns) {
                btn.addEventListener("click", function () {
                    this.parentElement.remove()



                })
            }
        })
    }

    // adding to cart btn
    let addBtns = document.querySelectorAll(".addBtn");
    for (let btn of addBtns) {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            cartHead.innerHTML = `<p>Cart</p>`
            cart.innerHTML += `
            <div class="cartElem">
            <img 
            src=${data[btn.name].image}
            alt="Card image cap">
                <div class="info">
                    <p class="name">${data[btn.name].title}</p>
                    <p class="price">$${data[btn.name].price}</p>
                </div>
                <button type="button" class="btn remBtn btn-light"><i class="fa-solid fa-trash"></i></button>
            </div>` ;
            // console.log(data[btn.name].price);
            sum += data[btn.name].price
            total.innerHTML = `<h4 class="total">Total: $${sum} </h3>`;
            Swal.fire({
                icon: 'success',
                title: `${data[btn.name].title} added to cart`,
            })

            let remBtns = document.querySelectorAll(".remBtn");
            for (let btn of remBtns) {
                btn.addEventListener("click", function () {
                    sum -= Number(this.parentElement.querySelector('.price').textContent.replace('$', '')).toFixed(2)
                    total.innerHTML = `<h4 class="total">Total: $${sum} </h3>`;
                    this.parentElement.remove()
                })
            }

        })
    }

}).catch()
