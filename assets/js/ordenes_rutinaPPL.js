function cambiarOrdenPPL() {
    // ordenes de la rutina
    const ordenes = {
        orden1: ['1', '2', '3', '4', '5', '6'], // el normal
        orden2: ['2', '1', '3', '5', '4', '6'], // algunas cosas están dadas la vuelta
        orden3: ['4', '6', '2', '1', '3', '5']  // cardio el martes
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

    // ejercicios
    const ejercicios = {
        opcion1: `<div class="tarjeta_ejercicio bg_amarillo">
            <div class="contenido_tarjeta">
                <div class="info_ejercicio">
                    <span>30' de cardio</span>
                    <p>En bicicleta elíptica o cinta de correr.</p>
                </div>
            </div>
        </div>`,
        opcion2: `<div class="tarjeta_ejercicio bg_amarillo">
            <div class="contenido_tarjeta">
                <div class="info_ejercicio">
                    <span>Elevaciones de piernas</span>
                    <p>5 sets de 18-20 reps.</p>
                </div>
            </div>
        </div>
        <div class="tarjeta_ejercicio bg_amarillo">
            <div class="contenido_tarjeta">
                <div class="info_ejercicio">
                    <span>Encogimientos en polea</span>
                    <p>5 sets de 18-20 reps.</p>
                </div>
            </div>
        </div>
        <div class="tarjeta_ejercicio bg_amarillo">
            <div class="contenido_tarjeta">
                <div class="info_ejercicio">
                    <span>Rotación lateral (con o sin disco)</span>
                    <p>5 sets de 18-20 reps.</p>
                </div>
            </div>
        </div>`,
        opcion3: `<div class="tarjeta_ejercicio bg_naranja">
            <div class="contenido_tarjeta">
                <div class="info_ejercicio">
                    <span>Sentadilla hack</span>
                    <p>4 sets de 12-14 reps. Si normalmente haces este ejercicio en pierna 1, no lo hagas ahora. Haz una de las otras dos alternativas.</p>
                </div>
            </div>
            <div class="ejercicio_alt">
                <span>Prensa a 45 grados</span>
                <p>4 sets de 12-14 reps. Si normalmente haces este ejercicio en pierna 1, no lo hagas ahora. Haz una de las otras dos alternativas.</p>
            </div>
            <div class="ejercicio_alt">
                <span>Sentadilla búlgara</span>
                <p>4 sets de 12-14 reps.</p>
            </div>
        </div>
        <div class="tarjeta_ejercicio bg_naranja">
            <div class="contenido_tarjeta">
                <div class="info_ejercicio">
                    <span>Curl femoral de pie</span>
                    <p>4 sets al fallo.</p>
                </div>
            </div>
        </div>
        <div class="tarjeta_ejercicio bg_naranja">
            <div class="contenido_tarjeta">
                <div class="info_ejercicio">
                    <span>Curl femoral sentado</span>
                    <p>4 sets al fallo.</p>
                </div>
            </div>
        </div>`,
        opcion4: `<div class="tarjeta_ejercicio bg_rojo">
            <div class="contenido_tarjeta">
                <div class="info_ejercicio">
                    <span>Curl antebrazo tras espalda</span>
                    <p>4 sets al fallo.</p>
                </div>
            </div>
            <div class="ejercicio_alt">
                <span>Curl muñeca supino en banco</span>
                <p>4 sets al fallo.</p>
            </div>
        </div>
        <div class="tarjeta_ejercicio bg_rojo">
            <div class="contenido_tarjeta">
                <div class="info_ejercicio">
                    <span>Curl inverso en barra Z</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>
        </div>
        <div class="tarjeta_ejercicio bg_rojo">
            <div class="contenido_tarjeta">
                <div class="info_ejercicio">
                    <span>Curl muñeca prono en banco</span>
                    <p>4 sets al fallo.</p>
                </div>
            </div>
        </div>`
    };

    // historial para limitar a 2 selecciones
    const seleccionHistorica = [];

    // checkboxes disponibles y visor de ejercicios
    const checkboxes = document.querySelectorAll('input[name="dia"]');
    const viewer = document.querySelector('#\\36  .viewer'); // id numérico requiere escape

    // actualizar el contenido del viewer según las opciones seleccionadas
    function actualizarVista() {
        const seleccionados = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value)
            .slice(0, 2); // limitar a máximo 2

        // guardar selección actual en localStorage (máximo 2)
        localStorage.setItem('ejercicios_seleccionados', JSON.stringify(seleccionados));

        // insertar contenido de los ejercicios en el viewer
        let contenido = '';
        seleccionados.forEach(key => {
            contenido += ejercicios[key] || '';
        });
        viewer.innerHTML = contenido;
    }

    // comportamiento de selección/deselección
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            if (cb.checked) {
                if (seleccionHistorica.length >= 2) {
                    cb.checked = false;
                    return;
                }
                seleccionHistorica.push(cb);
            } else {
                const idx = seleccionHistorica.indexOf(cb);
                if (idx > -1) {
                    seleccionHistorica.splice(idx, 1);
                }
            }
            actualizarVista();
        });
    });

    // recuperar selección desde localStorage, o marcar opcion1 y opcion2 por defecto
    let seleccionGuardada;
    try {
        const data = JSON.parse(localStorage.getItem('ejercicios_seleccionados'));
        if (Array.isArray(data)) {
            seleccionGuardada = data.slice(0, 2); // asegurar máximo 2
        } else {
            throw new Error();
        }
    } catch {
        seleccionGuardada = ["opcion1", "opcion2"];
    }

    // aplicar selección inicial al DOM y al historial
    seleccionGuardada.forEach(valor => {
        const cb = document.querySelector(`input[name="dia"][value="${valor}"]`);
        if (cb) {
            cb.checked = true;
            seleccionHistorica.push(cb);
        }
    });

    // cargar ejercicios iniciales sin sobrescribir el estado guardado
    actualizarVista();
}
