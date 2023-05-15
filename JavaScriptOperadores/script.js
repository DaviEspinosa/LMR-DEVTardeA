function boasVindas() {
    let nome;
    let sobrenome;

    nome = prompt("Digite seu nome", "Digite Aqui: ");
    sobrenome = prompt("Digite seu sobrenome", "Digite Aqui: ");

    alert("Olá " + nome + " " + sobrenome);
}
function somarN() {
    let n1, n2, soma;

    n1 = prompt("Digite número 1", "Digite aqui")
    n2 = prompt("Digite número 2", "Digite aqui")
    soma = parseInt(n1) + parseInt(n2);
    alert(n1 + "+" + n2 + "=" + soma)
}
function subtracaoN() {
    let n1, n2, subtracao;

    n1 = prompt("Digite número 1", "Digite aqui")
    n2 = prompt("Digite número 2", "Digite aqui")
    subtracao = parseInt(n1) - parseInt(n2)
    alert(n1 + "-" + n2 + "=" + subtracao)
}
 function multiplicacaoN() {
    let n1, n2, multiplicacao;

    n1 = prompt("Digite número 1", "Digite aqui");
    n2 = prompt("Digite número 2", "Digite aqui");
    multiplicacao = parseInt(n1) * parseInt(n2);
    alert(n1 + "." + n2 + "=" + multiplicacao)
}
function divisaoN() {
    let n1, n2, divisao;

    n1 = prompt("Digite número 1", "Digite aqui")
    n2 = prompt("Digite número 2", "Digite aqui")
    divisao = parseInt(n1) / parseInt(n2)
    
    if (n2!=0) {
        alert(n1 + "/" + n2 + "=" + divisao)
        
        
    }
    else{
        alert("Não se dividi um nº por 0")
    }
}