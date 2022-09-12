//Array productos en carrito operador OR -- Optimización
let productosEnPromo = JSON.parse(localStorage.getItem("promos")) || []

//Elementos DOM 

let divProductos = document.getElementById("productos")
let divLoader = document.getElementById("loader")

//Funciones 
function mostrarPromociones(array){
    divProductos.innerHTML = ""
    array.forEach((promo)=>{
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<div id="${promo.id}" class="card" style="width: 18rem;">
                                        <img class="card-img-top alturaCardFotos" src="${promo.imagen}" alt="${promo.Promociones} de ${promo.Nombre}">
                                        <div class="card-body">
                                            <h4 class="card-main">${promo.Nombre}</h4>
                                            <h5 class="card-title">${promo.Promociones}</h5>

                                            <button id="agregarBtnSuper${promo.id}" class="btn btn-outline-success">Super</button>
                                            <button id="agregarBtnCombustible${promo.id}" class="btn btn-outline-success">Combustible</button>
                                            
                                        </div>
                                    </div>`
        divProductos.appendChild(nuevoProducto)
        //código btnAgregar
        let btnAgregarsuper = document.getElementById(`agregarBtnSuper${promo.id}`)
        let btnAgregarCombustible = document.getElementById(`agregarBtnCombustible${promo.id}`)
        //Cargar las promociones
        btnAgregarsuper.addEventListener("click", () =>{
            MostrarPromoSuper(promo)
            
        })
        btnAgregarCombustible.addEventListener("click", () => {
            MostrarPromoCombustible (promo)
        })
        })
    }
    
function MostrarPromoSuper(promo){
    console.log(promo);
    Swal.fire({
        title: `Promocion de ${promo.Nombre}`,
        text:  `El libro ${promo.Supermercado} ha sido agregado`,
        icon: 'success',
        confirmButtonText: 'Bien!'


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
        (alert("TE CONVIENE COMPRAR EN CUOTAS, INVERTI EL EFECTIVO DE MANERA EFICIENTE!"),
        alert("Si invertis el efectivo en Plazo fijo por ejemplo.." ),
        inversion())
 
            :
        Swal.fire({
                title: 'Compra en efectivo!',
                text: 'El interés es muy alto',
                icon: 'error',
                confirmButtonText: 'Bien!'
        })
    }
