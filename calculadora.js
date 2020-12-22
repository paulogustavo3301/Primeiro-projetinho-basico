var resultado;
var valor;
function botao(num){
    valor = document.calc.visor.value += num;
}
function reseta(){
    document.calc.visor.value = '';
}

function calcula(){
    resultado = eval(valor);
    document.calc.visor.value = resultado.toLocalesString('pt br')
}


function GO(a){  
    
    var operação = a.value;

    var n1=parseFloat(document.getElementById("n1").value);
    var n2=parseFloat(document.getElementById("n2").value);

    var calculo = eval(n1+operacao+n2);
    
    if(!isNaN(calculo)){
        alert(calculo);
     }
   
    
}