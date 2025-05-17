let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

let myLeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(myLeadsFromLocalStorage){
    myLeads = myLeadsFromLocalStorage
    render(myLeads)
}
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

    })
})

deleteBtn.addEventListener("dblclick",function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
       listItems += `
       <li>
       <a href=${leads[i]} target="_blanck">
       ${leads[i]}
       </a>
       </li>`
    }
    ulEl.innerHTML = listItems
}