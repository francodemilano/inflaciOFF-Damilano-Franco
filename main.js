//Array productos en carrito operador OR -- Optimización
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || []

//Elementos DOM 
let acumulador
let divProductos = document.getElementById("productos")
let inputBuscar = document.getElementById("buscador") 
let btnBuscar = document.getElementById("btnBuscar")
let divLoader = document.getElementById("loader")

//Funciones 
function mostrarPromociones(array){
    divProductos.innerHTML = ""
    array.forEach((promo)=>{
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<div id="${promo.id}" class="card" style="width: 18rem;">
                                        <img class="card-img-top alturaCardFotos" src="${promo.imagen}" alt="${promo.Promociones} de ${promo.Nombre}">
                                        <div class="card-body">
                                            <h5 class="card-title">${promo.Promociones}</h5>
                                            <p Precio: ${promo.Supermercado}</p>
                                            <button id="agregarBtn${promo.id}" class="btn btn-outline-success">Combustible</button>
                                            <button id="agregarBtn${promo.id}" class="btn btn-outline-success">Supermercado</button>
                                        </div>
                                    </div>`
        divProductos.appendChild(nuevoProducto)
        //código btnAgregar
        let btnAgregar = document.getElementById(`agregarBtn${promo.id}`)
        //invocar agregarAlCarrito
        btnAgregar.addEventListener("click", () =>{
            agregarAlCarrito(promo)
            
        })
        })
    }

    //Código
const loading = setTimeout(()=>{
    //chau divLoader
    divLoader.remove()
    //llamar tarjetas
    mostrarPromociones(PromocionesBancarias)
},2000)

//DATO SIN INTERACCION DEL USUSARIO
let InflacionMensual = 7;
let plazoFijo = 0.6;
function inversion (){
    let valorContado = document.getElementById("PrecioContado").value;
    let cantidadDeCuotas = document.getElementById("CantCuotas").value;
    let gananciaInvertida = ((valorContado * plazoFijo) / cantidadDeCuotas);
    alert(`Ahorraste $ ${gananciaInvertida}  por mes`);
    let gananciaTotal = gananciaInvertida * cantidadDeCuotas
    alert (`o bien $ ${gananciaTotal} en los ${cantidadDeCuotas} meses de la financiacion`)
}


function operacionConveniente() {
    let valorContado = document.getElementById("PrecioContado").value;
    let valorFinanciado = document.getElementById("PrecioFinanciado").value;
    let cantidadDeCuotas = document.getElementById("CantCuotas").value;
    let diferenciaMedio = valorFinanciado - valorContado; //calcula diferencia total de monto financiado y contado
    let diferenciaPorcentaje = (diferenciaMedio / valorContado)*100; //
    let diferenciaMensual = (diferenciaPorcentaje / cantidadDeCuotas);
 
    diferenciaMensual <= InflacionMensual ?
    (swal.fire ( " Te conviene comprar con tarjeta! " , " Mirá las promos vigentes " , " Éxito " ),
    inversion())
 
            :
        Swal.fire({
                title: 'Compra en efectivo!',
                text: 'El interés es muy alto',
                icon: 'error',
                confirmButtonText: 'Bien!'
        })
    }
