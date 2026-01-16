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
function agregarnumeros(){
    document.getElementById("valor1").value += numero;

}