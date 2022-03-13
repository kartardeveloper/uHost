const planButton = document.querySelectorAll('.plan__button');
const backDrop = document.querySelector('.backdrop');
const modalsecondButton = document.getElementById('modal__second-button')

planButton.forEach(function(button){
    button.addEventListener('click',() => {
        backDrop.style.display = 'block';

        let modalIn = gsap.timeline();
        modalIn.fromTo('.modal',0.7,{top:'-40%' , display:'none'},{top:'20%' , display:'block'})
    })
})

function modalClose(button){
    button.addEventListener('click',() => {
        setTimeout(() => {
            backDrop.style.display = 'none';
        },500)

        let modalOut = gsap.timeline();
        modalOut.fromTo('.modal',0.7,{top:'20%' , display:'block'},{top:'-40%' , display:'none'})
    })
}

modalClose(backDrop);
modalClose(modalsecondButton);