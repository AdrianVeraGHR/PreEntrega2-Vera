// CODIGO
alert("Las conversiones no consideran los interes aplicados en el país correspondiente, y utilizar de referencia el valor oficial del mismo");

let respuesta = false
let moneda = prompt ("Ingrese la moneda que desea convertir a ARS", "USD | EUR | JPY | GBP")

while (respuesta == false){    
    console.log("La moneda es:" + moneda.toUpperCase());
    respuesta = verificar_moneda(moneda.toUpperCase());
    if (respuesta == false){
        moneda = prompt ("Ingrese la moneda que desea convertir a ARS", "USD | EUR | JPY | GBP")
    }else{
        console.log("La respuesta es:" + respuesta);
    }
}

let valor_moneda = establece_cambio(moneda.toUpperCase());
console.log("El valor de cambio es:" + valor_moneda);
let monto = prompt ("Ingrese la cantidad de dinero en " + moneda);
let monto_convertido = convierte_dinero(monto, valor_moneda);
console.log("En total: " + monto_convertido + " " + moneda);
alert("El total en ARS es: " + monto_convertido)


// FUNCIONES
function convierte_dinero(dinero, conversor){
    let total = dinero * conversor;
    return(total);
}

function verificar_moneda(tipo){
    let respuesta = false;
    if (tipo == "USD" || tipo == "EUR" || tipo == "JPY" || tipo == "GBP"){
        alert("La moneda que va a utilizar es " + tipo + "\nMuchas gracias")
        respuesta = true
    }else{
        alert("Moneda ingresada invalida - Ingrese nuevamente por favor")
    }
    return(respuesta);
}

function establece_cambio(tipo){
    let cambio;
    if (tipo == "USD"){
        cambio = 258;
    }else if (tipo == "EUR"){
        cambio = 283;
    }else if (tipo == "JPY"){
        cambio = 2;
    }else if (tipo == "GBP"){
        cambio = 332;
    }
    return(cambio);
}