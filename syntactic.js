export default class Syntactic {
    constructor() {
        this.uses = [
            'Evitemos usar comas para divisiones mayores.',
            'Evitemos cortar una idea que aún no termina con signos de mayor categoría (punto, punto y coma…). En muchos de estos casos se usa, más bien, una coma.',
            'Evitemos abusar del verbo ser.',
            'Evitemos la repetición innecesaria de términos. Aclaremos que cuando se trata de conceptos es inevitable que tengamos que repetirlos ante la ausencia de sinonimias perfectas. ¿Qué tal, por ejemplo, remplazar “texto” por “discurso”? Sin embargo, en otros casos es posible hacer cambios o ciertos movimientos sintácticos.',
            'Empleemos los dos puntos antes de cita.',
            'Cuidemos la concordancia entre sujeto y verbo.',
            'Evitemos marcar comas u otros signos cuando la oración se está desarrollando en orden lógico.',
            'Tengamos en cuenta el régimen preposicional.',
            'Evitemos el “nivelismo” y el “interiorismo”. Dice doña Lucila González de Chaves en su libro Funcionalidad del idioma (1992: 122): “La expresión ‘al interior de’ es tan incorrecta, innecesaria, extranjera e inelegante como aquella ‘a nivel de’.',
            'Evitemos, en lo posible, la construcción de oraciones muy largas, no solo por lo compleja que se hace su comprensión, sino también por los riesgos de que aparezcan problemas de concordancia gramatical y frases sin resolución.',
            'Evitemos ciertas construcciones de gerundio.',
            'Evitemos marcar coma (o punto y coma) entre sujeto y predicado.',
            'Evitemos el encadenamiento de causas en una misma oración (…porque...ya que…debido a…puesto que).',
            'Tengamos en cuenta la aplicación de las reglas generales de acentuación.',
            'Ocupémonos de la tilde en parejas o trilogías prosódicas. Se trata de grupos de palabras iguales en su escritura, pero diferentes en su pronunciación y significado, según el lugar en el que se ubique el acento.',
            'Revisemos la tilde diacrítica.\n'+
            'A la regla general de que “los monosílabos no se tildan”, surge una excepción importante que viene dada por palabras con igual escritura y pronunciación que llevan tilde o no, según su función sintáctica o semántica.\n',
            'Revisemos la concordancia sustantivo-adjetivo.',
            'Recordemos que cuando hay un sustantivo masculino y otro femenino, el adjetivo acompañante va en masculino plural.',
            'Evitemos las construcciones SUSTANTIVO + A + INFINITIVO',
            'Evitemos el dequeísmo. Después de verbos anunciativos (que tengan que ver con acciones de los sentidos, como ver, decir, oír, pensar, opinar, etc.), no debe añadirse la preposición “de”.',
            'Evitemos el queísmo.',
            'Recordemos que el verbo “haber”, usado como principal, es impersonal.',
            'Evitemos el “que galicado”.',
            'Evitemos perífrasis verbales innecesarias.',
            'Evitemos tildar los pronombres demostrativos este, esta, estos, estas, ese, esa, esos, esas.',
            'Evitemos las cacofonías (mal sonido por concurrencia de sonidos o por repetición sucesiva de voces).',
            'Mantengamos la concordancia de número (y de género si viene al caso) en cuanto a los referentes.',
            'Encerremos los apósitos o expresiones explicativas entre comas. Los incisos que interrumpen una oración, ya sea para aclarar o ampliar lo dicho, ya sea para mencionar al autor u obra citados, se escriben entre comas.',
            'Utilicemos las comas para separar conectores. Antes de conectores simples como: pero, sino, mas, aunque, de manera que, porque, pues…Encerrando conectores compuestos como: es decir, en cambio, por otra parte, por supuesto, en otras palabras...',
            'En una cita, evitemos separar con punto los datos de referencia.',
            'Recordemos que en un texto académico se recomienda el uso de  cursivas para resaltar nominalizaciones, títulos de libros, nombres de revistas, extranjerismos, latinismos o conceptos claves.',
            'Aseguremos consistencia en aplicación de recursos notacionales. Por ejemplo, si marcamos en cursivas el título de una obra, deberemos marcarlas en todos los casos y no cambiar (por ejemplo, a comillas) ese recurso. Lo mismo puede ocurrir con mayúsculas iniciales, negrillas, paréntesis, etc.',
            'Marquemos coma delante de las conjunciones y, e, o, u cuando estén destinadas a enlazar con toda la proposición anterior, y no con el último de sus miembros.',
            'Recordemos que la concordancia en adjetivos compuestos unidos mediante un guion solo opera para el último miembro; la primera parte queda en masculino.',
            'Recordemos que el punto cierra todos los elementos de la oración.',
            'Cuidemos la repetición de un conector dentro de una misma oración, un mismo párrafo o entre varios muy cercanos.',
            'Evitemos la repetición de un complemento.',
            'Incluyamos conectores u oraciones de transición entre ideas para evitar saltos abruptos en el tratamiento de un tema.',
            'Si al citar, el apellido del autor forma parte de la oración, retirémoslo del paréntesis de referencia bibliográfica.',
            'Mantengamos la misma voz elocutiva en las oraciones, el párrafo y –ojalá– en el texto.',
            'Apliquemos también las reglas de la tilde sobre palabras en mayúscula; lo mismo vale para la diéresis.',
            'Evitemos lo que podríamos llamar la colisión sintáctica entre el verbo de un encabezado y la cita que le sigue en la misma construcción.',
            'Usemos rayas (también llamadas guiones largos) para encerrar aclaraciones o incisos que interrumpen el discurso, en lugar de guiones (signos más cortos). Estos últimos se usan básicamente cuando es necesario hacer divisiones dentro de una palabra (técnico-administrativo, teórico-práctico).',
            'Recordemos que cuando utilicemos guiones, no debemos dejar espacios entre las palabras que se unen.',
            'Aprovechemos diversas posibilidades notacionales, en cuanto a comillas o paréntesis, para evitar confusiones jerárquicas.',
            'No olvidemos que los signos de cierre (como punto, coma o punto y coma) siempre van detrás de las comillas, corchetes o paréntesis.',
            'Recordemos que en Español existen solo dos contracciones (al y del) que salen de la unión de las preposiciones a y de con el artículo definido el. Estas palabras solo aparecen de modo separado cuando se trate de un artículo que pertenezca a un nombre propio (“es periodista de El Espectador”).',
            'Usemos la preposición “a” cuando el complemento directo se refiera a persona. Obviamente, debemos evitarla en el caso contrario.',
            'Recordemos que en Español los gentilicios y días de la semana no llevan mayúscula inicial.',
            'Usemos el punto y coma en enumeraciones complejas.',
            'Busquemos cierta simetría en la construcción de oraciones subordinadas del mismo rango.',
            'Recordemos que en español los signos de interrogación y exclamación van tanto al comienzo como al final. Después de estos signos no se marca punto. Eso sí, se comienza con mayúscula inicial',
            'Mantengamos la consistencia en el manejo de tiempos verbales para eventos semánticos similares.',
            'Tengamos presente que en la actualidad, la mayúscula sostenida dentro de un texto académico da la impresión de un grito; lo mismo puede interpretarse de negrillas o subrayados dentro del texto. Podríamos apelar a recursos notacionales más discretos como el de las cursivas o comillas, aplicados, eso sí, consistentemente.',
            'Recordemos que el pronombre personal “le” se pluraliza si el complemento al que se refiere está en plural.',
            'Recordemos que después de punto y coma, no marcamos mayúscula inicial, a no ser que se trate de un nombre propio.',
            'A la hora de enumerar es importante mantener cierta simetría morfológica, sintáctica y semántica.',
            'Evitemos la acumulación de sinónimos cercanos (procedimiento común en otros géneros discursivos), a no ser que procedamos a diferenciar sus sentidos más adelante.',
            'Evitemos el adverbio relativo “donde” en oraciones que  no expresan, en sentido estricto, relaciones de lugar. Para enmendar la oración se debe ajustar la oración a la circunstancia específica: cuando (tiempo), como (modo)… o por medio de giros con pronombres relativos (en el cual, por el cual, a través del cual...).',
            'Evitemos la redundancia de conectores.',
            'Revisemos la estructuración de párrafos. No olvidemos que un párrafo es unidad de sentido microestructural. Por lo general, comprende más de una oración. Aunque es difícil plantear alguna norma al respecto, si una oración está muy conectada a la anterior, debe ir dentro del mismo párrafo.',
            'Revisemos casos ortográficos de palabras homófonas que el computador no corrige. Hacen parte de esta clasificación las palabras que suenan igual, pero significan y se escriben diferente, tales como: hierba (planta) y hierva (inflexión del verbo hervir). Naturalmente, la distinción entre uno y otro caso solo le compete al usuario, ya que el computador aprobará indistintamente cualquiera de los dos por encontrarse registrados en su diccionario.',
            'Identifiquemos los diversos usos de los “porqués”',
            'Evitemos marcar dos puntos entre el sustantivo que designa un trabajo y su título entre comillas.',
            'Recordemos que los ordinales primero y tercero (además de sus compuestos) adoptan los apócopes primer y tercer únicamente antes de palabras en masculino; para palabras en femenino adoptan las formas primera y tercera. En ese caso, es correcto decir primer día, tercer intento, vigesimoprimer año..., pero no:',
            'Recordemos que si en medio de una oración conectamos una cita de otro autor (sin que la precedan los dos puntos), no tenemos que iniciar la cita con mayúscula inicial.',
            'Recordemos que, para referenciar una cita en textos académicos alojados en bases de datos, en los que no sea posible identificar con claridad el número de páginas, podemos acudir al recurso de identificar el número de párrafo en el que se encuentra y emplear el signo §.',
            'Para encadenar preguntas, utilicemos la siguiente forma.',
            'Escribamos con mayúscula inicial todo nombre propio. Ejemplos: nombres de persona, animal o cosa singularizada, nombres geográficos, apellidos, marcas comerciales, etc.',
            'Usemos organizadores metatextuales (nomencladores, subtítulos, guiones, viñetas…) para hacer nuestro texto más navegable y organizado.',
            'Recordemos, tal como lo pide la Ortografía de la RAE, que los títulos y los subtítulos de libros, artículos, capítulos, obras de arte, etc., cuando aparecen aislados, no llevan punto final.',
            'Cuando en medio de una oración incrustamos una pregunta, no empleamos mayúscula inicial para su primera palabra. En muchos casos, ni siquiera es necesario el signo de interrogación.',
            'Evitemos marcar coma entre sustantivo y adjetivo.',
            'Marquemos la coma en elipsis (omisión de una palabra o un segmento sintáctico cuyo contenido se puede recuperar por el contexto).',
            'Podemos marcar coma –si es necesario– después de una abreviatura que termine en punto, como etc.',
            'Usemos paréntesis para indicar el departamento o provincia al que pertenece un municipio que lo antecede en la oración.',
            'Recordemos que, después de coma, punto y coma, punto y seguido o signos de exclamación y admiración, se deja un espacio.',
            'Recordemos el uso de la coma enumerativa.',
            'Recordemos las convenciones para citas mayores de 40 palabras.',
            'Limpiemos el texto de erratas orto-tipográficas.',
            'Evitemos el uso de mayúscula inicial para sustantivos que no sean nombres propios o que no estén iniciando oración.',
            'Recordemos las normas generales de citación.',
        ];
            
        this.examples = [
            '• Amaneció lloviendo, no sabía en qué iba a parar mi vida al día siguiente.\n'+
            '• La lectura es vida, muchos estudiantes han tropezado con docentes que les han atrofiado el placer del libro.\n',
            '• Trabajaba duro. A fin de conseguir altos ingresos.\n'+
            '• La escritura es un proceso cognitivo vital en toda propuesta investigativa. Gracias al cual se ponen en marcha fases complejas de corrección.\n',
            'Se decide trabajar la tipología del texto argumentativo debido a que es uno de los textos más comunes en la vida escolar de una persona, cuya función es de dar y facilitar información de hechos, fenómenos y conceptos; este es un texto que poco dominan los estudiantes.',
            'Trabajaremos la tipología textual del texto argumentativo.',
            'Según Van Dijk, el texto argumentativo no posee una superestructura única “no es un texto puro”.',
            'El texto argumentativo permite al lector acercarse a la opinión del autor, aseguran el diálogo de ideas y fomentan el espíritu crítico.',
            'Debemos trabajar para que, el lector adquiera competencias argumentativas.',
            'con base a lo anterior',
            '• Esto es lo que está ocurriendo al interior de la Asamblea Nacional Constituyente.\n'+
            '• Eso se ha dicho al interior de la Facultad.\n',
            'Si miramos la cantidad de dificultades que hemos comprobado en los grados que han precedido  a noveno y que por lo menos han  incitado  al estudiante a realizar una producción de textos argumentativos, ya que a estas instancias debe de evidenciar cierta actitud con el manejo del discurso donde la relación entre contenido y forma brinda la posibilidad de construir una totalidad conceptual que constituye la base de su pensamiento.',
            'Realicé un profundo análisis de la causa obteniendo una información seria.',
            'Las estanterías del rincón, estaban perfectamente organizadas.',
            'Se conoce como texto argumentativo, porque cumple con las condiciones de Ducrot, debido a la presentación de una estructura, ya quela intención comunicativa de estos textos es defender una opinión.',
            'Partire hoy mismo.',
            'suelo ser una persona muy practica.',
            'tu lo hiciste por mi.',
            'Dimensión semántico',
            'También depende de las variables y métodos tomadas',
            'El orden a seguir.',
            'Pienso de que hoy llega.',
            'Estoy seguro que no volverá.',
            'Habrían posibilidades',
            'Así es que se hace.',
            'Ha venido trabajando mucho.',
            'Lo perdieron todo por éstos.',
            'Las ilustraciones aparecen con indicaciones como: “como puede observarse en el gráfico...”, “en este dibujo...”',
            'El texto expositivo-explicativo busca que el receptor perciba claramente la información, razón por la cual también se denominan informativos.',
            'En ese momento Adrián el marido de mi hermana dijo que nos ayudaría.',
            'La educación básica, además de orientar hacia los fines de la educación, tiene como reto generar espacios es decir buscar alternativas para mejorar los procesos.',
            '“Texto es la unidad lingüística comunicativa fundamental, producto de la actividad verbal humana, que posee carácter social”. (Bernárdez, 1982: 85).',
            'El proceso que desarrollan las plantas, por medio del cual el dióxido de carbono se convierte en oxígeno, se llama fotosíntesis.',
            '"La historia de Pi" es una novela que narra la vida de un personaje hindú y su travesía después de un naufragio. (más adelante en la redacción) La historia de Pi fue adaptada al cine y se estrenó en noviembre de 2012.',
            'Estudió todo lo que pudo sobre argumentos de ejemplificación, de analogía, de autoridad, de causa y lo aplicó a su profesión.',
            'Las medidas políticas-sociales.',
            '“Un léxico es una filosofía en tiempo real”. (Serna, 2012: 32)',
            'Los profesores viven a cada día un reto didáctico en cuanto a la transposición de temas; por ende, el ejercicio de lectura del contexto es permanente para conseguir mejores regulaciones temáticas; por ende, el maestro de hoy debe estar, más que concentrado, atento.',
            'En las prácticas de intervención de aula que desarrollamos los estudiantes universitarios, se encuentran en la labor cotidiana grandes dificultades en los procesos de enseñanza y aprendizaje.',
            'La didáctica de la lengua precisa de maestros mejor formados para la transposición. Hay muchos docentes preocupados solamente por la transmisión no mediada de conocimientos.',
            '(Van Dijk, 1980: 35) habla de la necesidad de un estudio interdisciplinario del texto.',
            'La didáctica parte de tres preguntas: ¿Qué saber voy a enseñar? ¿Quién es el responsable de lo que se va a enseñar? y ¿A quiénes se les va a enseñar?',
            'UNIVERSIDAD DEL QUINDIO, DIDACTICA DE LA BIOLOGIA Y MAESTRIA EN LINGUISTICA, AlvaroAngel',
            'Para Chevallard (1991) la transposición Didáctica es “un contenido de saber que ha sido designado como saber a enseñar, sufre a partir de entonces un conjunto de transformaciones adaptativas que van a hacerlo apto para ocupar un lugar entre los objetos de enseñanza.',
            'Aplicaba con cuidado todas las macrorreglas -tal como lo sugería Van Dijk- y desarrollaba fortalezas en la capacidad de síntesis, paráfrasis, inferencia y abstracción.',
            'El proceso de enseñanza – aprendizaje exige permanentes ajustes intermedios.',
            'Algunos autores abordan características propiamente textuales para esta clasificación (Halliday y Hasan (1976, 1978), van Dijk (1978), Bernárdez (1982,  1995), Portolés (1998), Cassany (1999) y Lomas (1999)).',
            'Sus palabras fueron estas: «Trabajemos con cuidado.» Luego abrió el texto y corrigió los apartados correspondientes a dimensiones y niveles (Van Dijk, 1978 y 1982.)',
            'Es tarea de el profesor seducir a los estudiantes hacia el aprendizaje.',
            'Van Dijk cita dos autores: Dressler y de Beaugrande a la hora de abordar la cohesión textual.',
            'El autor Argentino aborda las especificidades de la argumentación.',
            'Cada uno de los grupos de trabajo preparará un taller: el primer grupo, el taller de cerámica, arcilla y pintura, el segundo, el de telares, tejido y confección, el tercero, el de fotografía, televisión y cine y el cuarto, el de cestería, plegados y marquetería.',
            'Es posible que los alumnos de secundaria mejoren su escritura y que esta les ayuda en sus procesos cognitivos.',
            'Cuándo llegaste?.',
            'Los resultados del proyecto arrojan dudas notorias sobre la efectividad del trabajo y pusieron a pensar a los investigadores sobre su profesionalismo.',
            'En su obra LA VORÁGINE, Rivera mantiene la vieja visión de la selva.',
            'Se trata de propiciar experiencias que le permitan a los estudiantes la comprensión del problema.',
            'La didáctica de la lengua se alimenta de las diversas perspectivas lingüísticas; En este caso, el análisis del discurso tiene mucho por aportar a las discusiones.',
            'La experiencia facilitó la recopilación de información sobre las creencias de los profesores en los siguientes aspectos: el uso de terminología, escribir mensajes de felicitación, una convivencia más auténtica y sintiendo confianza en los cursos.',
            'Su función es dar, brindar y otorgar información.',
            'El texto argumentativo se identifica porque informa de la manera más objetiva posible una temática, donde  la persona tenga que acomodar los saberes previos a los nuevos saberes  y generar un nuevo conocimiento de manera puntual.',
            'En consecuencia, por eso.',
            'Surge, así, la pregunta de investigación: ¿Cómo conseguir que los estudiantes de primer semestre de Ingeniería Eléctrica comprendan textos argumentativos?\n'+
            '\n'+
            'Esta pregunta representa la preocupación central de la investigación y determina sus términos claves, a saber:\n'+
            'Didáctica, Tipología textual argumentativa, dimensiones y niveles del texto, comprensión lectora, estrategias cognitivas y metacognitivas.\n',
            'quiero una hierva para preparar una infusión.',
            '¿porqué llegaste tarde?',
            'Fernando Vásquéz desarrolla su texto: “Pregúntele al ensayista” como apoyo a los estudiantes en la escritura de textos argumentativos.',
            'Primer tarea.',
            'Por otra parte, Bronckart y Schneuwly insisten en que “La tradición nos ha legado una enseñanza de la lengua materna dividida en compartimentos estancos que tanto los didactas como los enseñantes hace mucho tiempo cuestionan” (1996: 75).',
            '(Velásquez, 2014, :5).',
            'Responde a preguntas como: ¿qué es?; ¿cómo es?; ¿de qué partes consta?; ¿qué hace?; ¿para qué sirve?',
            'martha es una buena estudiante.',
            'Enfoque de investigación',
            'Tipos de personalidades.',
            'Este proyecto intenta responder a la pregunta sobre ¿Cómo mejorar las habilidades de expresión oral en estudiantes universitarios.',
            'El profesor desarrolló un proceso, argumentativo con todos sus estudiantes.',
            'Para el marco teórico acudimos a Jakobson por las funciones del lenguaje; a Perelman por su teoría de la argumentación; y a Camps por el concepto de didáctica.',
            'Si hablamos de dificultades, riesgos, costos, etc. tenemos que incluir otros diagnósticos.',
            'Realizó investigaciones sobre salud en Bello Antioquia.',
            'Joaquín Pérez,eminente abogado de la región,ofreció una conferencia sobre el tema.',
            'Revisó los informes los talleres y los ensayos.',
            '"Durante mucho tiempo los filósofos han presupuesto que el papel de un “enunciado” sólo puede ser “describir” algún estado de cosas, o “enunciar algún hecho”, con verdad o falsedad. Es cierto que los gramáticos han señalado siempre que no todas las “oraciones” son (usadas para formular) enunciados: tradicionalmente, junto a los enunciados (de los gramáticos) hay también preguntas y exclamaciones, y oraciones que expresan órdenes o deseos o permisiones (Austin, 1955: 3)"',
            '• Debemos revisar la presencialidad de erratas\n'+
            '• Investigamos sober la didáctica del lenguaje.\n',
            'En esta investigación emplearemos la perspectiva Histórico-hermenéutica.',
            '“Un análisis de más de doscientos estudios evidencia la correlación entre la enseñanza de destrezas sociales y el mejoramiento del desempeño escolar”',
        ];
            
        this.corrections = [
            '• Amaneció lloviendo. No sabía en qué iba a parar mi vida al día siguiente.\n'+
            '• La lectura es vida. Muchos estudiantes han tropezado con docentes que les han atrofiado el placer del libro.\n',
            '• Trabajaba duro, a fin de conseguir altos ingresos.\n'+
            '• La escritura es un proceso cognitivo vital en toda propuesta investigativa, gracias al cual se ponen en marcha fases complejas de corrección.\n',
            'Se decide trabajar la tipología del texto argumentativo, uno de los textos más comunes en la vida escolar de una persona, cuya función consiste en facilitar información de hechos, fenómenos y conceptos; se trata, en última instancia, de un texto que poco dominan los estudiantes.',
            'Trabajaremos la tipología textual argumentativa.',
            'Según Van Dijk, el texto argumentativo no posee una superestructura única: “no es un texto puro”.',
            'El texto argumentativo permite al lector acercarse a la opinión del autor, asegura el diálogo de ideas y fomenta el espíritu crítico.',
            'Debemos trabajar para que el lector adquiera competencias argumentativas.',
            'con base en lo anterior',
            '• Esto es lo que está ocurriendo en la Asamblea Nacional Constituyente.\n'+
            '• Eso se ha dicho en la Facultad.\n',
            'Si miramos la cantidad de dificultades que hemos comprobado en los grados que han precedido  a noveno y que por lo menos han  incitado  al estudiante a realizar una producción de textos argumentativos, tendríamos que replantear nuestra intervención en el aula. Esto se debe a que en estas instancias el estudiante debe evidenciar cierta actitud hacia el manejo del discurso, desde la relación entre contenido y forma. De esta manera, accede a la posibilidad de construir una totalidad conceptual que constituya la base de su pensamiento.',
            'Realicé un profundo análisis de la causa y obtuve una información seria.',
            'Las estanterías del rincón estaban perfectamente organizadas.',
            'Se conoce como texto argumentativo, porque cumple con las condiciones de Ducrot. Esto se debe ala presentación de una estructura, en la que se advierte la intención comunicativa de defender una opinión.',
            'Partiré hoy mismo.',
            'suelo ser una persona muy práctica.',
            'tú lo hiciste por mí.',
            'Dimensión semántica',
            'También depende de las variables y métodos tomados.',
            'El orden que seguiremos o el orden por seguir.',
            'Pienso que hoy llega.',
            'Estoy seguro de que no volverá.',
            'Habría posibilidades',
            'Así es como se hace, o mejor, así se hace.',
            'Ha trabajado mucho.',
            'Lo perdieron todo por estos.',
            'Las ilustraciones aparecen con indicaciones del tipo: “como puede observarse en el gráfico...”, “en este dibujo...”',
            'El texto expositivo-explicativo busca que el receptor perciba claramente la información, razón por la cual también se denomina informativo.',
            'En ese momento Adrián, el marido de mi hermana, dijo que nos ayudaría.',
            'La educación básica, además de orientar hacia los fines de la educación, tiene como reto generar espacios, es decir, buscar alternativas para mejorar los procesos.',
            '“Texto es la unidad lingüística comunicativa fundamental, producto de la actividad verbal humana, que posee carácter social” (Bernárdez, 1982: 85).',
            'El proceso que desarrollan las plantas, por medio del cual el dióxido de carbono se convierte en oxígeno, se llama <i>fotosíntesis</i>.',
            '<i>La historia de Pi</i> es una novela que narra la vida de un personaje hindú y su travesía después de un naufragio. (más adelante en la redacción) <i>La historia de Pi</i> fue adaptada al cine y se estrenó en noviembre de 2012.',
            'Estudió todo lo que pudo sobre argumentos de ejemplificación, de analogía, de autoridad, de causa, y lo aplicó a su profesión.',
            'Las medidas político-sociales.',
            '“Un léxico es una filosofía en tiempo real” (Serna, 2012: 32).',
            'Los profesores viven a cada día un reto didáctico en cuanto a la transposición de temas; por ende, el ejercicio de lectura del contexto es permanente para conseguir mejores regulaciones temáticas; en última instancia, el maestro de hoy debe estar, más que concentrado, atento.',
            'En las prácticas de intervención de aula que desarrollamos los estudiantes universitarios, se encuentran grandes dificultades en los procesos de enseñanza y aprendizaje.',
            'La didáctica de la lengua precisa de maestros mejor formados para la transposición. Sin embargo, hay muchos docentes preocupados solamente por la transmisión no mediada de conocimientos.',
            'Van Dijk (1980: 35) habla de la necesidad de un estudio interdisciplinario del texto.',
            'Corrección (bien puede ser unificando el texto en primera persona o dejándolo impersonal): La didáctica parte de tres preguntas: ¿Qué saber voy a enseñar? ¿Quién soy yo? y ¿A quiénes les voy a enseñar?',
            'UNIVERSIDAD DEL QUINDÍO, DIDÁCTICA DE LA BIOLOGÍA Y MAESTRÍA EN LINGÜÍSTICA, Álvaro Ángel',
            'Para Chevallard (1991) la transposición Didáctica es “un contenido de saber que ha sido designado como saber a enseñar [que] sufre a partir de entonces un conjunto de transformaciones adaptativas que van a hacerlo apto para ocupar un lugar entre los objetos de enseñanza”.',
            'Aplicaba con cuidado todas las macrorreglas –tal como lo sugería Van Dijk– y desarrollaba fortalezas en la capacidad de síntesis, paráfrasis, inferencia y abstracción.',
            'El proceso de enseñanza-aprendizaje exige permanentes ajustes intermedios.',
            'Algunos autores abordan características propiamente textuales para esta clasificación [Halliday y Hasan (1976, 1978), van Dijk (1978), Bernárdez (1982,  1995), Portolés (1998), Cassany (1999) y Lomas (1999)].',
            'Sus palabras fueron estas: «Trabajemos con cuidado». Luego abrió el texto y corrigió los apartados correspondientes a dimensiones y niveles (Van Dijk, 1978 y 1982).',
            'Es tarea del profesor seducir a los estudiantes hacia el aprendizaje.',
            'Van Dijk cita a dos autores: Dressler y de Beaugrande a la hora de abordar la cohesión textual.',
            'El autor argentino aborda las especificidades de la argumentación.',
            'Cada uno de los grupos de trabajo preparará un taller: el primer grupo, el taller de cerámica, arcilla y pintura; el segundo, el de telares, tejido y confección; el tercero, el de fotografía, televisión y cine; yel cuarto, el de cestería, plegados y marquetería.',
            'Es posible que los alumnos de secundaria mejoren su escritura, la que, a su vez, les ayuda en sus procesos cognitivos.',
            '¿Cuándo llegaste?',
            '(para este caso, cualquiera de las opciones es válida: mover al pretérito o al presente histórico): Los resultados del proyecto arrojaron dudas notorias sobre la efectividad del trabajo y pusieron a pensar a los investigadores sobre su profesionalismo.',
            'En su obra La Vorágine, Rivera mantiene la vieja visión de la selva.',
            'Se trata de propiciar experiencias que les permitan a los estudiantes la comprensión del problema.',
            'La didáctica de la lengua se alimenta de las diversas perspectivas lingüísticas; en este caso, el análisis del discurso tiene mucho por aportar a las discusiones.',
            'La experiencia facilitó la recopilación de información sobre las creencias de los profesores en los siguientes aspectos: el uso de terminología, la escritura de mensajes de felicitación, la convivencia más auténtica y el fortalecimiento de la  confianza en los cursos.',
            'Su función es informar.',
            'El texto argumentativo se identifica porque informa de la manera más objetiva posible una temática; desde esta condición la persona tiene que acomodar los saberes previos a los nuevos saberes  y generar un nuevo conocimiento de manera puntual.',
            'Uno de los dos: en consecuencia o por eso.',
            '• Surge, así, la pregunta de investigación: ¿Cómo conseguir que los estudiantes de primer semestre de Ingeniería Eléctrica comprendan textos argumentativos? Esta pregunta representa la preocupación central de la investigación y determina sus términos claves, a saber: Didáctica, Tipología textual argumentativa, dimensiones y niveles del texto, comprensión lectora, estrategias cognitivas y metacognitivas.',
            'Quiero una hierba para preparar una infusión.',
            '¿Por qué llegaste tarde?',
            'Fernando Vásquéz desarrolla su texto “Pregúntele al ensayista” como apoyo a los estudiantes en la escritura de textos argumentativos.',
            'Primera tarea',
            'Por otra parte, Bronckart y Schneuwly insisten en que “la tradición nos ha legado una enseñanza de la lengua materna dividida en compartimentos estancos que tanto los didactas como los enseñantes hace mucho tiempo cuestionan” (1996: 75).',
            '(Velásquez, 2014, § 5).',
            'Responde a preguntas como: ¿qué es?, ¿cómo es?, ¿de qué partes consta?, ¿qué hace?, ¿para qué sirve? (separadas por comas y en minúscula inicial)',
            'Martha es una buena estudiante.',
            '1.1 Enfoque de investigación',
            'Tipos de personalidades',
            'Este proyecto intenta responder a la pregunta sobre cómo mejorar las habilidades de expresión oral en estudiantes universitarios.',
            'El profesor desarrolló un proceso argumentativo con todos sus estudiantes.',
            'Para el marco teórico acudimos a Jakobson por las funciones del lenguaje; a Perelman, por su teoría de la argumentación; y a Camps, por el concepto de didáctica.',
            'Si hablamos de dificultades, riesgos, costos, etc., tenemos que incluir otros diagnósticos.',
            'Realizó investigaciones sobre salud en Bello (Antioquia).',
            'Joaquín Pérez, eminente abogado de la región, ofreció una conferencia sobre el tema.',
            'Revisó los informes, los talleres y los ensayos.',
            'Durante mucho tiempo los filósofos han presupuesto que el papel de un “enunciado” sólo puede ser “describir” algún estado de cosas, o “enunciar algún hecho”, con verdad o falsedad. Es cierto que los gramáticos han señalado siempre que no todas las “oraciones” son (usadas para formular) enunciados: tradicionalmente, junto a los enunciados (de los gramáticos) hay también preguntas y exclamaciones, y oraciones que expresan órdenes o deseos o permisiones (Austin, 1955: 3)',
            '• Debemos revisar la presencia de erratas\n'+
            '• Investigamos sobre la didáctica del lenguaje.\n',
            'En esta investigación emplearemos la perspectiva histórico-hermenéutica.',
            '“Un análisis de más de doscientos estudios evidencia la correlación entre la enseñanza de destrezas sociales y el mejoramiento del desempeño escolar” (Viadero, 2007: 36).',
        ];
            
        this.notes = [
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'Algunas preposiciones para tener en cuenta:\n'+
            '• De acuerdo con\n'+
            '• Acorde con\n'+
            '• En relación con\n'+
            '• En comparación con\n'+
            '• En contraste con\n'+
            '• En relación con\n'+
            '• Relacionado con\n'+
            '• Diferente de\n'+
            '• Distinto de\n'+
            '• En razón de\n'+
            '• Respecto de… Con respecto a\n',
            'null',
            'Nos damos cuenta de que la expresión señalada en letras cursivas no tuvo resolución; todo lo que vino luego le agregaba condiciones y explicaciones, pero en ningún momento apareció la cláusula que la cerrara. Además, por la misma extensión se advierten ciertos descuidos que se han anotado en retos anteriores.',
            'Conviene evitar el gerundio cuando la acción que él indica es posterior a la del verbo principal (González, 2005: 35).\n'+
            '\n'+
            '\n'+
            'OTROS EJEMPLOS\n'+
            '\n'+
            'Ejemplo: Anómala constitución del yo y el superyó, estando este último localizado.\n'+
            '\n'+
            'Aquí el gerundio fue empleado como conector de dos ideas: la que se refiere a la anomalía y la de la localización.\n'+
            '\n'+
            'Corrección: Anómala constitución del yo y el superyó; este último está localizado en.\n'+
            '\n'+
            '\n'+
            'Ejemplo: En este caso el maestro debe detener la explicación, siendo esta la única alternativa.\n'+
            '\n'+
            'Corrección: En este caso el maestro debe detener la explicación; esta es la única alternativa.\n'+
            '\n'+
            '\n'+
            'Ejemplo: Se necesitan secretarias sabiendo inglés.\n'+
            '\n'+
            'En este caso, el gerundio toma lugar incorrectamente de una frase adjetiva.\n'+
            '\n'+
            'Corrección: Se necesitan secretarias que sepan inglés.\n'+
            '\n'+
            '\n'+
            'Ejemplo: Se trata de una propuesta formulada por Yves Chevallard desde el campo de las matemáticas haciendo referencia a la distancia existente entre el saber erudito y saber enseñar.\n'+
            '\n'+
            'Otro caso de gerundio utilizado inadecuadamente como adjetivo.\n'+
            '\n'+
            'Corrección: Se trata de una propuesta formulada por Yves Chevallard desde el campo de las matemáticas que hace referencia a la distancia existente entre el saber erudito y saber enseñar.\n',
            'null',
            'null',
            'TIPO / ACENTO EN / TILDE / EJEMPLO\n'+
            '• Agudas / Última sílaba / Cuando terminan en vocal, n, s / Vivirás, gorrión\n'+
            '• Graves / Penúltima sílaba / Cuando NO terminan en vocal, n, s / Lápiz, ángel\n'+
            '• Esdrújulas / Antepenúltima sílaba / TODAS llevan /  Plátano, música\n'+
            '• Sobreesdrújulas / Trasantepenúltima sílaba / TODAS llevan / Dígamelo, llévaselo\n'+
            '• Hiatos / Cuando dos vocales fuertes estén juntas (u, i) / TODAS LLEVAN / País, baúl\n',
            'PALABRA 		CLASIFICACIÓN			FORMA\n'+
            'Práctico		Esdrújula				Adjetivo calificativo\n'+
            'Practico		Grave				    Presente indicativo de practicar\n'+
            'Practicó		Aguda					Pretérito indicativo de practicar\n'+
            '\n'+
            'No olvidemos que el computador para estos casos guarda “un respetuoso silencioso”. En estos casos, solo el usuario sabe si la palabra debe tildarse o no. Example: tomo y tomó; hábito, habito y habitó; realizara y realizará; seria y sería; tenia y tenía; venia y venía; gráfica y grafica; amo y amó.\n',
            'TILDE DIACRÍTICA\n'+
            "aun no tengo idea de como poner esa tabla aqui :'c\n",
            'null',
            'null',
            'null',
            'null',
            'Curiosamente, por el mismo temor que genera el dequeísmo, muchas personas suprimen la preposición DE en oraciones que la rigen. La mejor forma de salir de la duda que esto genera es pensar en la pregunta correspondiente. En los ejemplos que vienen, sabemos que las preguntas serían: ¿DE qué estoy seguro?, ¿DE qué me doy cuenta?, ¿DE qué soy consciente? Por consiguiente, si la pregunta lleva la preposición DE, la afirmación respectiva debe conservarla. En cambio, nunca preguntamos ¿DE qué pienso?, ¿De qué digo?, ¿De qué veo?, lo que haría incorrecto añadir la preposición DE en las afirmaciones respectivas.',
            'El verbo “haber”, usado como principal en una oración (cuando aparezca solo, sin ningún otro verbo en participio a continuación), siempre es impersonal.  Por tanto, conserva la misma forma sin importar que el sustantivo que lo siga esté en singular o en plural. Por eso,  se dice había un niño o había miles de niños, hubo una fiesta o hubo miles de fiestas, habrá una elección o habrá muchísimas elecciones, etc.',
            'El “que galicado” corresponde a un giro tomado del francés –y no aceptado en el español– de la forma VERBO SER + QUE ANUNCIATIVO.  Para corregirlo, se puede cambiar el “que” por un adverbio relativo que se ajuste a la oración (donde, cuando, como…) o suprimiéndolo si se quiere.\n'+
            '\n'+
            'Otros ejemplos:\n'+
            '\n'+
            'Example: Es por eso que debes trabajar más.\n'+
            '\n'+
            'Corrección: Es por eso por lo que debes trabajar más…, o mejor, por eso debes trabajar más.\n'+
            '\n'+
            '\n'+
            'Example: Es por esa razón que te enfermaste.\n'+
            '\n'+
            'Correction: Es por esa razón por la que te enfermaste, o mejor, por esa razón te enfermaste.\n',
            'Una perífrasis es un giro o rodeo. Con los verbos se presentan muchos giros que pueden cambiarse por formas simples.\n'+
            '\n'+
            'Otros ejemplos\n'+
            '\n'+
            'Ejemplo: La didáctica permite dar apoyo a los procesos.\n'+
            '\n'+
            'Corrección: La didáctica apoya los procesos\n'+
            '\n'+
            '\n'+
            'Ejemplo: El autor termina concluyendo de modo afirmativo.\n'+
            '\n'+
            'Corrección: El autor concluye de modo afirmativo.\n'+
            '\n'+
            '\n'+
            'Ejemplo: El maestro debe poder combinar\n'+
            '\n'+
            'Corrección: El maestro debe combinar\n',
            'Ya la Nueva Ortografía de la Real Academia eliminó esta norma. Lo mismo ocurrió con la palabra “solo” en cualquiera de sus acepciones.',
            'null',
            'null',
            'En el caso siguiente, la omisión de comas dispara otro sentido muy distinto: “Tu risa es más que alegre delincuente”. Propiamente lo que Quevedo quiso decir fue: “Tu risa es, más que alegre, delincuente”',
            'null',
            'null',
            'null',
            'null',
            'Sin embargo, en los demás casos, no marcamos coma antes de estas conjunciones.\n'+
            '\n'+
            '\n'+
            'Ejemplo: Encontró exámenes, entrevistas, encuestas, y un pretest.\n'+
            '\n'+
            'Corrección: Encontró exámenes, entrevistas, encuestas y un pretest.\n',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'Diéresis: "\n'+
            'Ejemplo: pinguino\n'+
            'Corrección: pingüino\n',
            'Notemos cómo todo iba bien hasta que apareció el verbo sufrir que cuadraba muy bien en la cita, pero que al contacto con una construcción ajena, regida por el verbo “es”, ya queda en el lugar equivocado. Otra manera de corregir este problema:\n'+
            '• Para Chevallard (1991) la transposición Didáctica es “un contenido de saber que ha sido designado como saber a enseñar”; según el autor, este “sufre a partir de entonces un conjunto de transformaciones adaptativas que van a hacerlo apto para ocupar un lugar entre los objetos de enseñanza”.\n',
            'null',
            'null',
            'Otra posible corrección:\n'+
            'Algunos autores abordan características propiamente textuales para esta clasificación (Halliday y Hasan, 1976, 1978; van Dijk, 1978; Bernárdez, 1982, 1995; Portolés, 1998; Cassany, 1999; Lomas, 1999).\n'+
            'Para el caso de comillas, podemos disponer de diversos tipos: las comillas angulares, también llamadas latinas o españolas (« »), las inglesas (“”) y las simples (‘’).\n'+
            '\n'+
            '\n'+
            'Example: Al encontrarse con el texto de Arturo, Marcos exclamó: “Es un terrible “esperpento” el que tengo ante mis ojos”.\n'+
            '\n'+
            'Correction: Al encontrarse con el texto de Arturo, Marcos exclamó: «Es un terrible “esperpento” el que tengo ante mis ojos».\n',
            'null',
            'null',
            'null',
            'null',
            'null',
            'De la oración principal (“es posible”) se derivan dos oraciones subordinadas sujetivas: “que los alumnos mejoren su escritura” y “que esta les ayuda en sus procesos cognitivos”. Notemos cómo la segunda oración subordinada no encaja sintácticamente en la principal, porque su sujeto (“esta”) se refiere a una palabra que está en la otra subordinada (“escritura”). Propiamente esta segunda oración subordinada no se deriva de la principal, sino de la otra subordinada. Por dicha razón el nexo “y que” resulta fuera de lugar, porque pondría en el mismo nivel dos oraciones que semánticamente no lo están.\n'+
            '\n'+
            'Posibles correcciones:\n'+
            '• Es posible que los alumnos de secundaria mejoren su escritura; esta, por su parte, les ayuda en sus procesos cognitivos.\n'+
            '\n'+
            'Un caso parecido, aunque no ocurra entre oraciones subordinadas, sería el siguiente:\n'+
            '• Algunas investigaciones buscaban delinear los significados que los estudiantes han construido de los conceptos fundamentales, y otras que intentaban explicar las creencias de sus profesores.\n'+
            '\n'+
            'Correction: Algunas investigaciones buscaban delinear los significados que los estudiantes han construido de los conceptos fundamentales, y otras intentaban explicar las creencias de sus profesores.\n'+
            '\n'+
            'Otro más:\n'+
            '• En las dos investigaciones se ocupan de las estrategias de los docentes, orientadas a la resolución, más que evaluar el resultado mismo\n'+
            '\n'+
            'Correction: En las dos investigaciones se ocupan de las estrategias de los docentes, orientadas a la resolución, más que a la evaluación del resultado mismo\n',
            'null',
            'null',
            'null',
            'null',
            'null',
            'La enumeración permite muchas modalidades de encabezamiento (por artículo definido y sustantivo, por verbo en infinitivo, por artículo indefinido y sustantivo, etc.)\n'+
            'Otro caso:\n'+
            '• La investigación se ocupó de diversos problemas en los campos de lectura y la escritura.\n'+
            'Correction:\n'+
            '• La investigación se ocupó de diversos problemas en los campos de la lectura y la escritura.\n',
            'null',
            'null',
            'null',
            'No olvidemos, además, que los párrafos se separan por un espacio interlineal, y solo la última oración cierra con punto y aparte.\n'+
            '\n'+
            'Ejemplo:\n'+
            '• Anna Camps (2004), define la didáctica como el espacio de “la interrelación entre las actividades de aprender, las actividades de enseñar y el objeto de ambas”.\n'+
            'En el proceso de intervención actúa de manera significativa la transposición didáctica como herramienta mediadora para la enseñanza, en la que es necesario transformar, reducir, simplificar y reformular.\n'+
            '\n'+
            'Corrección:\n'+
            '• Anna Camps (2004), define la didáctica como el espacio de “la interrelación entre las actividades de aprender, las actividades de enseñar y el objeto de ambas”. En el proceso de intervención actúa de manera significativa la transposición didáctica como herramienta mediadora para la enseñanza, en la que es necesario transformar, reducir, simplificar y reformular.\n',
            'PALABRAS HOMÓFONAS DE USO COMÚN\n'+
            '\n'+
            'B-V\n'+
            'Acerbo = Áspero, cruel/ sabor acerbo\n'+
            'Acervo = Montón / acervo de riquezas\n'+
            '\n'+
            'Barón = Título de nobleza/ Barón de Mónaco\n'+
            'Varón = Hombre / era todo un varón\n'+
            '\n'+
            'Bello = Hermoso / bello paisaje\n'+
            'Vello = Pelo / cubierto de vellos\n'+
            '\n'+
            'Bienes = Riqueza / numerosos bienes\n'+
            'Vienes = De venir/ si vienes, te espero\n'+
            '\n'+
            'Bota = Calzado / bota militar\n'+
            'Vota = De votar / vota por mí\n'+
            '\n'+
            'Botar = Arrojar / botar la basura\n'+
            'Votar = Elegir / va a votar por él\n'+
            '\n'+
            'Abrasar = Quemar / fuego abrasador\n'+
            'Abrazar = Estrechar con los brazos\n'+
            '\n'+
            'Coser = Unir telas con hilo\n'+
            'Cocer = Cocinar / cocer los alimentos\n'+
            '\n'+
            'Hola = Saludo / hola, como estás?\n'+
            'Ola = Montaña de agua / surfeando en las olas\n'+
            '\n'+
            'Malla = Red / Tejió una malla\n'+
            'Maya = Tribu / calendario maya\n',
            '• Por  qué: Adverbio interrogativo. En preguntas directas o cuando se refiera de modo indirecto a ellas\n'+
            '¿Por qué llegaste tarde?\n'+
            'ej: No sé bien por qué te demoraste tanto\n'+
            '\n'+
            '• Porque: Adverbio de causa. Se emplea en respuestas como conector para indicar la razón de algo\n'+
            'También es adverbio final equivalente a “para que”\n'+
            'ej: No vino a clase porque estaba enfermo\n'+
            'Lloró mucho porque lo dejó la novia\n'+
            'Lo hago todo porque estés bien\n'+
            '\n'+
            '• Porqué: Sustantivo que casi siempre va precedido por el artículo EL; puede cambiarse por la causa, la razón\n'+
            'ej: Nadie supo el porqué de su tristeza\n'+
            'Todos indagaban por el porqué de su tardanza\n'+
            '\n'+
            '• Por que: Unión de preposición y pronombre relativo. Equivale a “por las cuales”\n'+
            'ej: Estas son las razones por que no he podido asistir.\n',
            'null',
            'null',
            'null',
            'null',
            'Otra manera:\n'+
            '• Responde a preguntas como: ¿Qué es? ¿Cómo es? ¿De qué partes consta? ¿Qué hace? ¿Para qué sirve? (sin comas y con mayúscula inicial para cada pregunta)\n',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'Se emplea coma para separar los miembros de una enumeración, salvo los que vengan precedidos por alguna de las conjunciones y, e, o, u.',
            'Toda cita directa o textual de extensión igual o superior a las 40 palabras se escribe separada del párrafo regular, con sangría a la izquierda, a un solo espacio, con tamaño de letra 11 y sin comillas',
            'null',
            'null',
            'Estas incluyen los datos de apellido, año y página (sin la abreviatura p.). Ahora bien, si datos de apellido y año fueron incluidos en un lugar cercano a la cita, solo es necesario poner la indicación de la página.',
        ];            
    }

    getUses = () => {
        return this.uses;
    }

    getExamples = () => {
        return this.examples;
    }

    getCorrections = () => {
        return this.corrections;
    }

    getNotes = () => {
        return this.notes;
    }

    getSize = () => {
        return this.uses.length;
    }
}