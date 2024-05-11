let btnE1 = document.querySelector("button")

function createbubble(){
    var clutter = ""
    for(let i=0; i<42; i++){
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector(".pbuttom").innerHTML = clutter
}
createbubble()

let timer = 20
function runtime(){
    var interval = setInterval(() => {
        if (timer >= 0) {
            document.querySelector("#time").innerHTML = `${timer--}`
        }else{
            clearInterval(interval)
            document.querySelector(".pbuttom").innerHTML = `<h2>Game Over</h2>`
            btnE1.style.display = "block"

        }
    }, 1000);
}
runtime()

let hitrandomNo = 0
function getNewHit(){
    hitrandomNo = Math.floor(Math.random()*10)
    document.querySelector("#hit").innerHTML = `${hitrandomNo}`
}
getNewHit()

let score = 0
function increaseScore(){
    document .querySelector("#scoreval").innerHTML = score
    score +=10
}
increaseScore()

document.querySelector(".pbuttom").addEventListener('click', (details)=>{
    let clickNumber = Number(event.target.innerHTML)
    if (clickNumber === hitrandomNo) {
        increaseScore()
        getNewHit()
    }
})

btnE1.onclick = function(){
    window.location.reload()
}
