//DATO SIN INTERACCION DEL USUSARIO
let InflacionMensual = 5;
let plazoFijo = 0.45;

alert("CONVIENE COMPRAR DE CONTADO O FINANCIADO? VAMOS A VER...")

//DATOS QUE INGRESA EL USUARIO

let valorContado = parseInt(prompt("Ingrese el precio abonando de contado"));
let valorFinanciado = parseInt(prompt("Ingrese el precio final financiado abonando con tarjeta (valor cuota por cantidad de meses)"));
let cantidadDeCuotas = parseInt(prompt("Ingrese la cantidad de cuotas"));

function operacionConveniente() {
    let diferenciaMedio = valorFinanciado - valorContado; //calcula diferencia total de monto financiado y contado
    let diferenciaPorcentaje = (diferenciaMedio / valorContado)*100; //
    let diferenciaMensual = (diferenciaPorcentaje / cantidadDeCuotas);

    if (diferenciaMensual <= InflacionMensual){
        alert("TE CONVIENE COMPRAR EN CUOTAS, INVERTI EL EFECTIVO DE MANERA EFICIENTE!");
        alert("Que hacemos con el efectivo??");
        alert(`Si lo invertis en Plazo fijo por ejemplo..` )
        inversion()

    }   else{
        alert("USA EL EFECTIVO, TE MATAN CON EL INTERES")
    }
}


alert("Calculando........");
operacionConveniente();


function inversion (){
    let gananciaInvertida = ((valorContado*plazoFijo) / cantidadDeCuotas);
    alert(`Ahorraste $ ${gananciaInvertida}  por mes`);
    let gananciaTotal = gananciaInvertida * cantidadDeCuotas
    alert (`o bien ${gananciaTotal} en los ${cantidadDeCuotas} meses de la financiacion`)
}//CALCULAR QUE HACER CON EL EFECTIVO Y CUANTO LE PODEMOS SACAR EN CASO DE INVERTIRLO EN X CANT DE MESES

