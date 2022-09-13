let productosEnPromo = JSON.parse(localStorage.getItem("promos")) || []

// DOM 

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
        btnAgregarCombustible.addEventListener("click", () =>{
            MostrarPromoCombustible(promo)
        })
        })
    }
    
function MostrarPromoSuper(promo){
       Swal.fire({
        title: `EN SUPERMERCADOS`,
        text:  `${promo.Supermercado} `,
        icon: 'success',
        confirmButtonText: 'Bien!'
        
}
)



}

function MostrarPromoCombustible(promo){
   
     Swal.fire({
         title: `EN ESTACIONES DE SERVICIO`,
         text: `${promo.Combustible}`,
         icon: 'success',
         confirmButtonText: 'Bien!'
         
     })
 }



function operacionConveniente() {
    let valorContado = document.getElementById("PrecioContado").value;
    let valorFinanciado = document.getElementById("PrecioFinanciado").value;
    let cantidadDeCuotas = document.getElementById("CantCuotas").value;
    let diferenciaMedio = valorFinanciado - valorContado; //calcula diferencia total de monto financiado y contado
    let diferenciaPorcentaje = (diferenciaMedio / valorContado)*100; //
    let diferenciaMensual = (diferenciaPorcentaje / cantidadDeCuotas);
 
    diferenciaMensual <= InflacionMensual ?

        swal.fire({
            title: 'Te conviene comprar en cuotas!!',
            Text: 'Guarda el efectivo e invertilo de manera eficiente',
            icon: 'success',
            confirmButtonText: 'Bien!'
        })
 
            :
        Swal.fire({
                title: 'Compra en efectivo!',
                text: 'El interés es muy alto',
                icon: 'error',
                confirmButtonText: 'Bien!'
        })
    }
/*     function inversion (){
        let valorContado = document.getElementById("PrecioContado").value;
        let cantidadDeCuotas = document.getElementById("CantCuotas").value;
        let gananciaInvertida = ((valorContado * plazoFijo) / cantidadDeCuotas);
        alert(`Ahorraste $ ${gananciaInvertida}  por mes`);
        let gananciaTotal = gananciaInvertida * cantidadDeCuotas
        alert (`o bien $ ${gananciaTotal} en los ${cantidadDeCuotas} meses de la financiacion`)
    } */
        //Código
const loading = setTimeout(()=>{
    
    divLoader.remove()
   
    mostrarPromociones(PromocionesBancarias)
},2000)

//DATO SIN INTERACCION DEL USUSARIO
let InflacionMensual = 7;
let plazoFijo = 0.6;