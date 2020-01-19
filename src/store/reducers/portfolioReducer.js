const initState = {
    meta: {
        browserTitle: 'Your Name - portfolio',
        social: [
            {
                service: 'tumblr',
                link: 'https://doublejosh.com/archive',
            },
            {
                service: 'github',
                link: 'https://github.com/doublejosh',
            },
            {
                service: 'linkedin',
                link: 'https://www.linkedin.com/in/doublejosh',
            },
        ],
        footerMessage: 'Thanks for reading.',
    },
    intro: {
        headline: 'Josh is profesh.',
        typed: ['Web Developer', 'Front-end Developer', 'UX Designer', 'Data Analyst', 'Tinkerer'],
    },
    resume: {
        headline: 'Resume',
        summary: [
            'I develop, maintain, and refine web systems.',
            'This includes: front-end code, content management and API backends, UX components, user data flow, collecting metrics, enabling analytics, and managing projects. I believe in design systems, smart integrations, and open-source tools.',
        ],
        jobsHeadline: 'Work History',
        jobs: [
            {
                title: 'Full-stack Web Dev',
                company: 'DroneDeploy',
                timeframe: '2017-2019',
                summary:
                    'I built and integrated tools and APIs to create, manage, and measure marketing campaigns and pipe data to sales. This included rebuilding the front-end website to be editable, component driven, and provide elegant, measurable, browser-compatible experiences. DroneDeploy is software to enable physical businesses with 3D models, maps.',
            },
            {
                title: 'Team Lead, Web Dev',
                company: 'Tableau',
                timeframe: '2009-2017',
                summary:
                    'I architected systems, ran projects, and solved many at-scale web needs for marketing to handle rapid company growth and lead volume. I remained an individual contributor, but also hired and led a team of successful developers and expanded our work across departments. Tableau is software for people to see and understand their data.',
            },
            {
                title: 'Front-end Web Dev',
                company: 'Skull Squad',
                timeframe: '2009',
                summary: 'I helped turn client requirements into web-based tools that streamlined businesses and tested new ideas.',
            },
            {
                title: 'Web Designer',
                company: 'Strands Labs',
                timeframe: '2008',
                summary: 'I helped create a place-based social network prototype for “third-place” public spaces.',
            },
            {
                title: 'Lead Developer / UX',
                company: 'YourSports',
                timeframe: '2006-2007',
                summary: ' I built web UI, designed mocks and provided technical leadership for a funded startup.',
            },
            {
                title: 'Operations Manager',
                company: 'UW Career Center',
                timeframe: '2006',
                summary: 'I refined web experiences, managed backups, provided technical guidance, etc.',
            },
            {
                title: '“Webmaster”',
                company: 'UW Experimental College',
                timeframe: '2005',
                summary: 'I rebuilt their website, created a data backend, added course discovery and educator profile features, etc.',
            },
        ],
        toolsHeadline: 'Code & Tools',
        tools: [
            {
                name: 'Languages',
                list: 'JavaScript, SCSS, SQL, PHP (all 10+ years), C++ (hobby)',
            },
            {
                name: 'Frameworks',
                list: 'MetalsmithJS, Drupal, React',
            },
            {
                name: 'Data Storage',
                list: 'mySQL, Firebase, CMS APIs, Prismic, BigQuery, MixPanel, NewRelic',
            },
            {
                name: 'Utilities',
                list: 'Git, Grunt, Drush, AWS, CircleCI/Travis',
            },
            {
                name: 'Design Software',
                list: 'Photoshop, Illustrator, InDesign, in-browser',
            },
        ],
    },
    sections: [
        {
            id: 'portfolio',
            headline: 'Portfolio',
            subhead: 'Recent projects that mattered.',
            projects: [
                {
                    title: 'Web UX',
                    summary: '',
                },
                {
                    title: 'Component Guides',
                    summary: 'Style guides and visual components work great together.',
                },
                {
                    title: 'SaaS Coalition',
                    summary: '',
                },
                {
                    title: 'Mobile UX',
                    summary: '',
                },
                {
                    title: 'Optimized',
                    summary: '',
                },
                {
                    title: 'Personalized',
                    summary: '',
                },
            ],
        },
        {
            id: 'art',
            headline: 'Sparks & Crafts',
            subhead: 'Recent artwork, installs and collaboration.',
            projects: [
                {
                    id: 'final-approach-motel',
                    title: 'Final Approach Motel',
                    summary: '',
                },
                {
                    id: 'popagenda',
                    title: 'POPUP-AGENDA',
                    summary: '',
                },
                {
                    id: 'light-skirmish',
                    title: 'Light Skirmish',
                    summary: '',
                },
                {
                    id: 'summer-rain',
                    title: 'Summer Rain',
                    summary: '',
                },
                {
                    id: 'night-ballons',
                    title: 'Night Balloons',
                    summary: '',
                },
                {
                    id: 'radioator',
                    title: 'Radioator',
                    summary: '',
                },
            ],
        },
    ],
}

export default (state = initState, action) => {
    return state
}
