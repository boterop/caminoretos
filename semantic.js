export default class Semantic
{
    constructor()
    {
        this.uses = [
            'Evitemos las enumeraciones de solo dos elementos.',
            'Busquemos alternativas más precisas a verbos muy generales como “tener”.',
            'Busquemos alternativas más precisas a verbos muy generales como “hacer”. Las posibilidades son muchas: realizar, construir, fabricar,  ocasionar, causar, provocar, practicar, formar, desempeñar, confeccionar...',
            'Evitemos aquellos adjetivos que no agreguen mayores detalles al sustantivo que califican.',
            'Recordemos la diferencia entre sino y si no.',
            'Recordemos la diferencia entre sobretodo (pegado) y sobre todo (en dos palabras).',
            'Tengamos presente que en textos académicos no se utiliza el signo de @ para referirse a ambos sexos.',
            'Recordemos marcar comas cuando hayamos cambiado el orden lógico de la oración',
            'Empleemos comas para introducir incisos que complementan de modo inmediato una idea.',
            'Evitemos el uso del signo “&” (en inglés, ampersand), ya que en español se utiliza más que todo para fines comerciales y no académicos. En su lugar empleamos la conjunción “y”.',
            'Revisemos la construcción de oraciones, pues la inserción de ciertos elementos conectivos –sobre  todo la conjunción “que”– puede enredar su sintaxis y el sentido mismo.',
            'Recordemos la diferencia entre “entorno” y “en torno”.',
            'Restrinjamos el uso del pronombre relativo “quien” solo para referirnos a personas.',
            'Definamos bien los antecedentes a los que apuntan los pronombres relativos.\n'+
            '(Debemos evitar, en lo posible, que el pronombre relativo quede muy lejano del antecedente.)\n',
            'Identifiquemos la diferencia entre las expresiones “a medida que” y “en la medida en que”.',
        ];
            
        this.examples = [
            'Se observan los verbos, formas impersonales, etc.',
            'Queda claro que la didáctica tiene un papel fundamental en el proceso de enseñanza-aprendizaje.',
            'Los talabarteros saben hacer artículos de cuero.',
            'El autor formula sus conclusiones finales.',
            'No es blanco si no negro.',
            'Me encanta la pizza, sobretodo la de champiñones y piña',
            'todos l@s niñ@s deben asistir.',
            'Para la elección de los fundamentos teóricos y metodológicos de este proyecto de investigación fue completamente imprescindible reflexionar sobre los intereses lingüísticos, psicológicos, didácticos, pedagógicos y culturales sociales que determinan los propósitos del trabajo.',
            'Utilizaremos el cuestionario para tantear conocimientos previos los cuales iluminan los procedimientos iniciales.',
            'María & Juan',
            'Es determinante que el enfoque cualitativo, ya que le permite al investigador dirigir el tratamiento de los datos, de acuerdo con las experiencias, significados, intereses, expectativas y cosmovisiones de grupos humanos diversos.',
            'Se observan dificultades entorno a la comprensión lectora',
            'Esta es una institución quien respeta los derechos de las personas.',
            'Esta investigación es viable, porque el aula es lugar de diferentes presiones y retos por parte de las circunstancias difíciles que determinan las alianzas internacionales a gran escala y en respuesta a las nuevas necesidades de las instituciones que participan de la globalización económica, los cuales están presentes en todos los ámbitos del currículo.',
            'en la medida en que pase el tiempo mejorará su estado de ánimo.',
        ];
            
        this.corrections = [
            'El lector espera, al menos, tres elementos antes del “etcétera”.',
            'Queda claro que la didáctica cumple un papel fundamental en el proceso de enseñanza-aprendizaje.',
            'Los talabarteros saben confeccionar artículos de cuero.',
            'El autor formula sus conclusiones.',
            'No es blanco, sino negro.',
            'Me encanta la pizza, sobre todo la de champiñones y piña',
            'todos los niños deben asistir.',
            'Para la elección de los fundamentos teóricos y metodológicos de este proyecto de investigación, fue completamente imprescindible reflexionar sobre los intereses lingüísticos, psicológicos, didácticos, pedagógicos y culturales sociales que determinan los propósitos del trabajo.',
            'Utilizaremos el cuestionario para tantear conocimientos previos, los cuales iluminan los procedimientos iniciales.',
            'María y Juan',
            'Es determinante el enfoque cualitativo, ya que le permite al investigador dirigir el tratamiento de los datos, de acuerdo con las experiencias, significados, intereses, expectativas y cosmovisiones de grupos humanos diversos.',
            'Se observan dificultades en torno a la comprensión lectora',
            'Esta es una institución que respeta los derechos de las personas.',
            'Esta investigación es viable, porque el aula es lugar de diferentes presiones y retos por parte de las circunstancias difíciles que determinan las alianzas internacionales a gran escala y en respuesta a las nuevas necesidades de las instituciones que participan de la globalización económica; dichos retos están presentes en todos los ámbitos del currículo.',
            'a medida que pase el tiempo mejorará su estado de ánimo.',
        ];
            
        this.notes = [
            'En un texto académico es muy importante argumentar por la cantidad. Al respecto, Weston nos pregunta: ¿Hay más de un ejemplo? Por ello no queda bien armar una enumeración solo con dos elementos y luego escribir etcétera.',
            'null',
            'null',
            'null',
            'El primero es conector adversativo: “no es blanco, sino negro”. El segundo es un condicional negativo: “si no llegas temprano, perderás el turno”.',
            'Sobretodo significa abrigo; en cambio, sobre todo es locución adverbial que significa con especialidad, mayormente, principalmente.',
            'La RAE recuerda que el género gramatical no tiene que ver nada con el sexo; por ejemplo, al hablar de “niños” estamos incluyendo tanto a los niños como a las niñas.',
            'Note:Dice la RAE: “Cuando se invierte el orden regular de las partes de un enunciado, anteponiendo elementos que suelen ir pospuestos, se tiende a colocar una coma después del bloque anticipado. No es fácil establecer con exactitud los casos en que esta anteposición exige el uso de la coma”.',
            'Dice la RAE:\n'+
            'Los incisos que interrumpen una oración, ya sea para aclarar o ampliar lo dicho, ya sea para mencionar al autor u obra citados, se escriben entre comas. Son incisos casos como los siguientes:\n'+
            'a) Aposiciones explicativas.\n'+
            'b) Las proposiciones adjetivas explicativas.\n'+
            'c) Cualquier comentario, explicación o precisión a algo dicho.\n'+
            'd) La mención de un autor u obra citados.\n',
            'null',
            'null',
            '• Entorno: es sustantivo (contexto, ambiente).\n'+
            '• en torno: es locucion preposicional (alrededor de...).\n',
            'null',
            'Un pronombre relativo (que, quien, cual, cuanto) se refiere siempre a una palabra o enunciado, al que denominamos antecedente; por Example: este es el libro del que te hablé. Allí el pronombre relativo que se refiere al antecedente libro.',
            '• La expresión “a medida que” significa “al tiempo que”, “a la vez que”; en síntesis, se trata de una progresión paralela de dos acciones. Example: a medida que pase el tiempo mejorará su estado de ánimo.\n'+
            '• La expresión “en la medida en que” significa “en el grado en que”, “en la intensidad en que”; en resumen, se introduce con esta expresión una condición: se supedita X al comportamiento de Y. Example: el gobierno levantará la cuarentena en la medida en que la curva de contagio disminuya.\n',
        ];            
    }

    getUses = () =>
    {
        return this.uses;
    }

    getExamples = () =>
    {
        return this.examples;
    }

    getCorrections = () =>
    {
        return this.corrections;
    }

    getNotes = () =>
    {
        return this.notes;
    }

    getSize = () =>
    {
        return this.uses.length;
    }
}