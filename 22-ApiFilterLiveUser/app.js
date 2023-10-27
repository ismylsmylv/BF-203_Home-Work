let body = document.querySelector("body");
let searchBar = document.querySelector(".searchBar");
let search = document.querySelector(".search");
let results = document.querySelector(".results");
let resCard = document.querySelector(".profileImg");
let details = document.querySelector(".details");
let resName = document.querySelector(".resName");
let resLocation = document.querySelector(".resLocation");
let img = document.querySelector("img");
let randImg = "https://picsum.photos/100";

// Loaded results
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(element => {
            results.innerHTML += `
                <div class="resCard">
                    <div class="imgDetails">
                        <div class="profileImg">
                            <img src="${randImg}" alt="">
                        </div>
                        <div class="details">
                            <div class="resName">${element.name}</div>
                            <div class="resLocation">${element.address?.city}</div>
                        </div>
                    </div>
                    <button class="infoBtn" data-name="${element.name}" data-username="${element.username}" data-email="${element.email}">Learn more</button>
                </div>`;
        });

        // infoBtn 
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("infoBtn")) {
                e.preventDefault();
                let name = e.target.dataset.name;
                let username = e.target.dataset.username;
                let email = e.target.dataset.email;
                Swal.fire({
                    title: `${name}`,
                    text: `Username: ${username}, Email: ${email}`,
                    imageUrl: randImg,
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: 'user image',
                });
            }
        });
    });

// Search results
search.addEventListener("input", async function (e) {
    e.preventDefault();
    res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    let randImg = "https://picsum.photos/100";
    let matchedHTML = "";

    let matched = data.filter(element => {
        return element.name.trim().toLowerCase().includes(search.value.trim().toLowerCase());
    });

    let matchedCity = data.filter(element => {
        return element.address?.city?.trim().toLowerCase().includes(search.value.trim().toLowerCase());
    });

    let mergedResults = matched.concat(matchedCity);

    if (matched.length > 0 || matchedCity.length > 0) {
        mergedResults.forEach(element => {
            matchedHTML += `
                <div class="resCard">
                    <div class="imgDetails">
                        <div class="profileImg">
                            <img src="${randImg}" alt="">
                        </div>
                        <div class="details">
                            <div class="resName">${element.name}</div>
                            <div class="resLocation">${element.address?.city}</div>
                        </div>
                    </div>
                    <button class="infoBtn" data-name="${element.name}" data-username="${element.username}" data-email="${element.email}">Learn more</button>
                </div>`;
        });

        //infoBtn
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("infoBtn")) {
                e.preventDefault();
                let name = e.target.dataset.name;
                let username = e.target.dataset.username;
                let email = e.target.dataset.email;
                Swal.fire({
                    title: `${name}`,
                    text: `Username: ${username}, Email: ${email}`,
                    imageUrl: randImg,
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: 'user image',
                });
            }
        });
        results.innerHTML = matchedHTML;
    } else {
        results.innerHTML = ``;
    }
});
