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
            ];
            
            this.examples = [
            'Se observan los verbos, formas impersonales, etc.',
            'Queda claro que la didáctica tiene un papel fundamental en el proceso de enseñanza-aprendizaje.',
            'Los talabarteros saben hacer artículos de cuero.',
            'El autor formula sus conclusiones finales.',
            'No es blanco si no negro.',
            'Me encanta la pizza, sobretodo la de champiñones y piña',
            'todos l@s niñ@s deben asistir.',
            ];
            
            this.corrections = [
            'El lector espera, al menos, tres elementos antes del “etcétera”.',
            'Queda claro que la didáctica cumple un papel fundamental en el proceso de enseñanza-aprendizaje.',
            'Los talabarteros saben confeccionar artículos de cuero.',
            'El autor formula sus conclusiones.',
            'No es blanco, sino negro.',
            'Me encanta la pizza, sobre todo la de champiñones y piña',
            'todos los niños deben asistir.',
            ];
            
            this.notes = [
            'En un texto académico es muy importante argumentar por la cantidad. Al respecto, Weston nos pregunta: ¿Hay más de un ejemplo? Por ello no queda bien armar una enumeración solo con dos elementos y luego escribir etcétera.',
            'null',
            'null',
            'null',
            'El primero es conector adversativo: “no es blanco, sino negro”. El segundo es un condicional negativo: “si no llegas temprano, perderás el turno”.',
            'Sobretodo significa abrigo; en cambio, sobre todo es locución adverbial que significa con especialidad, mayormente, principalmente.',
            'La RAE recuerda que el género gramatical no tiene que ver nada con el sexo; por ejemplo, al hablar de “niños” estamos incluyendo tanto a los niños como a las niñas.',
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