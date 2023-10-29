let url = "https://northwind.vercel.app/api/suppliers"
let inputs = document.querySelector(".inputs")
let cards = document.querySelector(".cards")
let companyName = document.querySelector("#companyName")
let contactName = document.querySelector("#contactName")
let contactTitle = document.querySelector("#contactTitle")
let getBtn = document.querySelector(".get")
let postBtn = document.querySelector(".post")
let putBtn = document.querySelector(".put")
let patchBtn = document.querySelector(".patch")
let deleteBtn = document.querySelector(".delete")

getBtn.addEventListener("click", function (e) {
    e.preventDefault()
    // console.log(companyName.value);
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data);
        data.forEach(elem => {
            if (companyName.value == elem.companyName) {
                console.log(elem.companyName);
                return
            }
            else{
                console.log("not");
            }
        });
    })
})