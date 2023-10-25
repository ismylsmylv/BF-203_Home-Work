let accordions = document.querySelectorAll(".accordion");

for (let i = 0; i < accordions.length; i++) {
    let panel = accordions[i].querySelector(".panel");
    let buttonIcon = accordions[i].querySelector(".fa-chevron-down");
    if (panel) {
        panel.style.display = "none";
    }
    accordions[i].addEventListener("click", function (e) {
        e.preventDefault();
        buttonIcon.classList.toggle("fa-chevron-down");
        buttonIcon.classList.toggle("fa-circle-xmark");
        this.classList.toggle("open");
        if (panel) {
            let panelStyle = window.getComputedStyle(panel);
            if (panelStyle.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    });
}

