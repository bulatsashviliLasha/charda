import frontEnd1 from '../assets/pictures/img/front-end1.jpg';
import backEnd2 from '../assets/pictures/img/backEnd1.webp';
import agile2 from '../assets/pictures/img/agile1.jpg';
import frontEnd2 from '../assets/pictures/img/front-end2.jpg';
import backEnd1 from '../assets/pictures/img/backEnd2.jpg';
import agile1 from '../assets/pictures/img/agile2.jpg';

const MovieData = [
  {
    title: 'Front-End',
    key: 193,
    mainImg: frontEnd1,
    secondaryImg: frontEnd2,
    url: '/work/front-end',
    awards: [
      {
        key: 142,
        title: 'Vue',
        description:
                    'Vue 2 to Vue 3 We support both version.',
      },
      {
        key: 15234,
        title: 'React',
        description:
                    'As well as Functional also classed based Components',
      },
      {
        key: 6422,
        title: 'CSS3',
        description:
                    'SASS/SCSS/LESS TailwindCSS Bootstrap',
      },
    ],
  },
  {
    title: 'Back-End',
    key: 253,
    mainImg: backEnd1,
    url: '/work/back-end',
    secondaryImg: backEnd2,
    awards: [
      {
        key: 19345,
        title: 'Node.js',
        description:
                    '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      },
      {
        key: 29435,
        title: 'Python',
        description:
                    '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      },
      {
        key: 39801,
        title: 'SQL | NoSQL',
        description:
                    'Supporting both SQL and NoSQL databases',
      },
    ],
  },
  {
    title: 'Agile',
    key: 391,
    mainImg: agile1,
    url: '/work/agile',
    secondaryImg: agile2,
    awards: [
      {
        key: 928174,
        title: 'Scrum',
        description:
                    '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      },
      {
        key: 628474,
        title: 'Waterfall',
        description:
                    '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      },
      {
        key: 926176,
        title: 'Kanban',
        description:
                    '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      },
    ],
  },
];

export default MovieData;
