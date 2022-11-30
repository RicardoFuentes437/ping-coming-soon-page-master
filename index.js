var subForm = document.querySelector('.sub-form');
var errorMessage = document.querySelector('.error-message');
var input = document.querySelector('.email-input');
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

subForm.addEventListener('submit', function(event){
    event.preventDefault();
    event.stopPropagation();
    if((input.value == '' || regex.test(input.value) == false)){
        input.style.border = "1px solid hsl(354, 100%, 66%)";
        
        if(input.value == ''){
            errorMessage.innerHTML = 'Whoops! It looks like you forgot to add your email';
        }else{
            errorMessage.innerHTML = 'Please provide a valid email address';
        }

        if(window.innerWidth < 650){
            var button = document.querySelector('.notify-button');
            button.style.marginTop = '40px';
            errorMessage.style.top = '-100px';
            errorMessage.style.left = '0%';
        }else{
            errorMessage.style.top = '0px';
            errorMessage.style.left = '-160px';
        }
        errorMessage.style.opacity = 1;
    }else{
        input.value = '';
        input.style.border = "1px solid hsl(0, 0%, 59%)";
        errorMessage.style.opacity = 0;
    }
})