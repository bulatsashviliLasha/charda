import frontEnd1 from '../assets/pictures/img/front-end1.jpg';
import backEnd2 from '../assets/pictures/img/backEnd1.webp';
import agile2 from '../assets/pictures/img/agile1.jpg';
import frontEnd2 from '../assets/pictures/img/front-end2.jpg';
import backEnd1 from '../assets/pictures/img/backEnd2.jpg';
import agile1 from '../assets/pictures/img/agile2.jpg';

export const MovieData = [
    {
        title: 'Front-End',
        mainImg: frontEnd1,
        secondaryImg: frontEnd2,
        url: '/work/front-end',
        awards: [
            {
                title: 'Vue',
                description:
                    'Vue 2 to Vue 3 We support both version.',
            },
            {
                title: 'React',
                description:
                    'As well as Functional also classed based Components',
            },
            {
                title: 'CSS3',
                description:
                    'SASS/SCSS/LESS TailwindCSS Bootstrap',
            },
        ],
    },
    {
        title: 'Back-End',
        mainImg: backEnd1,
        url: '/work/back-end',
        secondaryImg: backEnd2,
        awards: [
            {
                title: 'Node.js',
                description:
                    '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
            },
            {
                title: 'Python',
                description:
                    '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
            },
            {
                title: 'SQL | NoSQL',
                description:
                    'Supporting both SQL and NoSQL databases',
            },
        ],
    },
    {
        title: 'Agile',
        mainImg: agile1,
        url: '/work/agile',
        secondaryImg: agile2,
        awards: [
            {
                title: 'Scrum',
                description:
                    '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
            },
            {
                title: 'Waterfall',
                description:
                    '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
            },
            {
                title: 'Kanban',
                description:
                    '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
            },
        ],
    },
];

