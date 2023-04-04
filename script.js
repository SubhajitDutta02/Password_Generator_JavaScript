const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input")
const copyIcon = document.querySelector(".fa-copy")
const alertContainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click",()=>{
    createPassword()
})

copyIcon.addEventListener("click",()=>{
    copyPassword()
    alertContainerEl.classList.remove("active")
    setTimeout(()=>{
        alertContainerEl.classList.add("active")
    },2000)
})

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 14
    let password = ""
    for (let index = 0; index < passwordLength ; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber+1)
    }
    inputEl.value = password
    alertContainerEl.innerText = password + " copied!"
    // in this upper line this is here because password is only access here passwordis not access in the copyPassword function because password is block level scope
}

function copyPassword(){
    inputEl.select()
    inputEl.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(inputEl.value)
    
}