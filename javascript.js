//DATO SIN INTERACCION DEL USUSARIO
let InflacionMensual = 7;
let plazoFijo = 0.6;

//array de bancos 
class Bancos {
    constructor (nombreBanco){
        this.nombre = nombreBanco;
         }}
const banco1 = new Bancos ("BANCO DE GALICIA");
const banco2 = new Bancos ("BANCO NACION");
const banco3 = new Bancos ("BANCO PROVINCIA DE BUENOS AIRES");
const banco4 = new Bancos ("BANCO ICBC");
const banco5 = new Bancos ("BANCO CITIBANK");
const banco6 = new Bancos ("BANCO BBVA");
const banco7 = new Bancos ("BANCO PROVINCIA DE CORDOBA");
const banco8 = new Bancos ("BANCO SUPERVIELLE");
const banco9 = new Bancos ("BANCO CIUDAD DE BUENOS AIRES");
const banco10 = new Bancos ("BANCO PATAGONIA");
const banco11 = new Bancos ("BANCO HIPOTECARIO");
const banco12 = new Bancos ("BANCO DE SAN JUAN");
const banco13 = new Bancos ("BANCO MUNICIPAL DE ROSARIO");
const banco14 = new Bancos ("BANCO SANTANDER RIO");
const banco15 = new Bancos ("BANCO DEL CHUBUT");
const banco16 = new Bancos ("BANCO DE SANTA CRUZ");
const banco17 = new Bancos ("BANCO DE LA PAMPA");
const banco18 = new Bancos ("BANCO DE CORRIENTES");
const banco19 = new Bancos ("BANCO DE PROVINCIA DE NEQUEN");
const banco20 = new Bancos ("BANCO BRUBANK");
const banco21 = new Bancos ("BANCO INTERFINANZAS");
const banco22 = new Bancos ("BANCO HSBC");
const banco23 = new Bancos ("BANCO OPEN BANK");
const banco24 = new Bancos ("BANCO MACRO");
const banco25 = new Bancos ("BANCO CREDICOOP");
const banco26 = new Bancos ("BANCO COMAFI");
const banco27 = new Bancos ("BANCO ROELA");
const banco28 = new Bancos ("BANCO JULIO");
const banco29 = new Bancos ("BANCO ITAU");
const banco30 = new Bancos ("BANCO PROV DE TIERRA DEL FUEGO");
const banco31 = new Bancos ("BANCO RIOJA");
const banco32 = new Bancos ("BANCO DEL SOL");
const banco33 = new Bancos ("BANCO DEL CHACO");
const banco34 = new Bancos ("BANCO DE FORMOSA");
const banco35 = new Bancos ("BANCO SANTIAGO DEL ESTERO");
const banco36 = new Bancos ("BANCO DE SANTA FE");
const banco37 = new Bancos ("BANCO DE ENTRE RIOS");
const banco38 = new Bancos ("BANCO COLUMBIA");

const TodosBancos = [banco1, banco2, banco3, banco4, banco5, banco6, banco7, banco8, banco9, banco10, banco11, banco12, banco13, banco14, banco15, banco16, banco17, banco18, banco19, banco20, banco21, banco22, banco23, banco24, banco25, banco26, banco27, banco28, banco29, banco30, banco31, banco32, banco33, banco34, banco35, banco36, banco37, banco38,]

function Elegir_Bancos_Visa(){
    TodosBancos.forEach(i => {
        document.getElementById("Formulario").innerHTML += "<option value='" +i.nombre+"'> "+i.nombre+ "</option>";
        });
          
    } 
    Elegir_Bancos_Visa()

function Elegir_Bancos_Master(){
    TodosBancos.forEach(i => {
        document.getElementById("FormularioMaster").innerHTML += "<option value='" +i.nombre+"'> "+i.nombre+ "</option>";
        });
              
        } 
    Elegir_Bancos_Master()



/* FUNCION CALCULO DIF PAGO DE CONTADO Y FINANCIADO */
function operacionConveniente() {
    let valorContado = document.getElementById("PrecioContado").value;
    let valorFinanciado = document.getElementById("PrecioFinanciado").value;
    let cantidadDeCuotas = document.getElementById("CantCuotas").value;
    let diferenciaMedio = valorFinanciado - valorContado; //calcula diferencia total de monto financiado y contado
    let diferenciaPorcentaje = (diferenciaMedio / valorContado)*100; //
    let diferenciaMensual = (diferenciaPorcentaje / cantidadDeCuotas);

    if (diferenciaMensual <= InflacionMensual){
        alert("TE CONVIENE COMPRAR EN CUOTAS, INVERTI EL EFECTIVO DE MANERA EFICIENTE!");
        alert("Si invertis el efectivo en Plazo fijo por ejemplo.." );
        inversion();

    }   
    else{
        alert("TE CONVIENE PAGAR EN EFECTIVO, EL INTERES ES MAYOR A LA INFLACION")
    }
}
function inversion (){
    let valorContado = document.getElementById("PrecioContado").value;
    let cantidadDeCuotas = document.getElementById("CantCuotas").value;
    let gananciaInvertida = ((valorContado * plazoFijo) / cantidadDeCuotas);
    alert(`Ahorraste $ ${gananciaInvertida}  por mes`);
    let gananciaTotal = gananciaInvertida * cantidadDeCuotas
    alert (`o bien $ ${gananciaTotal} en los ${cantidadDeCuotas} meses de la financiacion`)
}




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





