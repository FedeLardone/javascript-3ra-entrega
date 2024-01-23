class PromoBancaria {
    constructor(banco, descuento) {
        this.banco = banco;
        this.promocion = descuento;
    }

    mostrarInfo() {
        return `${this.banco} ${(this.promocion * 100)}%`;
    }
}

class Medialuna {
    constructor(nombre, sigla) {
        this.nombre = nombre;
        this.sigla = sigla;
    }
    
    mostrarInfo() {
        return `${this.nombre} (${this.sigla})`;
    }
}

const precioUnidad = 550;
const descuentoMediaDocena = 0.10;
const descuentoDocena = 0.15;
const cantidadDeOpciones = 6;

/*const listaSabores = [
    new Medialuna('Salada', 'S'),
    new Medialuna('Dulce', 'D'),
    new Medialuna('Jamon y Queso', 'JQ'),
];*/

const listaSabores = [
    {id: "S", nombre: "Salada" },
    {id: "D", nombre: "Dulce" },
    {id: "JQ", nombre: "Jamon y queso" },
];

localStorage.setItem("listaSabores", JSON.stringify(listaSabores));


const promocionesBancarias = [
    new PromoBancaria('Banco Galicia', 0.15),
    new PromoBancaria('Banco Macro', 0.05),
    new PromoBancaria('Banco Santa Fe', 0.05),
    new PromoBancaria('Mercado Pago', 0.10),
];
