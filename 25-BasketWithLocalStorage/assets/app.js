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
let cartElem = document.querySelector(".cartElem");
let cartProd = document.querySelector(".cartProd");
let navbar = document.querySelector(".navbar");
let all = document.querySelector(".all");
let men = document.querySelector(".men");
let women = document.querySelector(".women");
let elecs = document.querySelector(".elecs");
let content = document.querySelector(".content");
let acc = document.querySelector(".acc");
let filters = document.querySelector("#filters");
let lowToHighPrice = document.querySelector(".lowToHighPrice");
let highToLowPrice = document.querySelector(".highToLowPrice");
let lowToHighRating = document.querySelector(".lowToHighRating");
let highToLowRating = document.querySelector(".highToLowRating");

let sum = 0
let mens = "men's clothing"
let womens = "women's clothing"
let jewelery = "jewelery"
let electronics = "electronics"


//fetch functions
let preFetch = function () {
    products.innerHTML = ""
    fetch(url)
        .then(res => res.json())
        .then(data => {
            creator(data);
        }).catch()
}
let fetcher = function (category) {
    products.innerHTML = ""
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach((element, i) => {
                if (element.category === category) {
                    products.innerHTML += `<div class="card product" style="width: 18rem;">
                        <img name="${i}" class="cardImage card-img-top" src="${element.image}" alt="Card image cap">
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
                                <button type="button" name="${i}" class="addBtn btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>
                                    <p>Cart</p>
                                </button>
                            </div>
                        </div>
                    </div>`;
                }
            });
            // adding to favorite
            let favBtns = document.querySelectorAll(".favBtn");
            for (let btn of favBtns) {
                btn.addEventListener("click", function (e) {
                    e.preventDefault()
                    // favHead.classList.toggle("reveal")
                    favs.innerHTML += `
            <div class="favElem"><img 
            src=${data[btn.name].image}
            alt="Card image cap">
                <div class="info">
                    <p class="name">${data[btn.name].title}</p>
                    <p class="price">$${data[btn.name].price}</p>
                </div>
                <button type="button" class="btn btn-light remFavBtn"><i class="fa-solid fa-trash"></i></button>
            </div>`
                    Swal.fire({
                        icon: 'success',
                        title: `${data[btn.name].title} added to favorites`,
                    })

                    //removing from favorites
                    let remBtns = document.querySelectorAll(".remFavBtn");
                    for (let btn of remBtns) {
                        btn.addEventListener("click", function () {
                            Swal.fire({
                                title: 'Are you sure want to remove item from favorites?',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, remove item.'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        icon: 'success',
                                        text: 'Item removed'
                                    }
                                    )
                                    this.parentElement.remove()
                                }
                            })


                        })
                    }
                })
            }
            // adding to cart
            let quantity=0
            let addBtns = document.querySelectorAll(".addBtn");
            for (let btn of addBtns) {
                btn.addEventListener("click", function (e) {
                    e.preventDefault();
                    let selectedItem = data[btn.name];
                    quantity++
                    //save to local
                    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
                    cartItems.push(selectedItem);
                    localStorage.setItem("cartItems", JSON.stringify(cartItems));


                    Swal.fire({
                        icon: 'success',
                        title: `${selectedItem.title} added to cart`,
                    });



                    //removing from cart
                    let remBtns = document.querySelectorAll(".remCartBtn");
                    for (let btn of remBtns) {
                        btn.addEventListener("click", function () {
                            Swal.fire({
                                title: 'Are you sure want to remove item from cart?',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, remove item.'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        icon: 'success',
                                        text: 'Item removed'
                                    }
                                    )
                                    sum -= Number(this.parentElement.querySelector('.price').textContent.replace('$', ''));
                                    cartHead.innerHTML = `<h3>Cart: $${sum.toFixed(2)} </h3>`;
                                    //   if(sum=="0.00"){
                                    //     cartHead.innerHTML = `<h3>Cart</h3>`;
                                    // }
                                    this.parentElement.remove()

                                }
                            })



                        })
                    }

                })
            }

            //info 
            let cardClicks = document.querySelectorAll(".card");
            cardClicks.forEach((card) => {
                card.addEventListener("click", function (e) {
                    e.preventDefault();
                    if (!e.target.closest(".favBtn") && !e.target.closest(".addBtn")) {
                        Swal.fire({
                            title: data[this.querySelector(".addBtn").name].title,
                            text: `${data[this.querySelector(".addBtn").name].description} Rated with ${data[this.querySelector(".addBtn").name].rating.rate}/5, you can get this item for $${data[this.querySelector(".addBtn").name].price} `,
                            imageUrl: data[this.querySelector(".addBtn").name].image,
                            imageWidth: 250,
                            imageHeight: 200,
                            imageAlt: 'Custom image',
                        });
                    }
                });
            });

        }).catch()
}
let creator = function (data) {
    data.forEach((element, i) => {
        products.innerHTML += `<div class="card product" style="width: 18rem;">
            <img name="${i}" class="cardImage card-img-top" src="${element.image}" alt="Card image cap">
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
                    <button type="button" name="${i}" class="addBtn btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>
                        <p>Cart</p>
                    </button>
                </div>
            </div>
        </div>`;

    });
    // adding to favorite
    let favBtns = document.querySelectorAll(".favBtn");
    for (let btn of favBtns) {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            // favHead.classList.toggle("reveal")
            favs.innerHTML += `
<div class="favElem"><img 
src=${data[btn.name].image}
alt="Card image cap">
    <div class="info">
        <p class="name">${data[btn.name].title}</p>
        <p class="price">$${data[btn.name].price}</p>
    </div>
    <button type="button" class="btn btn-light remFavBtn"><i class="fa-solid fa-trash"></i></button>
</div>`
            Swal.fire({
                icon: 'success',
                title: `${data[btn.name].title} added to favorites`,
            })

            //removing from favorites
            let remBtns = document.querySelectorAll(".remFavBtn");
            for (let btn of remBtns) {
                btn.addEventListener("click", function () {
                    Swal.fire({
                        title: 'Are you sure want to remove item from favorites?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, remove item.'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                icon: 'success',
                                text: 'Item removed'
                            }
                            )
                            this.parentElement.remove()
                        }
                    })


                })
            }
        })
    }

    // adding to cart
    let addBtns = document.querySelectorAll(".addBtn");
    for (let btn of addBtns) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            let selectedItem = data[btn.name];

            // local 
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            cartItems.push(selectedItem);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            Swal.fire({
                icon: 'success',
                title: `${selectedItem.title} added to cart`,
            });



            //removing from cart
            let remBtns = document.querySelectorAll(".remCartBtn");
            for (let btn of remBtns) {
                btn.addEventListener("click", function () {
                    Swal.fire({
                        title: 'Are you sure want to remove item from cart?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, remove item.'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                icon: 'success',
                                text: 'Item removed'
                            }
                            )
                            sum -= Number(this.parentElement.querySelector('.price').textContent.replace('$', ''));
                            cartHead.innerHTML = `<h3>Cart: $${sum.toFixed(2)} </h3>`;
                            //   if(sum=="0.00"){
                            //     cartHead.innerHTML = `<h3>Cart</h3>`;
                            // }
                            this.parentElement.remove()

                        }
                    })



                })
            }

        })
    }

    //info 
    let cardClicks = document.querySelectorAll(".card");
    cardClicks.forEach((card) => {
        card.addEventListener("click", function (e) {
            e.preventDefault();
            if (!e.target.closest(".favBtn") && !e.target.closest(".addBtn")) {
                Swal.fire({
                    title: data[this.querySelector(".addBtn").name].title,
                    text: `${data[this.querySelector(".addBtn").name].description} Rated with ${data[this.querySelector(".addBtn").name].rating.rate}/5, you can get this item for $${data[this.querySelector(".addBtn").name].price} `,
                    imageUrl: data[this.querySelector(".addBtn").name].image,
                    imageWidth: 250,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                });
            }
        });
    });
}
let fetcherLHP = function () {
    products.innerHTML = "";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.sort((a, b) => a.price - b.price);
            creator(data);

        }).catch()
}
let fetcherHLP = function () {
    products.innerHTML = "";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.sort((a, b) => b.price - a.price);
            creator(data);
        }).catch()
}
let fetcherLHR = function () {
    products.innerHTML = "";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.sort((a, b) => a.rating?.rate - b.rating?.rate);
            creator(data);

        }).catch();
}
let fetcherHLR = function () {
    products.innerHTML = "";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.sort((a, b) => b.rating?.rate - a.rating?.rate);
            creator(data);

        }).catch()
}

//default load
preFetch()
//all
all.addEventListener("click", function () {
    preFetch()
})
//men
men.addEventListener("click", function () {
    fetcher(mens)
});
//women
women.addEventListener("click", function () {
    fetcher(womens)
});
//jewelery
acc.addEventListener("click", function () {
    fetcher(jewelery)
});
//electronics
elecs.addEventListener("click", function () {
    fetcher(electronics)
});
//select option
filters.addEventListener("change", function () {
    let selectedOption = filters.options[filters.selectedIndex].value;
    switch (selectedOption) {
        case "lowToHighPrice":
            fetcherLHP()
            break;
        case "highToLowPrice":
            fetcherHLP()
            break;
        case "lowToHighRating":
            fetcherLHR()
            break;
        case "highToLowRating":
            fetcherHLR()
            break;
        default:
            break;
    }
});


