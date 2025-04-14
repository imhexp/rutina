document.addEventListener('DOMContentLoaded', () => {
    // lista de ordenes a elegir
    const ordenes = {
        orden1: ['1', '2', '3', '4', '5', '6'], // el normal
        orden2: ['2', '1', '3', '5', '4', '6'], // algunas cosas estan dadas la vuelta
        orden3: ['4', '6', '2', '1', '3', '5'] // cardio el martes
    };

    // contenedor de la rutina
    const contenedorRutina = document.querySelector('.contenedor');

    // reordenar dias segun rutina seleccionada o guardada
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

    // cargado del orden previamente guardado desde localstorage
    const ordenGuardado = localStorage.getItem('orden_seleccionado');
    const ordenOnLoad = ordenGuardado || document.querySelector('input[name="orden"]:checked').value;

    // si se ha podido cargar desde localstorage, seleccionar el radio segun lo guardado
    if (ordenGuardado) {
        const botonSeleccionado = document.querySelector(`input[name="orden"][value="${ordenGuardado}"]`);
        if (botonSeleccionado) botonSeleccionado.checked = true;
    }

    // reordenar la rutina independientemente de si hay datos previos en localstorage o no
    reordenarDias(ordenOnLoad);
});
