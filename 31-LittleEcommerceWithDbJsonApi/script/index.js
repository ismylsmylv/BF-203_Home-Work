let url = "http://localhost:3000/singers/";
let results = document.querySelector(".results");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elem, i) => {
      elem.count = 1;
      results.innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="cardImg"><img name="${elem.id}" src="${elem.image}" class="card-img-top" alt="singer"></div> 
          <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">${elem.name} is <b>${elem.nation}</b></p>
            <button href="" name="${elem.id}" class="btn btn-outline-primary details">Details</button>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger delete deleteBtn"><i class="fa-solid fa-trash"></i></button>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger favorite"><i class="fa-regular fa-heart"></i></button>
          </div>
        </div>`;
    });

    let detailBtn = document.querySelectorAll(".details");
    detailBtn.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(btn.getAttribute("name"));
        let elemId = btn.getAttribute("name");
        window.location.href = `details.html?id=${elemId}`;
      });
    });

    // Favorites
    let favItemsArr = [];
    let favItems = JSON.parse(localStorage.getItem("favorites"));

    if (favItems) {
      favItemsArr = [...favItems];
      let sup = document.querySelector(".favSup")
      let favoritesLocal = JSON.parse(localStorage.getItem("favorites"));
      sup.textContent = favoritesLocal.length;
    }

    let favorites = document.querySelectorAll(".favorite");

    favorites.forEach((btn) => {
      let isFavorite = favItemsArr.some((fav) => fav.id == btn.getAttribute("name"));

      if (isFavorite) {
        btn.querySelector("i").classList.add("fa-solid", "fa-regular");
      }

      btn.addEventListener("click", function (e) {
        e.preventDefault();
        let icon = this.querySelector("i");

        if (icon.classList.contains("fa-solid")) {
          icon.classList.remove("fa-solid")
          icon.classList.add("fa-regular");
          favItemsArr = favItemsArr.filter((elem) => elem.id != this.getAttribute("name"));

        } else {
          icon.classList.add("fa-solid", "fa-regular");
          favItemsArr.push(data.find((elem) => elem.id == this.getAttribute("name")));

        }

        localStorage.setItem("favorites", JSON.stringify(favItemsArr));
        let sup = document.querySelector(".favSup")
        let favoritesLocal = JSON.parse(localStorage.getItem("favorites"));
        sup.textContent = favoritesLocal.length;
      });
    });

    // Cart
    let cart = document.querySelectorAll(".cart");
    let cartItemsArr = [];
    let cartItems = JSON.parse(localStorage.getItem("cart"));

    if (cartItems) {
      cartItemsArr = [...cartItems];
    }

    for (let btn of cart) {
      btn.addEventListener("click", function (e) {
        console.log(this.name);

        if (cartItemsArr.find((elem) => elem.id == this.name)) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added to cart',
            showConfirmButton: false,
            timer: 1500
          });
          cartItemsArr.find((elem) => elem.id == this.name).count++;
          localStorage.setItem("cart", JSON.stringify(cartItemsArr));
          console.log(cartItemsArr);
        } else {
          console.log(this.classList);
          cartItemsArr.push(data.find((elem) => elem.id == this.name));
          localStorage.setItem("cart", JSON.stringify(cartItemsArr));
          console.log(cartItemsArr);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Removed from cart',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }

    //wishlist count
    let sup = document.querySelector("sup");
    if (JSON.parse(localStorage.getItem('cartMeals'))) {
      sup.textContent = (JSON.parse(localStorage.getItem('cartMeals'))).length;
    }

    //remove
    let deleteBtns=document.querySelectorAll(".deleteBtn")
    for(let btn of deleteBtns){
      btn.addEventListener("click", function(e){
        e.preventDefault()
        this.parentElement.parentElement.remove()
      })
    }




  });

let isLogged = JSON.parse(localStorage.getItem("loginId"))
console.log(isLogged);
let profile = document.querySelector("#profile")
let logOut = document.querySelector("#logOut")
let login = document.querySelector("#login")
let signup = document.querySelector("#signup")
if (isLogged) {
  login.style.display = "none"
  signup.style.display = "none"
}
else {
  profile.style.display = "none"
  logOut.style.display = "none"
}
logOut.addEventListener("click", function (e) {
  e.preventDefault()
  localStorage.removeItem("loginId")
  window.location.href = './index.html'
})

let search = document.querySelector(".searchInp");
let searchBtn = document.querySelector(".searchBtn");

search.addEventListener("input", async function (e) {
  e.preventDefault();
  let res = await fetch(url);
  let data = await res.json();
  let matchedHTML = "";

  let matched = data.filter(element => {
    return element.name.trim().toLowerCase().includes(search.value.trim().toLowerCase());
  });

  let matchedNation = data.filter(element => {
    return element.nation.trim().toLowerCase().includes(search.value.trim().toLowerCase());
  });

  let mergedResults = matched.concat(matchedNation);

  if (matched.length > 0 || matchedNation.length > 0) {
    mergedResults.forEach(elem => {
      matchedHTML += `
        <div class="card" style="width: 18rem;">
          <div class="cardImg"><img name="${elem.id}" src="${elem.image}" class="card-img-top" alt="singer"></div> 
          <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">${elem.name} is <b>${elem.nation}</b></p>
            <button href="" name="${elem.id}" class="btn btn-outline-primary details">Details</button>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger favorite"><i class="fa-regular fa-heart"></i></button>
          </div>
        </div>`;
    });
    results.innerHTML = matchedHTML;
  } else {
    results.innerHTML = "";
  }
});

searchBtn.addEventListener("input", async function (e) {
  e.preventDefault();
  let res = await fetch(url);
  let data = await res.json();
  let matchedHTML = "";

  let matched = data.filter(element => {
    return element.name.trim().toLowerCase().includes(search.value.trim().toLowerCase());
  });

  let matchedNation = data.filter(element => {
    return element.nation.trim().toLowerCase().includes(search.value.trim().toLowerCase());
  });

  let mergedResults = matched.concat(matchedNation);

  if (matched.length > 0 || matchedNation.length > 0) {
    mergedResults.forEach(elem => {
      matchedHTML += `
        <div class="card" style="width: 18rem;">
          <div class="cardImg"><img name="${elem.id}" src="${elem.image}" class="card-img-top" alt="singer"></div> 
          <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">${elem.name} is <b>${elem.nation}</b></p>
            <button href="" name="${elem.id}" class="btn btn-outline-primary details">Details</button>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger favorite"><i class="fa-regular fa-heart"></i></button>
          </div>
        </div>`;
    });
    results.innerHTML = matchedHTML;
  } else {
    results.innerHTML = "";
  }
});