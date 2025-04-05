document.addEventListener('DOMContentLoaded', () => {
    // ordenes/variantes de la rutina. la rutina 1 es la normal, la 2 y 3 son cambios de orden.
    const ordenes = {
        orden1: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
        ],
        orden2: [
            '2',
            '1',
            '3',
            '5',
            '4',
            '6',
        ],
        orden3: [
            '4',
            '6',
            '2',
            '1',
            '3',
            '5',
        ]
    };

    // contenedor de la rutina principal
    const contenedorRutina = document.querySelector('.contenedor');

    // función para scramblear la rutina teniendo en cuenta el footer
    function reordenarDias(rutina) {
        const orden = ordenes[rutina];
        const footer = document.querySelector('footer');
        orden.forEach(id => {
            const seccion = document.getElementById(id);
            contenedorRutina.insertBefore(seccion, footer);
        });
    }

    // botones de la rutina y reordenación según rutina seleccionada
    const botones = document.querySelectorAll('input[name="orden"]');
    botones.forEach(radio => {
        radio.addEventListener('change', () => {
            reordenarDias(radio.value);
        });
    });

    // se aplica un orden 'default' al abrir la página por primera vez. por defecto, es el radio que en el html tiene el atributo 'checked'
    const ordenInicio = document.querySelector('input[name="orden"]:checked').value;
    reordenarDias(ordenInicio);
});