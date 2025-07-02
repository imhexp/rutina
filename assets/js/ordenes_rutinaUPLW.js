function cambiarOrdenUPLW() {
    // ordenes de la rutina
    const ordenes = {
        orden1: ['up1', 'lw1', 'up2', 'lw2', 'up3', 'lw3'],
        orden2: ['up2', 'lw2', 'up3', 'lw1', 'up1', 'lw3'],
        orden3: ['lw3', 'up1', 'lw1', 'up2', 'lw2', 'up3']
    };

    // contenedor de la rutina
    const contenedorRutina = document.querySelector('.contenedor');

    // reordenar días según rutina seleccionada o guardada
    function reordenarDias(rutina) {
        const orden = ordenes[rutina];
        const footer = document.querySelector('footer');
        orden.forEach(id => {
            const seccion = document.getElementById(id);
            contenedorRutina.insertBefore(seccion, footer);
        });
        localStorage.setItem('orden_seleccionado', rutina);
    }

    // radios (botones) con las opciones de rutina
    const botones = document.querySelectorAll('input[name="orden"]');

    // escuchar si se ha seleccionado una rutina en específico y cargarla
    botones.forEach(radio => {
        radio.addEventListener('change', () => {
            reordenarDias(radio.value);
        });
    });

    // cargado del orden previamente guardado desde localStorage
    const ordenGuardado = localStorage.getItem('orden_seleccionado');
    const ordenOnLoad = ordenGuardado || document.querySelector('input[name="orden"]:checked')?.value;

    // si se ha podido cargar desde localStorage, seleccionar el radio según lo guardado
    if (ordenGuardado) {
        const botonSeleccionado = document.querySelector(`input[name="orden"][value="${ordenGuardado}"]`);
        if (botonSeleccionado) botonSeleccionado.checked = true;
    }

    // reordenar la rutina independientemente de si hay datos previos en localStorage o no
    reordenarDias(ordenOnLoad);
}