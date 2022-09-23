const cartButton = document.querySelector("#cart")
const modal = document.querySelector("#modal")
const closeModal = document.querySelector("#close")

function toogleCartClass (){
    modal.classList.toggle("modal-active")
}

cartButton.addEventListener("click", ()=>{
    toogleCartClass()
})
closeModal.addEventListener("click", ()=>{
    toogleCartClass()
})

new WOW().init();
