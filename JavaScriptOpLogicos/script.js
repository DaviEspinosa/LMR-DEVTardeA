

function NparImpar() {
    let numero = document.getElementById("nDigitado").value;
    let verificar = parseInt(numero) % 2;
    if (verificar == 0) {
        alert("o numero " + numero + " é par");
    }
    else {
        alert("o número " + numero + " é impar");
    }
}
function calculador(){
let valor1 = parseInt(document.getElementById("nvalor1").value);
let valor2 = parseInt(document.getElementById("nvalor2").value);
let opreracao = document.getElementById("pOperacao").value;
let resultado;
switch (opreracao) {
    case "+":
        resultado = valor1 + valor2;
        break;
        case "-":
            resultado = valor1 - valor2;
            break;
            case "*":
        resultado = valor1 * valor2;
        break;
        case "/":
        if (valor2 != 0) {
            resultado
        = valor1 / valor2;}
        break;
    default:
        alert("Selecione números validos ")
        break;
}
alert("O resultado é: "+resultado);
}
