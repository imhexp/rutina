document.addEventListener('DOMContentLoaded', () => {
// rutinas
const rutinas = {
    ppl: `
        <h2><i class="fa-solid fa-arrow-up-square-triangle fa-fw"></i> Orden:</h2>
        <div class="selector_orden">
            <label><input type="radio" name="orden" value="orden1" checked> Orden <i class="fa-solid fa-square-1 fa-fw"></i></label>
            <label><input type="radio" name="orden" value="orden2"> Orden <i class="fa-solid fa-square-2 fa-fw"></i></label>
            <label><input type="radio" name="orden" value="orden3"> Orden <i class="fa-solid fa-square-3 fa-fw"></i></label>
        </div>

        <section class="seccion" id="1">
            <h2>Pecho, tríceps y hombro (1)</h2>
            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press de banca</span>
                        <p>4 sets de 10-12 reps o lo que puedas.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press inclinado</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press plano/vertical</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>
      
            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevaciones laterales</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press francés</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Fondos en máquina</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión tríceps libre (unilateral)</span>
                        <p>4 sets de 18-20 reps. Por la espalda, encima de la cabeza.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Extensión tríceps polea (unilateral)</span>
                    <p>4 sets de 18-20 reps. Por la espalda, encima de la cabeza.</p>
                </div>
            </div>
        </section>

        <section class="seccion" id="2">
            <h2>Dorsales y bíceps</h2>
            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Remo sentado</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Remo sentado unilateral</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Jalón dorsal</span>
                        <p>3-4 sets de 14 reps. (7 lentas, 7 rápidas)</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Remo unilateral en banco</span>
                        <p>4 sets de 14 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Remo en barra T (agarre cerrado)</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl con mancuernas</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Curl con barra Z</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl bayesian</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="seccion" id="3">
            <h2>Pierna</h2>
            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión de cuádriceps</span>
                        <p>4 sets de 18-20 reps. Las repes lentitas, y también viene bien hacerlas asistidas.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl femoral</span>
                        <p>4 sets al fallo.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Sentadilla hack</span>
                        <p>4 sets de 12-14 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Prensa a 45 grados</span>
                    <p>4 sets de 12-14 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Gemelo de pie</span>
                        <p>4 sets de 12-14 reps. Principalmente entrena el gastrocnemio. Hace crecer el músculo.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Gemelo en prensa</span>
                    <p>4 sets de 12-14 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Abductor</span>
                        <p>4 sets al fallo.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="seccion" id="4">
            <h2>Pecho, tríceps y hombro (2)</h2>
            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Cruces en polea a dos manos</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Cruces en polea a una mano</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Pec-deck</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevaciones laterales</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión tríceps polea alta</span>
                        <p>4 sets de 18-20 reps. Coloca la polea en un punto alto y con la barra recta o la barra V, empuja hacia abajo hasta estirar ambos brazos.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Extensión tríceps polea alta (unilateral)</span>
                    <p>4 sets de 18-20 reps. Se puede hacer sin agarre pues solo usamos una mano.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión polea por encima de la cabeza</span>
                        <p>4 sets de 18-20 reps. Llévate el agarre encima de la cabeza, inclina el torso ligeramente hacia adelante y empuja hasta dejar rectos ambos brazos.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="seccion" id="5">
            <h2>Espalda y bíceps</h2>
            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Remo en barra T (agarre abierto)</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Remo con barra</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Jalón al mentón</span>
                        <p>4 sets de 10-12 reps. Hazlo solo si te sobra tiempo o si tienes pensado quedarte un ratito más.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Remo girola</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Peso muerto</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl predicador</span>
                        <p>4 sets de 18-20 reps. Libre o en máquina, vale en los dos lados. Hacerlas lentitas y con el agarre al nivel de los codos también viene bien.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl martillo</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="seccion" id="6">
            <h2>Abdominales, cardio, antebrazo o pierna</h2>
            <div class="contenedor_dia">
                <div class="tarjeta_noticia bg_noticia_default">
                    <div class="noticia_contenido">
                        <div class="info_noticia">
                            <span><i class="fa-solid fa-palette fa-fw"></i> Este día es personalizable</span>
                            <p>Para hacer más dinámica y completa la rutina, hemos hecho que el día 6 sea personalizable.</p>
                            <p>Esto da mucho juego, pudiendo completar aún más tu rutina con frecuencia dos en pierna, aprovecharlo para hacer cardio...</p>
                            <p>Adáptalo a tus necesidades y objetivos.</p>
                        </div>
                    </div>
                </div>
                
                <h2><i class="fa-solid fa-gear fa-fw"></i> ¿Qué quieres entrenar? (máximo 2)</h2>
                <div class="selector_dia">
                    <label><input type="checkbox" name="dia" value="opcion1"> Cardio</label>
                    <label><input type="checkbox" name="dia" value="opcion2"> Abdominales</label>
                    <label><input type="checkbox" name="dia" value="opcion3"> Pierna</label>
                    <label><input type="checkbox" name="dia" value="opcion4"> Antebrazo</label>
                </div>
            </div>

            <div class="viewer">
        </section>`,

    fullbody: `
        <section class="seccion" id="fb1">
            <h2>Lunes</h2>
            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press de banca</span>
                        <p>4 sets de 10-12 reps o lo que puedas.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press francés</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Fondos en máquina</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl martillo libre</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Curl martillo en banco predicador</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>
      
            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión de cuádriceps</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_amarillo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Crunches en polea</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Cardio</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>
        </section>

        <section class="seccion" id="fb2">
            <h2>Martes</h2>
            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl con mancuernas</span>
                        <p>4 sets de 10-12 reps o lo que puedas.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Jalón al pecho</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Remo barra T (agarre abierto)</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>
      
            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl femoral sentado</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Face pull</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevaciones de gemelos</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="seccion" id="fb3">
            <h2>Miércoles</h2>
            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Cruces en polea alta</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Ex. tríceps sobre cabeza</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Flexión de muñeca</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>
      
            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Sentadilla (cualquier variante)</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Prensa</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevaciones laterales</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Abductores</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_amarillo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevaciones de pierna</span>
                        <p>4 sets de 10-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Cardio</span>
                    <p>4 sets de 10-12 reps.</p>
                </div>
            </div>
        </section>
        `
};
    const contenedorRutina = document.querySelector('.selector_rutina');

    // cambio de rutina basado en el anterior script de los ordenes de la rutina
    function cambiarRutina(rutina) {
        const fragmentoHTML = rutinas[rutina];
    
        if (!fragmentoHTML) return;
    
        const anterior = document.getElementById('rutina_insertada');
        if (anterior) anterior.remove();
    
        const nuevaRutina = document.createElement('div');
        nuevaRutina.id = 'rutina_insertada';
        nuevaRutina.innerHTML = fragmentoHTML;
        contenedorRutina.insertAdjacentElement('afterend', nuevaRutina);
    
        localStorage.setItem('rutina_seleccionada', rutina);
    
        // solo cambiar el orden si la rutina es la PPL
        // ESTO CAMBIA DESPUÉS! david tiene que pasarme todavía los ordenes de la rutina nueva.
        if (rutina === 'ppl') {
            cambiarOrden();
        }
    }    
    
    // botones de rutina
    const botones = document.querySelectorAll('input[name="rutina"]');
    botones.forEach(radio => {
        radio.addEventListener('change', () => {
            cambiarRutina(radio.value);
        });
    });
    
    // cargado de rutina
    const rutinaGuardada = localStorage.getItem('rutina_seleccionada');
    const rutinaOnLoad = rutinaGuardada || document.querySelector('input[name="rutina"]:checked')?.value;
    
    // marcar el boton que corresponde si ya hemos seleccionado rutina antes
    if (rutinaGuardada) {
        const botonSeleccionado = document.querySelector(`input[name="rutina"][value="${rutinaGuardada}"]`);
        if (botonSeleccionado) botonSeleccionado.checked = true;
    }
    
    // cargar rutina
    if (rutinaOnLoad) {
        cambiarRutina(rutinaOnLoad);
    }    
});