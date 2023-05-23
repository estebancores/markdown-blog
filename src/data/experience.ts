import type { Experience, Technologies } from "$lib/types";

const htmlUrl = 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg'
const bootstrapUrl = 'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg'
const gitUrl = 'https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg'
const mysqlUrl = 'https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg'
const nodeUrl = 'https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg'

export const experience: Experience[] = [
    {
        start: '10/2022',
        end: 'Currently',
        company: 'Globant',
        role: 'Backend Engineer',
        tasks: [
            "Developed functionalities for the Greatminds account",
            "Developed functions and alteration using Strapi headless CMS",
            "Fixed bugs and improved performance on the existing platforms",
        ],
        technologies: [
            { logo: nodeUrl, name: 'Nodejs' },
            { logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg', name: 'MongoDB' },
            { logo: gitUrl, name: 'Git' },
            { name: 'RedisCache', logo: './redis.png' },
        ]
    },
    {
        start: '12/2021',
        end: '10/2022',
        company: 'Cidenet',
        role: 'Frontend Engineer',
        tasks: [
            "Created functionalities in the T-Mobile CMR platform",
            "Fixed bugs and improved performance on the existing platforms",
        ],
        technologies: [
            { logo: nodeUrl, name: 'Nodejs' },
            { logo: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg', name: 'Vuejs' },
            { logo: htmlUrl, name: 'HTML' },
            { logo: bootstrapUrl, name: 'Bootstrap' },
            { logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg', name: 'MongoDB' },
            { logo: gitUrl, name: 'Git' },
        ]
    },
    {
        start: '12/2019',
        end: '10/2022',
        company: 'PLM group',
        role: 'Full Stack Engineer',
        tasks: [
            "Participated in the full cycle of https://www.eldorado.aero",
            "Participated in the full cycle of https://www.lima-airport.com/",
            "Created a facial recognition system implementing third-party services from Cognosco and Klippa",
            "Maintained and supported the platforms",
        ],
        technologies: [
            { logo: nodeUrl, name: 'Nodejs' },
            { logo: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg', name: 'Vuejs' },
            { logo: htmlUrl, name: 'HTML' },
            { logo: bootstrapUrl, name: 'Bootstrap' },
            { logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg', name: 'PostgreSQL' },
            { logo: gitUrl, name: 'Git' },
            { logo: 'https://www.vectorlogo.zone/logos/socketio/socketio-ar21.svg', name: 'SocketIO' }
        ]
    },
    {
        start: '01/2019',
        end: '11/2019',
        company: 'Mutek',
        role: 'Data Engineer ',
        tasks: [
            "Created scripts to inject through a tag manager for collecting data",
            "Improved some of the homecenter.co e-commerce checkout process",
            "Created functionalities and views in the data-analytics platform with collected data",
        ],
        technologies: [
            { logo: bootstrapUrl, name: 'Bootstrap' },
            { logo: nodeUrl, name: 'Nodejs' },
            { logo: htmlUrl, name: 'HTML' },
            { logo: 'https://www.vectorlogo.zone/logos/php/php-horizontal.svg', name: 'PHP' },
            { logo: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg', name: 'Vuejs' },
            { logo: gitUrl, name: 'Git' },
            { logo: mysqlUrl, name: 'MySql' }
        ]
    },
    {
        start: '03/2018',
        end: '12/2018',
        company: 'Teleguardia LTDA',
        role: 'FullStack Developer',
        tasks: [
            "Developed a CMS panel to set data in that was going to serve to the APP through and API",
            "Fixed bugs and improved performance on the existing platforms",
        ],
        technologies: [
            { logo: 'https://www.vectorlogo.zone/logos/python/python-horizontal.svg', name: 'Python' },
            { logo: bootstrapUrl, name: 'Bootstrap' },
            { logo: htmlUrl, name: 'HTML' },
            { logo: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg', name: 'Vuejs' },
            { logo: gitUrl, name: 'Git' },
            { logo: mysqlUrl, name: 'MySql' }
        ]
    },
    {
        start: '06/2016',
        end: '02/2018',
        company: 'Fenalco Antioquia',
        role: 'FullStack Developer',
        tasks: [
            "Developed new functionalies in the company's CMR platform",
            "Generated reports querying the DB in Oracle, SQL Server and Mysql",
            "Fixed bugs and improved performance on the existing platforms",
        ],
        technologies: [
            { logo: 'https://www.vectorlogo.zone/logos/jquery/jquery-ar21.svg', name: 'JQuery' },
            { logo: bootstrapUrl, name: 'Bootstrap' },
            { logo: htmlUrl, name: 'HTML' },
            { logo: 'https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg', name: 'Oracle' },
            { logo: 'https://www.vectorlogo.zone/logos/php/php-horizontal.svg', name: 'PHP' },
            { logo: gitUrl, name: 'Git' },
            { logo: mysqlUrl, name: 'MySql' }
        ]
    },
]

export const otherTechologies: Technologies[] = [
    { name: 'Svelte', logo: 'https://upload.vectorlogo.zone/logos/sveltetechnology/images/fc06c9b6-d01c-4e1f-82be-557ad5f65d6e.svg' },
    { name: 'Firebase', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg' },
    { name: 'Aws', logo: './aws.png' },
    { name: 'DialogFlow', logo: './dialogflow.png' },
    { name: 'ElasticSearch', logo: './elasticsearch.png' },
    { name: 'JWT', logo: './jwt.png' },
    { name: 'Nuxt', logo: './nuxtjs.png' },
    { name: 'React', logo: './reactjs.png' },
    { name: 'RedisCache', logo: './redis.png' },
]