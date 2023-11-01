let boxes = document.querySelectorAll(".box")
let ranks = document.querySelectorAll(".rank")
for (let box of boxes) {
    box.addEventListener("dragstart", function (e) {
        let selected = e.target
        for (let rank of ranks) {
            rank.addEventListener("dragover", function (e) {
                e.preventDefault()
            })
            rank.addEventListener("drop", function (e) {
                e.preventDefault()
                rank.appendChild(selected)
                selected = null
            })
        }
    })
}