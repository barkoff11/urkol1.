const openPopup = document.getElementById('open_pop_up');
const closePopup = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const openPopup1= document.getElementById('open_pop_up1');
const closePopup1 = document.getElementById('pop_up_close1');
const popUp1 = document.getElementById('pop_up1');
const openPopup2= document.getElementById('open_pop_up2');
const closePopup2 = document.getElementById('pop_up_close2');
const popUp2 = document.getElementById('pop_up2');


openPopup.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');

})

closePopup.addEventListener('click', () => {
    popUp.classList.remove('active');
})

openPopup1.addEventListener('click', function(e){
    e.preventDefault();
    popUp1.classList.add('active');

})

closePopup1.addEventListener('click', () => {
    popUp1.classList.remove('active');
})

openPopup2.addEventListener('click', function(e){
    e.preventDefault();
    popUp2.classList.add('active');

})

closePopup2.addEventListener('click', () => {
    popUp2.classList.remove('active');
})
