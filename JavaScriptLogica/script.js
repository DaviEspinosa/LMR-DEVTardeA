function concatenar(){
    let nome = document.getElementById("pNome").value
    let sobrenome = document.getElementById("pSobre").value

    if (nome==null && sobrenome==null) {

        alert("Digite seu nome e sobrenome por favor ")
    }
    else{
        alert("Olá "+nome+" "+sobrenome)
    }
   
    
}