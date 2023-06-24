const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close-modal")
const overlay = document.querySelector(".overlay")
const showModals = document.querySelectorAll('.show-modal')

const modalOpen = ()=> {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

const modalClose = ()=> {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

for(let i = 0; i < showModals.length; i++){
    showModals[i].addEventListener("click", modalOpen)
}

closeModal.addEventListener('click', modalClose)

document.addEventListener('keydown', (e)=> {
 if(  e.key === "Escape"){
    modalClose()
 }

})