var A = document.getElementById('A');
var B = document.getElementById('B');

function reducao() {

    if (A.checked == true) {
        document.getElementById('a').readOnly = false;
    }
    else {
        document.getElementById('a').readOnly = true;
    }
    
    if (B.checked == true) {
        document.getElementById('b').readOnly = false;
    }
    else {
        document.getElementById('b').readOnly = true;
    }
}

function calcular() {
    a = Number(window.document.getElementById('a').value);
    b = Number(window.document.getElementById('b').value);

    if (a != '' && b != '') {
        fazerTudo();
    }
    
    else {
        return window.alert('Digite os valores de A e B');
    }
}

function fazerTudo() {

    let soma = a + b;
    let sub = a - b;
    let mult = a*b;
    let div = a/b;

    window.document.getElementById('s').value = soma;
    window.document.getElementById('sb').value = sub;
    window.document.getElementById('m').value = mult;
    window.document.getElementById('d').value = div;
}
