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
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });