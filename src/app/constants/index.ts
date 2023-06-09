import Resource from "@/app/interfaces/resource";

const dummyResources: Array<Resource> = [
  {
    id: '0',
    description: 'TBD',
    title: 'Planteamiento del problema de investigación: desde la óptica cuantitativa y cualitativa',
    type: 'Llibre',
    dimension: 'Planificació de la recerca',
    subdimension: 'Elecció del tema i pregunta de recerca',
    level: 2,
    language: 'Español',
    url: 'https://www.uca.ac.cr/wp-content/uploads/2017/10/Investigacion.pdf',
  },
  {
    id: '1',
    description: 'TBD',
    title: '¿Cómo escoger un tema de investigación y construir una pregunta de investigación?',
    type: 'Article',
    dimension: 'Planificació de la recerca',
    subdimension: 'Elecció del tema i pregunta de recerca',
    level: 1,
    language: 'Español',
    url: 'https://www.redalyc.org/pdf/1794/179421472004.pdf',
  },
  {
    id: '2',
    description: 'TBD',
    title: 'La formulació dels objectius de recerca',
    type: 'Recurs web',
    dimension: 'Planificació de la recerca',
    subdimension: 'Formulació d\'objectius i hipòtesis',
    level: 1,
    language: 'Català',
    url: 'https://www.eltefege.eu/index.php/2018/03/15/apunt-4-la-formulacio-dels-objectius-de-recerca/',
  },
  {
    id: '3',
    description: 'TBD',
    title: 'Transcripció de Dades Plurilingües/Multimodals',
    type: 'Recurs web',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Cerca d\'informació',
    level: 2,
    language: 'Català',
    url: 'https://tutorialfortrans.blogspot.com/',
  },
  {
    id: '4',
    description: 'TBD',
    title: 'Good Literature Searching',
    type: 'Article',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Cerca d\'informació',
    level: 1,
    language: 'English',
    url: 'https://www.review.mai.ac.nz/mrindex/TK/article/view/53/53.html',
  },
  {
    id: '5',
    description: 'TBD',
    title: 'Art of reading a journal article: Methodically and effectively',
    type: 'Article',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Cerca d\'informació',
    level: 1,
    language: 'English',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3687192/',
  },
  {
    id: '6',
    description: 'TBD',
    title: 'Eines i recursos documentals per al treball de recerca en Educació',
    type: 'Presentació',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Eines per cercar informació',
    level: 2,
    language: 'Català',
    url: 'https://ddd.uab.cat/record/142532',
  },
  {
    id: '7',
    description: 'TBD',
    title: 'Cerca i gestió de la informació: les principals fonts d\'informació en Educació, Psicologia i Logopèdia',
    type: 'Presentació',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Eines per cercar informació',
    level: 1,
    language: 'Català',
    url: 'https://ddd.uab.cat/record/174633',
  },
  {
    id: '8',
    description: 'TBD',
    title: 'Approaching literature review for academic purposes',
    type: 'Article',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Estratègies d\'elaboració del text',
    level: 1,
    language: 'English',
    url: 'https://www.scielo.br/scielo.php?pid=S1807-59322019000100318&script=sci_arttext',
  },
  {
    id: '9',
    description: 'TBD',
    title: 'Best-Practice Recommendations of Methodological Literature Reviews',
    type: 'Article',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Estratègies d\'elaboració del text',
    level: 2,
    language: 'English',
    url: 'https://journals.sagepub.com/doi/full/10.1177/1094428120943281',
  },
  {
    id: '10',
    description: 'TBD',
    title: 'Recerca qualitativa sobre educació plurilingüe',
    type: 'Llibre',
    dimension: 'Disseny i aplicació',
    subdimension: 'Dissenys metodològics',
    level: 2,
    language: 'Català',
    url: 'https://research-publishing.net/publication/978-1-908416-47-6.pdf',
  },
  {
    id: '11',
    description: 'TBD',
    title: 'Studying the Use of Research Evidence: A Review of Methods',
    type: 'Llibre',
    dimension: 'Disseny i aplicació',
    subdimension: 'Dissenys metodològics',
    level: 2,
    language: 'English',
    url: 'https://wtgrantfoundation.org/library/uploads/2019/02/A-Review-of-Methods-FINAL003.pdf',
  },
  {
    id: '12',
    description: 'TBD',
    title: 'Historias de vida',
    type: 'Article',
    dimension: 'Disseny i aplicació',
    subdimension: 'Dissenys metodològics',
    level: 1,
    language: 'Español',
    url: 'https://revistas.upr.edu/index.php/griot/article/download/1775/1568',
  },
  {
    id: '13',
    description: 'TBD',
    title: 'Quantitatiu o Qualitatiu? Escull!',
    type: 'Quiz',
    dimension: 'Disseny i aplicació',
    subdimension: 'Dissenys metodològics',
    level: 1,
    language: 'Català',
    url: 'https://goo.gl/ZMy8E6',
  },
  {
    id: '14',
    description: 'TBD',
    title: 'A guide for naming research studies',
    type: 'Article',
    dimension: 'Disseny i aplicació',
    subdimension: 'Dissenys metodològics',
    level: 1,
    language: 'English',
    url: 'https://www.redalyc.org/pdf/337/33770318.pdf',
  },
  {
    id: '15',
    description: 'TBD',
    title: 'Discussió vs conclusions: principis i directrius ',
    type: 'Vídeo',
    dimension: 'Discussió i conclusions',
    subdimension: '',
    level: 1,
    language: 'Català',
    url: 'https://www.youtube.com/watch?v=_0MwkPVxLYo&list=PLfbyb8xMvO3GYYg9NphpQcrtxrruFTY9R&index=4',
  },
  {
    id: '16',
    description: 'TBD',
    title: 'What\'s new in APA Style 7th Edition',
    type: 'Vídeo',
    dimension: 'Bibliografia',
    subdimension: '',
    level: 1,
    language: 'English',
    url: 'https://www.youtube.com/watch?v=jOVZp8m0PCM&feature=youtu.be',
  },
  {
    id: '17',
    description: 'TBD',
    title: 'Com citar i referenciar en els textos acadèmics',
    type: 'Llibre',
    dimension: 'Bibliografia',
    subdimension: '',
    level: 1,
    language: 'Català',
    url: 'https://ddd.uab.cat/record/145881?ln=es',
  },
  {
    id: '18',
    description: 'TBD',
    title: 'Com elaborar el Treball Final de Grau',
    type: 'Vídeo',
    dimension: 'Comunicació i TIC',
    subdimension: 'Comunicació escrita i oral de la recerca',
    level: 1,
    language: 'Català',
    url: 'https://www.youtube.com/watch?v=8NtqeUeGJTM',
  },
];

const dimensionToColor = new Map<string, string>();
dimensionToColor.set('Planificació de la recerca', 'c1');
dimensionToColor.set('Fonamentació teòrica', 'c2');
dimensionToColor.set('Disseny i aplicació', 'c3');
dimensionToColor.set('Discussió i conclusions', 'c4');
dimensionToColor.set('Bibliografia', 'c5');
dimensionToColor.set('Comunicació i TIC', 'c6');

export { dummyResources, dimensionToColor };
