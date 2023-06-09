const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit' , (e) => {e.preventDefault();});

function checkInputs(){ /*checkInputs =  verificar inputs para executar operações de  error ou success */

const usernameValue = username.value
const emailValue = email.value
const passwordValue = password.value
const passwordConfirmationValue = passwordConfirmation.value

/*Verificando um input/value de cada vez */
if (usernameValue) {
    
}
}      