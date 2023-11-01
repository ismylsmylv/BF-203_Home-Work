let url = "http://localhost:3000/singers/";
let results = document.querySelector(".results");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elem, i) => {
      results.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img name="${elem.id}" src="${elem.image}" class="card-img-top" alt="singer">
          <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">${elem.name} is <b>${elem.nation}</b></p>
            <a href="details.html?id=${elem.id}" class="btn btn-outline-primary details">Details</a>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger favorite"><i class="fa-regular fa-heart"></i></button>
          </div>
        </div>`;
    });

    let detailBtn = document.querySelectorAll(".details");
    detailBtn.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log( e.target);
        let elemId = e.target.getAttribute("name");
        window.open(`details.html?id=${elemId}`, "_blank");
      });
    });
  });
