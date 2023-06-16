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


  /*-----SLIDES----- */

  let radio = document.querySelector('.manual-btn')
let cont =  1

document.getElementById('radio1').checked = true

// declarando intervalo entre uma imagem e outra (carrossel)
setInterval(() => {
    proximaImage()
},4000)

function proximaImage(){
    cont++

    if (cont > 3) { //com <if> estou declarando que o contador, quando ele bater no 3, retorne a primeira imagem pois só tenho 3 imagens 
        cont = 1
    }

    document.getElementById('radio'+ cont).checked = true
}


//-------CARROSSEL (Lorenzo)-------
const carouselVisible = document.querySelector(".carousel-visible");
const carousel = carouselVisible.querySelector(".carousel");
const prevButton = document.querySelectorAll(".prvItem");
const nextButton = document.querySelectorAll(".nxtItem");

let currentIndex = 0;

function moveToNextItem() {
    const itemWidth = carousel.querySelector(".carousel-item").offsetWidth;
    const containerWidth = carouselVisible.offsetWidth;
    const maxVisibleIndex = Math.floor(carousel.scrollWidth / itemWidth) - Math.floor(containerWidth / itemWidth);
    
    if (currentIndex < maxVisibleIndex) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    checkLastItem();
}

function moveToPrevItem() {
    const itemWidth = carousel.querySelector(".carousel-item").offsetWidth;
    
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    checkLastItem();
}

function checkLastItem() {
    const itemWidth = carousel.querySelector(".carousel-item").offsetWidth;
    const containerWidth = carouselVisible.offsetWidth;
    const visibleItems = Math.floor(containerWidth / itemWidth);
    const maxVisibleIndex = Math.floor(carousel.scrollWidth / itemWidth) - visibleItems;

    if (currentIndex >= maxVisibleIndex) {
        nextButton.forEach(button => {
            button.classList.add("disabled");
            button.disabled = true;
        });
    } else {
        nextButton.forEach(button => {
            button.classList.remove("disabled");
            button.disabled = false;
        });
    }

    if (currentIndex === 0) {
        prevButton.forEach(button => {
            button.classList.add("disabled");
            button.disabled = true;
        });
    } else {
        prevButton.forEach(button => {
            button.classList.remove("disabled");
            button.disabled = false;
        });
    }
}

nextButton.forEach(button => {
    button.addEventListener("click", moveToNextItem);
});
prevButton.forEach(button => {
    button.addEventListener("click", moveToPrevItem);
});

// Verificar estado inicial do carrossel
checkLastItem();