var caucular = document.getElementById('button')


function somarValor() {

    var altura = Number(document.getElementById('altura').value);
    var peso = Number(document.getElementById('peso').value);
    var nome = document.getElementById('nome').value;

    var quadrado = altura/100 * altura/100;
    var s = peso/quadrado;

    const resultado = Number(s.toFixed(2));
    
    var final = document.getElementById('tela1')
    var final2 = document.getElementById('tela2')
    final.innerHTML = `Olá ${nome}! Seu IMC é = ${resultado}`;

    if(resultado>=Number(40)){
        final2.innerHTML = `Obesidade III (mórbida)`;
    }
    if(resultado<=Number(39.9)){
        final2.innerHTML = `Obesidade II`;
    }
    if(resultado<=Number(34.9)){
        final2.innerHTML = `Obesidade I`;
    }
    if(resultado<=Number(29.9)){
        final2.innerHTML = `Sobrepeso`;
    }
    if(resultado<=Number(24.9)){
        final2.innerHTML = `Peso ideal`;
    }
    if(resultado<=Number(18.5)){
        final2.innerHTML = `Baixo Peso`;
    }
    if(resultado<Number(17)){
        final2.innerHTML = `Muito baixo peso`;
    }
   
}

// Evento que é executado ao clicar no botão de enviar


document.getElementById("button").onclick = function(e) {
    
    somarValor();
}

window.addEventListener('keydown', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var enter = codigoTecla == 13;
    if (enter) {
        somarValor();
    }
});

