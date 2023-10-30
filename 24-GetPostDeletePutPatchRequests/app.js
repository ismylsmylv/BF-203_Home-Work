let url = "https://northwind.vercel.app/api/suppliers/"
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

//functions
function creator(data) {
    cards.innerHTML += `<div class="card col-3">
        <div class="image"><img src="https://picsum.photos/200" alt=""></div>
        <div class="details">
            <div class="id">${data.id}</div>
            <div class="companyName">${data.companyName}</div>
            <div class="contactName">${data.contactName}</div>
            <div class="contactTitle">${data.contactTitle}</div>
        </div>
    </div>`;
}

function remover(elementId) {
    // Remove the corresponding element from the UI
    let removedElement = document.getElementById(elementId);
    if (removedElement) {
        removedElement.remove();

    }
}

//buttons
getBtn.addEventListener("click", function (e) {
    e.preventDefault()
    // console.log(companyName.value);
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data);
        data.forEach((elem, index) => {
            creator(elem, index)
        })

    })
})

postBtn.addEventListener("click", function () {
    let details = {
        companyName: companyName.value,
        contactName: contactName.value,
        contactTitle: contactTitle.value,
        author: "ismylsmylv"
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    })
        .then((res) => res.json())
        .then(data => {
            creator(data, data.id)
        })
})
putBtn.addEventListener("click", function () {
    let details = {
        companyName: companyName.value,
        contactName: contactName.value,
        contactTitle: contactTitle.value,
        author: "ismylsmylv"
    }

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    })
        .then((res) => res.json())
        .then(data => {
            if (Array.isArray(data)) {
                data.forEach(elem => {
                    cards.innerHTML += creator(elem);
                });
            }
        })

})

deleteBtn.addEventListener("click", function () {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(elem => {
                let matched =
                    elem.companyName === companyName.value ||
                    elem.contactName === contactName.value ||
                    elem.contactTitle === contactTitle.value;

                if (matched) {
                    fetch(url + elem.id, {
                        method: "Delete"
                    })
                        .then(res => res.json())
                        .then(() => {
                            console.log(`deleted ${elem.id}`);
                            elem.innerHTML = ""
                            remover(elem.id);

                        })
                }
            });
        })
});
