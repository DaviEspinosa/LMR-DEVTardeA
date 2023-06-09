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