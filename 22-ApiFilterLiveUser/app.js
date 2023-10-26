let body = document.querySelector("body")
let searchBar = document.querySelector(".searchBar")
let search = document.querySelector(".search")
let results = document.querySelector(".results")
let resCard = document.querySelector(".profileImg")
let details = document.querySelector(".details")
let resName = document.querySelector(".resName")
let resLocation = document.querySelector(".resLocation")
let img = document.querySelector("img")


search.addEventListener("input", async function (e) {
    e.preventDefault()
    res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json()
    //console.log(data);
    results.innerHTML=``
    data.forEach(element => {
        if (element.name.toLowerCase().includes(search.value.toLowerCase())) {
            // console.log(element);
            results.innerHTML+=`
            <div class="resCard">
            <div class="profileImg">
                <img src="" alt="https://picsum.photos/100">
            </div>
            <div class="details">
                <div class="resName">${element.name}</div>
                <div class="resLocation">${element.address?.city}</div>
            </div>
        </div>
            `
        }
        else{
            results.innerHTML=``
        }
    })
})