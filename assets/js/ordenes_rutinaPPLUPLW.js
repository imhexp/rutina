function cambiarOrdenPPL_UPLW() {
    // ordenes de la rutina
    const ordenes = {
        orden1: ['torso', 'leg1', 'push', 'pull', 'leg2'],
        orden2: ['push', 'pull', 'leg1', 'torso', 'leg2']
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
    const ordenPrecargado = localStorage.getItem('orden_seleccionado');
    const ordenOnLoad = ordenGuardado || document.querySelector('input[name="orden"]:checked')?.value;
    let ordenGuardado;

    if (ordenPrecargado === 'orden3') {
        ordenGuardado = 'orden1';
    } else {
        ordenGuardado = ordenPrecargado;
    }

    // si se ha podido cargar desde localStorage, seleccionar el radio según lo guardado
    if (ordenGuardado) {
        const botonSeleccionado = document.querySelector(`input[name="orden"][value="${ordenGuardado}"]`);
        if (botonSeleccionado) botonSeleccionado.checked = true;
    }

    // reordenar la rutina independientemente de si hay datos previos en localStorage o no
    reordenarDias(ordenOnLoad);
}