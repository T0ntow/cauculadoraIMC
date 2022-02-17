var caucular = document.getElementById('button')


function somarValor() {

    var altura = Number(document.getElementById('altura').value);
    var peso = Number(document.getElementById('peso').value);

    var quadrado = altura/100 * altura/100;
    var s = peso/quadrado;

    const resultado = Number(s.toFixed(2));
    
    var final = document.getElementById('tela1')
    var final2 = document.getElementById('tela2')

    if (peso,altura == ""){
       window.alert("*obrigatório o preenchimento dos campos*")
    }
    else{
        final.innerHTML = `Seu IMC é = ${resultado}`;
    }
  

    if(resultado>=40){
        final2.innerHTML = `Obesidade III (mórbida)`;
        document.getElementById('tela_baixo').style.backgroundColor = '#ff3300e5';
    }
    if(resultado<=39.9){
        final2.innerHTML = `Obesidade II`;
        document.getElementById('tela_baixo').style.backgroundColor = '#ff6d0be5'; 
    }
    if(resultado<=34.9){
        final2.innerHTML = `Obesidade I`;
        document.getElementById('tela_baixo').style.backgroundColor = '#ffaa0be5';
    }
    if(resultado<=29.9){
        final2.innerHTML = `Sobrepeso`;
        document.getElementById('tela_baixo').style.backgroundColor = '#efff0be5';
    }
    if(resultado<=24.9){
        final2.innerHTML = `Peso ideal`;
        document.getElementById('tela_baixo').style.backgroundColor = '#00ce4f';
    }
    if(resultado<=18.5){
        final2.innerHTML = `Baixo Peso`;
        document.getElementById('tela_baixo').style.backgroundColor = '#0aaff0';
    }
    if(resultado<=17){
        final2.innerHTML = `Muito baixo peso`;
        document.getElementById('tela_baixo').style.backgroundColor = '#0a66f0';
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

