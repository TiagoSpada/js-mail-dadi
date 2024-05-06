'use strict';

const mailList = ['tiago24@gmail.com', 'leda03@gmail.com', 'stella18@gmail.com', 'richi99@gmail.com'];
let canAccess = false;

const userMail = document.getElementById('input-mail');
const CheckButton = document.getElementById('check-button');


CheckButton.addEventListener('click', function(){
    const userMailValue = userMail.value.toLowerCase();
    console.log(userMailValue);
    for(let i=0; i<mailList.length; i++){
        if (mailList[i] === userMailValue){
            canAccess = true;
        }
    }
    if(canAccess === true){
        console.log('Puoi accedere');
    }
    else{
        console.log('Non puoi accedere');
    }
})
