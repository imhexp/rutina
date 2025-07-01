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
                        <p>4 sets de 8-12 reps o lo que puedas.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press inclinado</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press plano/vertical</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>
      
            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevaciones laterales</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press francés</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Fondos en máquina</span>
                    <p>4 sets de 8-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión tríceps libre (unilateral)</span>
                        <p>4 sets de 8-12 reps. Por la espalda, encima de la cabeza.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Extensión tríceps polea (unilateral)</span>
                    <p>4 sets de 8-12 reps. Por la espalda, encima de la cabeza.</p>
                </div>
            </div>
        </section>

        <section class="seccion" id="2">
            <h2>Dorsales y bíceps</h2>
            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Remo sentado</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Remo sentado unilateral</span>
                    <p>4 sets de 8-12 reps.</p>
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
                    <p>4 sets de 8-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl con mancuernas</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Curl con barra Z</span>
                    <p>4 sets de 8-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl bayesian</span>
                        <p>4 sets de 8-12 reps.</p>
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
                        <p>4 sets de 8-12 reps. Las repes lentitas, y también viene bien hacerlas asistidas.</p>
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
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Cruces en polea a una mano</span>
                    <p>4 sets de 8-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Pec-deck</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevaciones laterales</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión tríceps polea alta</span>
                        <p>4 sets de 8-12 reps. Coloca la polea en un punto alto y con la barra recta o la barra V, empuja hacia abajo hasta estirar ambos brazos.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Extensión tríceps polea alta (unilateral)</span>
                    <p>4 sets de 8-12 reps. Se puede hacer sin agarre pues solo usamos una mano.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión polea por encima de la cabeza</span>
                        <p>4 sets de 8-12 reps. Llévate el agarre encima de la cabeza, inclina el torso ligeramente hacia adelante y empuja hasta dejar rectos ambos brazos.</p>
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
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Remo con barra</span>
                    <p>4 sets de 8-12 reps.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Jalón al mentón</span>
                        <p>4 sets de 8-12 reps. Hazlo solo si te sobra tiempo o si tienes pensado quedarte un ratito más.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Remo girola</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Peso muerto</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl predicador</span>
                        <p>4 sets de 8-12 reps. Libre o en máquina, vale en los dos lados. Hacerlas lentitas y con el agarre al nivel de los codos también viene bien.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl martillo</span>
                        <p>4 sets de 8-12 reps.</p>
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
        </section>
        `,

    fullbody: `
        <div class="tarjeta_noticia bg_noticia_default">
            <div class="noticia_contenido">
                <div class="info_noticia">
                    <span><i class="fa-fw fa-solid fa-wrench"></i> En proceso</span>
                    <p>La rutina <b>Full body</b> está implementada, pero los órdenes, necesarios para que todos usemos la rutina, quedan pendientes.</p>
                    <p>Los ordenes estarán terminados antes del <b>domingo, 6 de julio</b>.</p>
                </div>
            </div>
        </div>
        <section class="seccion" id="fb1">
            <h2>Full body <i class="fa-solid fa-square-1 fa-fw"></i></h2>
            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Jalón al pecho</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>
 
            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Cruces en polea alta</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press francés</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Flexión de muñeca</span>
                        <p>4 sets de 8-12 reps. Es un curl de antebrazo supino con barra normal, apoyado en banco.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión de cuádriceps</span>
                        <p>4 sets de 8-12 reps. Las repes lentitas, y también viene bien hacerlas asistidas.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Abductores</span>
                        <p>4 sets de 8-12 reps. Puedes llevarte al fallo ayudándote con las manos a relajar sin bajar peso.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="seccion" id="fb2">
            <h2>Full body <i class="fa-solid fa-square-2 fa-fw"></i></h2>
            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Remo en barra T (agarre abierto)</span>
                        <p>4 sets de 8-12 reps. Importante hacerlo con el agarre abierto, si no, enfocas el ejercicio en los dorsales.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevaciones laterales</span>
                        <p>4 sets de 12-14 reps. Si tienes más fuerza en un hombro que en otro es mejor hacerlo en polea. Ponla a la altura de tus rodilla y pégate al mástil de la polea.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl con mancuernas</span>
                        <p>4 sets de 12-14 reps. Si te desestabilizas al hacer las repeticiones, haz el ejercicio en banco.</p>
                    </div>
                </div>
            </div>
      
            <div class="tarjeta_ejercicio bg_amarillo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Crunch en polea</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Cardio</span>
                    <p>Por si no te interesa hacer abdominales. Dedícale tanto tiempo como veas conveniente.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl femoral de pie</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="seccion" id="fb3">
            <h2>Full body <i class="fa-solid fa-square-3 fa-fw"></i></h2>
            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Remo bajo unilateral</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Peck deck</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Face pull</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Ex. tríceps unilateral en polea</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Sentadilla (libre o variante)</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Abductores</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="seccion" id="fb4">
            <h2>Full body <i class="fa-solid fa-square-4 fa-fw"></i></h2>
            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Remo en barra T (agarre abierto)</span>
                        <p>4 sets de 8-12 reps. Importante hacerlo con el agarre abierto, si no, enfocas el ejercicio en los dorsales.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevaciones laterales</span>
                        <p>4 sets de 8-12 reps. Si tienes más fuerza en un hombro que en otro es mejor hacerlo en polea. Ponla a la altura de tus rodilla y pégate al mástil de la polea.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl predicador</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>
      
            <div class="tarjeta_ejercicio bg_amarillo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevaciones de piernas</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
                <div class="ejercicio_alt">
                    <span>Cardio</span>
                    <p>Por si no te interesa hacer abdominales. Dedícale tanto tiempo como veas conveniente.</p>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Curl femoral de pie</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Elevación de gemelos</span>
                        <p>4 sets de 8-12 reps. Preferiblemente hacerlas de pie, pero también se pueden hacer en prensa de 45 grados.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="seccion" id="fb5">
            <h2>Full body <i class="fa-solid fa-square-5 fa-fw"></i></h2>
            <div class="tarjeta_ejercicio bg_lila">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Jalón vertical unilateral</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_verde">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press inclinado</span>
                        <p>4 sets de 8-12 reps. En máquina, con mancuernas o con barra. Las dos últimas son las más recomendables.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_azul">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Press francés</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>
      
            <div class="tarjeta_ejercicio bg_rojo">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión de muñeca</span>
                        <p>4 sets de 8-12 reps. Es un curl de antebrazo prono con barra normal, apoyado en banco.</p>
                    </div>
                </div>
            </div>

            <div class="tarjeta_ejercicio bg_naranja">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span>Extensión de cuádriceps</span>
                        <p>4 sets de 8-12 reps.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="seccion" id="fb6">
            <h2>Full body <i class="fa-solid fa-square-6 fa-fw"></i></h2>
            <div class="tarjeta_ejercicio bg_advertencia_dia">
                <div class="contenido_tarjeta">
                    <div class="info_ejercicio">
                        <span><i class="fa-fw fa-light fa-snooze"></i> Descanso</span>
                    </div>
                </div>
            </div>
        </section>
        `,

    uplw: `
        <div class="tarjeta_noticia bg_noticia_default">
            <div class="noticia_contenido">
                <div class="info_noticia">
                    <span><i class="fa-fw fa-solid fa-wrench"></i> En proceso</span>
                    <p>La rutina <b>Upper/Lower</b> todavía no se ha implementado en la web. Por ahora, usa otras rutinas hechas por nosotros, como la Push Pull Leg o la Full Body.</p>
                    <p>Si no quieres esperar, accede directamente a la rutina en el documento de Google:</p>
                    <p>https://docs.google.com/document/d/1aR_b-h6PfNlV_1HptKQxHruFoddO-dCL4EzxPW9obp4/</p>
                </div>
            </div>
        </div>
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
            cambiarOrdenPPL();
        }
    }    
    
    // botones de rutina
    const botones = document.querySelectorAll('input[name="rutina"]');
    botones.forEach(radio => {
        radio.addEventListener('change', () => {
            cambiarRutina(radio.value);
            location.reload();
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