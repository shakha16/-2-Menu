let btn = document.querySelector('.bur')
let menu = document.querySelector('.menu')
let burg = document.querySelector('.burger')
let cancel = document.querySelector('.cancel')
btn.onclick = () =>{
    burg.className = "cancel"
    cancel.className = "burg"
    console.log('click');
    if(cancel.className = 'burger'){
        menu.className = "menu2"
    }
}
cancel.onclick = () => {
    cancel.className = "cancel"
    burg.className = "burger"
    menu.className = "menu"
}