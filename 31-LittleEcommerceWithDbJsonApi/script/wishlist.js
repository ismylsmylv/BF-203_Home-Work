let wishList = document.querySelector(".wishList")
let wishItemfavCount = document.querySelector(".wishItemfavCount")
let favSup = document.querySelector(".favSup")
let favCount = 0
// let sup = document.querySelector(".sup")

let favCart = JSON.parse(localStorage.getItem("favorites"))
for (let elem of favCart) {
    favCount++
    favSup.textContent = favCount
    wishList.innerHTML += `
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" style="width:100%">
                    <div class="flex w-2/5"> <!-- product -->
                        <a href="#" class="w-20 details" name="${elem.id}">
                            <img class="h-24" style="object-fit:cover"  src="${elem.image}"
                                alt="">
                        </a>
                        <div class="flex flex-col justify-between ml-4 flex-grow">
                            <a href="#" name="${elem.id}" class="details"><span class="font-bold text-sm">${elem.name}</span></a>
                            <span class="text-red-500 text-xs">${elem.genre}</span>
                            <a class="removeCart font-semibold hover:text-red-500 text-gray-500 text-xs" style="cursor:pointer">Remove</a>
                            
                        </div>
                    </div>
                  
                </div>
    `
    let detailBtn = document.querySelectorAll(".details");
    detailBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(btn.getAttribute("name"));
            let elemId = btn.getAttribute("name");
            window.location.href = `details.html?id=${elemId}`;
        });
    });

    let removeCart = document.querySelectorAll(".removeCart")

    for (let btn of removeCart) {
        btn.addEventListener("click", function () {
            let indexToRemove = Array.from(this.closest('.wishList').children).indexOf(this.parentElement.parentElement.parentElement);
            favCart.splice(indexToRemove, 1);
            localStorage.setItem("favorites", JSON.stringify(favCart));
            this.parentElement.parentElement.parentElement.remove();
            --favCount;
            favSup.textContent = favCount;
        });

    }


}

let favMeals = JSON.parse(localStorage.getItem("favMeals"))
for (let elem of favMeals) {
    favCount++
    favSup.textContent = favCount
    wishList.innerHTML += `
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" style="width:100%">
                    <div class="flex w-2/5"> <!-- product -->
                        <a href="#" class="w-20 details" name="${elem.id}">
                            <img class="h-24" style="object-fit:cover"  src="${elem.image}"
                                alt="">
                        </a>
                        <div class="flex flex-col justify-between ml-4 flex-grow">
                            <a href="#" name="${elem.id}" class="details"><span class="font-bold text-sm">${elem.name}</span></a>
                           
                            <a class="removeCart font-semibold hover:text-red-500 text-gray-500 text-xs" style="cursor:pointer">Remove</a>
                            
                        </div>
                    </div>
                  
                </div>
    `
    let detailBtn = document.querySelectorAll(".details");
    detailBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(btn.getAttribute("name"));
            let elemId = btn.getAttribute("name");
            window.location.href = `detailMeal.html?id=${elemId}`;
        });
    });

    let removeCart = document.querySelectorAll(".removeCart")

    for (let btn of removeCart) {
        btn.addEventListener("click", function () {
            let indexToRemove = Array.from(this.closest('.wishList').children).indexOf(this.parentElement.parentElement.parentElement);
            favMeals.splice(indexToRemove, 1);
            localStorage.setItem("favorites", JSON.stringify(favMeals));
            this.parentElement.parentElement.parentElement.remove();
            --favCount;
            favSup.textContent = favCount;
        });

    }
}


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