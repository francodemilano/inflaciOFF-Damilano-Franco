//Declaración de la clase
class Promos{
    constructor(id, Nombre, Categoria, Promociones, Supermercado, imagen){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.Nombre = Nombre,
        this.Categoria = Categoria,
        this.Promociones = Promociones,
        this.Supermecado = Supermercado,
        this.imagen = imagen

    }    
}

let PromocionesBancarias = []

const cargarPromociones = async () =>{
    const response = await fetch("promos.json")
    const data = await response.json()
    for(let promo of data){
                let PromoNueva = new Promos(promo.id, promo.Nombre, promo.Categoria, promo.Promociones, promo.Supermercado,promo.imagen)
                PromocionesBancarias.push(PromoNueva)
            }
}
cargarPromociones()


