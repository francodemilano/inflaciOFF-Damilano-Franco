//DATO SIN INTERACCION DEL USUSARIO
let InflacionMensual = 5;
let plazoFijo = 0.45;

/* alert("CONVIENE COMPRAR DE CONTADO O FINANCIADO? VAMOS A VER...") */

//DATOS QUE INGRESA EL USUARIO



function operacionConveniente() {
    let valorContado = document.getElementById("PrecioContado").value;
    let valorFinanciado = document.getElementById("PrecioFinanciado").value;
    let cantidadDeCuotas = document.getElementById("CantCuotas").value;
    let diferenciaMedio = valorFinanciado - valorContado; //calcula diferencia total de monto financiado y contado
    let diferenciaPorcentaje = (diferenciaMedio / valorContado)*100; //
    let diferenciaMensual = (diferenciaPorcentaje / cantidadDeCuotas);

    if (diferenciaMensual <= InflacionMensual){
        alert("TE CONVIENE COMPRAR EN CUOTAS, INVERTI EL EFECTIVO DE MANERA EFICIENTE!");
        alert("Que hacemos con el efectivo??");
        alert(`Si lo invertis en Plazo fijo por ejemplo..` )
        inversion()

    }   
    else{
        alert("Es conveniente abonar en efectivo, el interes es muy elevado")
    }
}


/* alert("Calculando........"); */
/* operacionConveniente();  */


function inversion (){
    let gananciaInvertida = ((valorContado*plazoFijo) / cantidadDeCuotas);
    alert(`Ahorraste $ ${gananciaInvertida}  por mes`);
    let gananciaTotal = gananciaInvertida * cantidadDeCuotas
    alert (`o bien $ ${gananciaTotal} en los ${cantidadDeCuotas} meses de la financiacion`)
}
//CALCULAR QUE HACER CON EL EFECTIVO Y CUANTO LE PODEMOS SACAR EN CASO DE INVERTIRLO EN X CANT DE MESES

//MODULO DE PROMOCIONES VIGENTES SEGUN TARJETAS DE CREDITO
//CREAR OBJETO TARJETA DE CREDITO, OBJETO SUPERMERCADO Y OBJETO ESTACIONES DE SERVICIO
//EL PROYECTO BUSCA Q EL USUARIO PUEDA ACCEDER A LAS PROMOCIONES BUSCANDO POR TARJETA O POR TIPO DE ESTABLECIMIENTO

 
class Tarjeta {
    constructor (tipo, bancoEmisor, categoria){
        this.tipo = tipo;
        this.bancoEmisor = bancoEmisor;
        this.categoria = categoria;
    }
cargarDatos (){
    console.log(`Tu tarjeta es ${this.tipo} emitida por ${this.bancoEmisor} del segmento ${this.categoria}`);
}
}
const tarjeta1 = new Tarjeta ("VISA", "ICBC", "BLACK");
const tarjeta2 = new Tarjeta ("MASTERCARD", "SANTANDER", "WOMAN")
const tarjeta3 = new Tarjeta ("NARANJA", "NARANJA", "GOLD")
const tarjeta4 = new Tarjeta ("AMERICAN EXPRESS", "CITY", "PLATINUM")
const tarjeta5 = new Tarjeta ("CABAL", "SUPERVIELLE", "BASIC")

tarjeta1.cargarDatos();
tarjeta2.cargarDatos();
tarjeta3.cargarDatos();
tarjeta4.cargarDatos();
tarjeta5.cargarDatos();

const formasDePago = [tarjeta1,tarjeta2,tarjeta3,tarjeta4,tarjeta5]
console.log (formasDePago)


let newTarjetaCredito = document.getElementById("botonNuevo")
newTarjetaCredito.addEventListener("click", ()=>{alert("Nunca pediremos numeros de tarjeta, solo tipo y banco")})


function nuevaTarjeta(){
    let tarjetaIngresada = document.getElementById("tipoInput").value;
    let bancoIngresado = document.getElementById("bancoInput").value;
    let categoriaIngresada = document.getElementById("categoriaInput").value;
    let tarjetaCreada = new Tarjeta( tarjetaIngresada, bancoIngresado, categoriaIngresada)
    formasDePago.push (tarjetaCreada);
}



for(let elem of formasDePago){
    console.log(elem.tipo + " " + elem.bancoEmisor + " " + elem.categoria)

}

