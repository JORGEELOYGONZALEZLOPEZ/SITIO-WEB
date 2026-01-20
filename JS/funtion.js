function mostrarAlerta(){
    alert("Hola Bienvenido al sitio web");
}
function suma(){
    let valor1 = 5;
    let valor2 = 10;
    let resultado = valor1 + valor2;
    console.info("El resultado de la suma es = "+ resultado);
}
function sumaParam(valor1, valor2){
    console.info("El valor 1: "+valor1);
    console.info("El valor 2: "+valor2);
}
function calcularinput(){
    let val1 = document.getElementById("val1").value;
    let val2 = document.getElementById("val2").value;
    let res = parseFloat(val1)+parseFloat(val2);
    console.info("El resultado de la suma es: "+res)
    if(res>10){
        document.getElementById("mensaje").value="Numero mayor a 10";
    }else{
        document.getElementById("mensaje").value="Numero menor";
    }
}
// Agregar números al input valor1
function agregarnumeros(num) {
    document.getElementById("valor1").value += num;
}

// Agregar operadores
document.getElementById("suma").onclick = function () {
    document.getElementById("valor1").value += "+";
};

document.getElementById("resta").onclick = function () {
    document.getElementById("valor1").value += "-";
};

document.getElementById("multiplicacion").onclick = function () {
    document.getElementById("valor1").value += "*";
};

document.getElementById("division").onclick = function () {
    document.getElementById("valor1").value += "/";
};
document.getElementById("borrar").onclick = function () {
    document.getElementById("valor1").value = " ";
};

// Calcular resultado
document.getElementById("resultado").onclick = function () {
    let expresion = document.getElementById("valor1").value;

    try {
        let resultado = eval(expresion);
        document.getElementById("valor1").value = resultado;
    } catch (error) {
        document.getElementById("valor1").value = "Error";
    }
};