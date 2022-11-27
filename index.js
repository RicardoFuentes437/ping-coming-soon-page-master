var subForm = document.querySelector('.sub-form');
var errorMessage = document.querySelector('.error-message');
var input = document.querySelector('.email-input');
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

subForm.addEventListener('submit', function(event){
    event.preventDefault();
    if(input.value == '' || regex.test(input.value) == false){
        input.style.border = "3px solid hsl(354, 100%, 66%)";
        errorMessage.style.opacity = 1;
    }else{
        input.value = '';
    }
})