/*-----HAMBURGUER-NAV----- */

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


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


/* ===== Username =====*/
if (usernameValue == '') {
    setErrorFor(username, 'O nome é obrigatorio.');
}
else{
    setSuccessFor(username);
}

/*===== Email =====*/
if (emailValue == '') {
    setErrorFor(username, 'O email é obrigatorio.');
}
else if(!checkEmail(emailValue)) {
    setErrorFor(email, 'Por favor, insira um email válido')
}
else{
    setSuccessFor(email);
}      

/*===== Password =====*/
if (passwordValue == '') {
    setErrorFor(password, 'A senha é obrigatoria.');
}
else if(passwordValue.lenght < 7){
    setErrorFor(password, 'A senha precisa ter no mínimo 7 caracteres.')
}

/*=====Password Confirmation===== */
if (passwordConfirmationValue == '') {
    setErrorFor(passwordConfirmationValue, 'A confirmação de senha é obrigatória.')
}
else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmationValue, 'As senhas nçao conferem')
}
else{
    setSuccessFor(passwordConfirmation)
}
const formControl = form.querySelectorAll('.form-control')

const formIsValid = [ ...formControls].every((formControl) => {
    return (formControl.className === 'form-control sucess');
});
if (formIsValid) {
    console.log('O formulário está completo')
}
}
function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  //adicionando messagem de erro
  small.innerText = message;

  //adicionando classe de erro
  formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;

    // Adicionar classe de sucesso
    formControl.className = 'form-control success';
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
