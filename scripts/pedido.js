const $ = document.querySelector.bind(document);
const $menu = $('#menu');
const $opciones = $('#opciones');
const $pedido = $('#pedido');
const $finalizar = $('#finalizar');
const $vaciar = $('#vaciar');
const $sabor = $('#sabor');
const $cantidad = $('#cantidad');
const $botonSumar = $('#boton-sumar');
const $botonRestar = $('#boton-restar');
const $botonVaciarCarrito = $('#boton-vaciar');
const $botonFinalizar = $('#boton-finalizar');


const botonAgregar = document.createElement('button');
botonAgregar.id = 'boton-agregar';
botonAgregar.textContent = 'Agregar Medialunas';


const crearInputSabor = (value) => {
    const sabor = document.createElement('input');
    sabor.disabled = true;
    sabor.type = 'text';
    sabor.className = 'sabor';
    sabor.value = value;
    return sabor;
};

const crearInputCantidad = (value) => {
    const cantidad = document.createElement('input');
    cantidad.disabled = true;
    cantidad.type = 'number';
    cantidad.className = 'cantidad';
    cantidad.value = value;
    return cantidad;
};

const crearBotonSumar = () => {
    const boton = document.createElement('button');
    boton.textContent = '+';
    boton.id = 'boton-sumar';
    return boton;
};

const crearBotonRestar = () => {
    const boton = document.createElement('button');
    boton.textContent = '-';
    boton.id = 'boton-restar';
    return boton;
};

const crearOpcion = () => {

};

const agregarOpcionAlMenuOpciones = (value) => {
    let cantidadIngresada = 0;

    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor-opcion';
    const cantidad = crearInputCantidad(cantidadIngresada);
    const botonSumar = crearBotonSumar();
    const botonRestar = crearBotonRestar();

    contenedor.append(
        crearInputSabor(value),
        cantidad,
        botonRestar,
        botonSumar
    );

    botonSumar.onclick = () => {
        cantidadIngresada++;
        cantidad.value = cantidadIngresada;
    };

    botonRestar.onclick = () => {
        if (cantidadIngresada > 0) {
            cantidadIngresada--;
            cantidad.value = cantidadIngresada;
        }
    };

    return contenedor;
};

const crearMenuDeOpciones = (listaDeMedialunas) => {
    listaDeMedialunas.forEach(sabor => {
        const opcion = agregarOpcionAlMenuOpciones(sabor.nombre);
        $opciones.append(opcion);
    });
};


crearMenuDeOpciones(listaSabores);
$opciones.append(botonAgregar);


let cantidadTotal = 0;

const procesarPedido = () => {
    let saboresJson = localStorage.getItem("listaSabores");
    let listaSabores = JSON.parse(saboresJson);

    let cantidadDelPedido = 0;
    const cantidades = document.querySelectorAll('.cantidad');
    cantidades.forEach(opcion => {
        cantidadDelPedido += Number(opcion.value);
    })
    return cantidadDelPedido;
};


botonAgregar.onclick = () => {
    cantidadTotal = procesarPedido();
    console.log(cantidadTotal);

    cantidadDelPedido.textContent = `Vas a llevar ${cantidadTotal} medialunas.`;
    total.textContent = `Tu total es de $${cantidadTotal * precioUnidad}.`;
    
    $pedido.append(cantidadDelPedido, total);
}

const cantidadDelPedido = document.createElement('p');
cantidadDelPedido.textContent = `Vas a llevar ${cantidadTotal} medialunas.`;

const total = document.createElement('p');
total.textContent = `Tu total es de $${cantidadTotal * precioUnidad}.`

$pedido.append(cantidadDelPedido, total);


const resetearValores = () => {
    localStorage.clear();
    Swal.fire({
        title: "Carrito Vacío",
        icon: "info"
    });
    /*const mensaje = document.createElement('p');
    mensaje.textContent = 'Carrito Vacío';
    mensaje.id = 'mensaje-vaciar';
    $vaciar.append(mensaje);*/
    setTimeout(() => {
        window.location.reload();
    },2000);
};

let botonVaciar = document.getElementById("boton-vaciar");


$botonVaciarCarrito.onclick = () => {
    resetearValores();
}

const finalizarPedido = () => {
    Swal.fire({
        title: "Gracias por tu compra",
        icon: "success"
    });
    /*const mensaje = document.createElement('p');
    mensaje.textContent = '¡Gracias por tu compra!';
    mensaje.id = 'mensaje-finalizar';
    $finalizar.append(mensaje);*/
}

let clickBotonFinalizar = 0;
$botonFinalizar.onclick = () => {
    clickBotonFinalizar++;
    cantidadDelPedido.textContent = `Vas a llevar ${cantidadTotal} medialunas.`;
    total.textContent = `Tu total es de $${cantidadTotal * precioUnidad}.`
    console.log(cantidadTotal)
    if (clickBotonFinalizar === 1) {
        if (cantidadTotal > 0) {
            finalizarPedido();
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            clickBotonFinalizar = 0;
        }
    }
}
