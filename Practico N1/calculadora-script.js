let $opciones = document.getElementById ('operacion');
let $resultado = document.getElementById ('resultado');
let $valor1 = document.getElementById ('valor1');
let $valor2 = document.getElementById ('valor2'); 
let $borrarbtn = document.getElementById ('Borrar');

function calcular() {
    let num1 = Number ($valor1.value);
    let num2 = Number ($valor2.value);
    let op = $opciones.value;
    let res;

    if ((isNaN ($valor1.value)) || (isNaN ($valor2.value))) {
        alert ('Algún valor o ambos valores ingresados, no son un valor numérico');
    } 
    else if (($valor1 === '') || ($valor2 === '')) {
        alert ('Ingresar un valor numérico en cada campo');
    }
    else if (op === "+") {
        res = num1 + num2;
    }
    else if (op === "-") {
        res = num1 - num2;
    }
    else if (op === "*") {
        res = num1 * num2;
    }
    else if (op === "/") {
        res = num1 / num2;
    }
     
    $resultado.value = res;
}

$borrarbtn.addEventListener(
        "click", function() {
            $valor1.value = "",
            $valor2.value = "",
            $resultado.value = ""
});


