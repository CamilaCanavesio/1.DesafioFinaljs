class Viaje {
    constructor(localidadSalida, transporte, localidadLlegada, precio) {
        this.localidadSalida = localidadSalida;
        this.transporte = transporte;
        this.localidadLlegada = localidadLlegada;
        this.precio = Number(precio);
    }
}


class Servicio {
    constructor(elementos = []) {
        this.elementos = elementos
    }
    mostrarProductos(cantidadAmostrar = 0) {
        let productosAMostrar = this.elementos.length;
        if (cantidadAmostrar <= this.elementos.length && cantidadAmostrar > 0) {
            productosAMostrar = cantidadAmostrar
        }
        for (let i = 0; i < productosAMostrar; i++) {
            let prod = this.elementos[i]
            console.log("El envío a" + " " + prod.localidadLlegada + " tuvo un costo de " + prod.precio)
        }
    }
    agregarProducto(envio) {
        this.elementos = this.elementos.concat([envio])
    }
    calcularPrecio() {
        let sumaTotal = 0;
        for (let item of this.elementos) {
            sumaTotal += item.precio;
        }
        return sumaTotal;
    }
}


let servicio = new Servicio()
let cantidadViajes = parseInt(prompt("¿Cuántos viajes desea registrar?"))

for (let i = 1; i <= cantidadViajes; i++) {
    let localidadSalida = prompt("Ingrese la localidad desde donde inició el viaje")
    let transporte = prompt("Ingrese el medio de transporte utilizado")
    let localidadLlegada = prompt("Ingrese la localidad en la que entregó el envío")
    let precio = parseInt(prompt("Ingrese el importe cobrado"))

    let envio = new Viaje(localidadSalida, transporte, localidadLlegada, precio)
    servicio.agregarProducto(envio)

}

let precioTotal = servicio.calcularPrecio();
console.log("El total de ingresos por sus viajes es: " + precioTotal);
servicio.mostrarProductos()
