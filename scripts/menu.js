const $menuEmpanadas = document.querySelector('#menu-contenedor');

const generarMenuMedialunas = (listaDeMedialunas) => {
    listaDeMedialunas.forEach(medialuna => {
        const contenedor = document.createElement('div');
        const nombre = document.createElement('p');
        const descripcion = document.createElement('p');
    
        nombre.textContent = medialuna.nombre;
        descripcion.textContent = `(${medialuna.descripcion})`;
    
        contenedor.append(nombre, descripcion);
        $menuMedialunas.appendChild(contenedor);
    });
};

generarMenuMedialunas(listaSabores);

