const counterEl = document.querySelector(".counter")
const barEl = document.querySelector(".loading-bar-front")
const endEl = document.querySelector(".end-screen")

let idx = 0

updateLoad()

function updateLoad(){
    counterEl.innerText = idx + "%"
    barEl.style.width = idx +"%"
    idx++
    if(idx<101){
        setTimeout(updateLoad,100)
    }
    if(idx === 100){
        endEl.innerText = "Completed!"
    }
}