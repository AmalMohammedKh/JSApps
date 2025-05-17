let count = 0
let countEl = document.getElementById("counter-el")
let saveEl = document.getElementById("save-el")
let saveBtn = document.getElementById("save-btn")
let increamentBtn = document.getElementById("increament-btn")


saveBtn.addEventListener('click',function () {
    save()
})
increamentBtn.addEventListener('click',function () {
    increment()
})
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


function increment(){
    count+=1
    countEl.textContent = count
}

console.log("Let's count people on subway app!!")