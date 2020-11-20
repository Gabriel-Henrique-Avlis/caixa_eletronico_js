let usuario_nome = prompt("Insira seu nome");

let usuario_atm = document.getElementById("usuario")

let notas = document.getElementById("notas");

usuario_atm.innerHTML = usuario_nome;

let resultado = document.getElementById("resultado");
let limpar = document.getElementById("limpar");



document.getElementById("numero-7").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-7").innerHTML);
});

document.getElementById("numero-8").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-8").innerHTML);
});

document.getElementById("numero-9").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-9").innerHTML);
});

document.getElementById("numero-4").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-4").innerHTML);
});

document.getElementById("numero-5").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-5").innerHTML);
});

document.getElementById("numero-6").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-6").innerHTML);
});

document.getElementById("numero-1").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-1").innerHTML);
});

document.getElementById("numero-2").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-2").innerHTML);
});

document.getElementById("numero-3").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-3").innerHTML);
});

document.getElementById("numero-0").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-0").innerHTML);
});

document.getElementById("calcular").addEventListener("click", function(){
    let nota_10 = 10;
    let nota_20 = 20;
    let nota_50 = 50;
    let nota_100 = 100;
    let resto_10 = resultado.value % nota_10;
    let resto_20 = resultado.value % nota_20;
    let resto_50 = resultado.value % nota_50;
    let resto_100 = resultado.value % nota_100;
    let resto_50_20 = resto_50 % nota_20;
    let resto_50_10 = resto_50 % nota_10;

    if (resto_10 != 0 && resto_20 != 0 && resto_50 != 0 && resto_100 != 0){
        resultado.value = "NÃO HÁ NOTAS DISPONÍVEIS";
        notas.value = "";
    }
    else if (resultado.value === ""){
        resultado.value = "INSIRA UM VALOR VÁLIDO"; 
        notas.value = "";
    }

    else if (resultado.value === "0"){
        resultado.value = "INSIRA UM VALOR VÁLIDO"; 
    }

    if(Number(resultado.value) === 100){
        quoficiente_100 = resultado.value / nota_100;
        notas.value = notas.value + quoficiente_100 + "x" + " R$ 100 ";
    }
    
    else if(resto_100 === 0 && resultado.value > 100){
        quoficiente_100 = Math.floor(resultado.value / nota_100);
        notas.value = notas.value + quoficiente_100 + "x" + " R$ 100 ";
    }
    
    else if(resto_100 >= 50){
        quoficiente_100_2 = Math.floor(resultado.value / nota_100);
        quoficiente_50 = Math.floor((resultado.value % nota_100) / nota_50);
        notas.value = notas.value + quoficiente_100_2 + " x " + "R$ 100 "
        notas.value = notas.value + quoficiente_50 + " x " + "R$ 50 ";
        if(resto_100 === 60){
            quoficiente_10 = Math.floor((resultado.value % nota_50) / nota_10);
            notas.value = notas.value + " " + quoficiente_10 + " x " + "R$ 10"
        }        
        if(resto_100 === 70){
            quoficiente_20 = Math.floor((resultado.value % nota_50) / nota_20);
            notas.value = notas.value + " " + quoficiente_20 + " x " + "R$ 20"
        }
        if(resto_100 === 80){
            quoficiente_20 = Math.floor((resultado.value % nota_50) / nota_20);
            quoficiente_10 = Math.floor((resto_50_20 % nota_20) / nota_10);
            notas.value = notas.value + " " + quoficiente_20 + " x " + "R$ 20"
            notas.value = notas.value + " " + quoficiente_10 + " x " + "R$ 10"
        }
        if(resto_100 === 90){
            quoficiente_20 = Math.floor((resultado.value % nota_50) / nota_20);
            notas.value = notas.value + " " + quoficiente_20 + " x " + "R$ 20"
        }
        if(resto_100 < 1){
            notas.value = "";
        }
    }

    else if(resto_50 === 20 || resto_50 === 40){
        quoficiente_100_3 = Math.floor(resultado.value / nota_100);
        quoficiente_20 = Math.floor((resultado.value % nota_100) / nota_20);
        notas.value = notas.value + quoficiente_100_3 + " x " + "R$ 100 ";
        notas.value = notas.value + quoficiente_20 + " x " + "R$ 20 ";
        if(resto_100 === 30){
            quoficiente_20 = Math.floor(resto_100 / nota_20);
            quoficiente_10 = Math.floor((resto_100 % nota_10) / nota_10);
            notas.value = notas.value + quoficiente_20 + " x " + "R$ 20";
            notas.value = notas.value + quoficiente_10 + " x " + "R$ 10";
        }
    }  

    else if(resto_100 === 30){
        quoficiente_100 = Math.floor(resultado.value / nota_100);
        quoficiente_20 = Math.floor(resto_100 / nota_20);
        quoficiente_10 = Math.floor((resultado.value % nota_20) / nota_10);
        notas.value = notas.value + quoficiente_100 + " x " + "R$ 100 ";
        notas.value = notas.value + quoficiente_20 + " x " + "R$ 20 ";
        notas.value = notas.value + quoficiente_10 + " x " + "R$ 10";
    }

    else if(resto_50 === 10){
        quoficiente_100_4 = Math.floor(resultado.value / nota_100);
        quoficiente_10 = Math.floor((resultado.value % nota_100) / nota_10);
        notas.value = notas.value + quoficiente_100_4 + " x " + "R$ 100 ";
        notas.value = notas.value + quoficiente_10 + " x " + "R$ 10";
    }  

    if(Number(resultado.value) === 50){
        quoficiente_50 = resultado.value / nota_50;
        notas.value = quoficiente_50 + "x" + " R$ 50"
    }
    if(resultado.value < 100 && resultado.value > 50 && resto_50 >= 20){
        quoficiente_50 = Math.floor(resultado.value / nota_50);
        quoficiente_20 = Math.floor((resultado.value % nota_50) / nota_20);
        notas.value = quoficiente_50 + "x" + " R$ 50 "
        notas.value = notas.value + quoficiente_20 + "x" + " R$ 20"
        if(resultado.value < 100 && resultado.value > 50 && resto_50 === 30){
            quoficiente_50 = Math.floor(resultado.value / nota_50);
            quoficiente_20 = Math.floor((resultado.value % nota_50) / nota_20);
            quoficiente_10 = Math.floor((resto_50 % nota_20) / nota_10);
            notas.value = quoficiente_50 + "x" + " R$ 50 "
            notas.value = notas.value + quoficiente_20 + "x" + " R$ 20 "
            notas.value = notas.value + quoficiente_10 + "x" + " R$ 10"
        }
    }

    if(resultado.value < 100 && resto_50 >= 10 && resto_50 < 20){
        quoficiente_50 = Math.floor(resultado.value / nota_50);
        quoficiente_10 = Math.floor((resultado.value % nota_50) / nota_10);
        notas.value = quoficiente_50 + "x" + " R$ 50 "
        notas.value = notas.value + quoficiente_10 + "x" + " R$ 10"
    }

    if(Number(resultado.value / 20 === 1)){
        quoficiente_20 = resultado.value / nota_20;
        notas.value = quoficiente_20 + "x" + " R$ 20"
    }

    else if(Number(resultado.value / 20 === 2)){
        quoficiente_20 = Math.floor(resultado.value / nota_20);
        notas.value = quoficiente_20 + "x" + " R$ 20";
    }

    else if(Number(resultado.value / 30 === 1)){
        quoficiente_20 = Math.floor(resultado.value / nota_20);
        quoficiente_10 = Math.floor((resultado.value % 20) / 10)
        notas.value = quoficiente_20 + "x" + " R$ 20 ";
        notas.value = notas.value + quoficiente_10 + "x" + " R$ 10";
    }

    if(Number(resultado.value / 10 === 1)){
        quoficiente_10 = Math.floor(resultado.value / nota_10);
        notas.value = quoficiente_10 + "x" + " R$ 10";
    }
    
    document.getElementById("numero-0").disabled = true;
    document.getElementById("numero-1").disabled = true;
    document.getElementById("numero-2").disabled = true;
    document.getElementById("numero-3").disabled = true;
    document.getElementById("numero-4").disabled = true;
    document.getElementById("numero-5").disabled = true;
    document.getElementById("numero-6").disabled = true;
    document.getElementById("numero-7").disabled = true;
    document.getElementById("numero-8").disabled = true;
    document.getElementById("numero-9").disabled = true;
    document.getElementById("calcular").disabled = true;

    document.getElementById("limpar").style.backgroundColor = "green";
});

limpar.addEventListener("click", function(){
    notas.value = "";
    resultado.value = "";
    document.getElementById("numero-0").disabled = false;
    document.getElementById("numero-1").disabled = false;
    document.getElementById("numero-2").disabled = false;
    document.getElementById("numero-3").disabled = false;
    document.getElementById("numero-4").disabled = false;
    document.getElementById("numero-5").disabled = false;
    document.getElementById("numero-6").disabled = false;
    document.getElementById("numero-7").disabled = false;
    document.getElementById("numero-8").disabled = false;
    document.getElementById("numero-9").disabled = false;
    document.getElementById("calcular").disabled = false;
    document.getElementById("limpar").style.backgroundColor = "gray";
})