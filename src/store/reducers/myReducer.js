const initState = {
    meta: {
        title: 'Josh Lind - Portfolio',
        description: "All the info you need to know if I'm the right cadidate.",
        icon: 'icon.png',
    },
    menu: {
        home: 'Hello',
        about: 'Resume',
    },
    intro: {
        headline: 'Josh is profesh.',
        typed: ['Web Developer', 'Front-end Developer', 'UX Designer', 'Data Analyst', 'Tinkerer'],
    },
    resume: {
        headline: 'I develop, maintain, and refine web systems.',
        summary: [
            'Including: front-end code, content management backends and APIs, UX components, user data flow, logging metrics, enabling analytics, and directing projects. After 15 years in the industry, I believe in design systems, smart integrations, and open-source tools.',
            'Visual portfolio available for interviews (web UX, style guides, mobile).',
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
                title: 'Lead Dev / UX',
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
                list: 'JavaScript, SCSS, PHP, SQL',
            },
            {
                name: 'Frameworks',
                list: 'React, MetalsmithJS, Drupal',
            },
            {
                name: 'Data Storage',
                list: 'mySQL, Firebase, CMS, MixPanel, NewRelic, BigQuery',
            },
            {
                name: 'Utilities',
                list: 'Git, npm, Grunt, Drush, CircleCI/Travis',
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
            menu: 'Portfolio',
            headline: 'Portfolio',
            subhead: 'Projects that mattered.',
            projects: [
                {
                    id: 'components-guides',
                    title: 'Style & Component Guides',
                    summary: 'These collaborations have made teams faster and UX polished. Style guides and visual components benefit everyone involved.',
                    image: 'Screenshot 2020-01-22 21.06.08.png',
                    slides: [],
                },
                {
                    id: 'interdepartmental',
                    title: 'Cross-team SaaS UIs',
                    summary: 'Projects reaching across departments can improve: onboarding, renewals, consistency, etc. ...uniting UX across teams.',
                    image: 'Screenshot 2020-01-22 21.07.01.png',
                    slides: [],
                },
                {
                    id: 'personalization',
                    title: 'Personalization',
                    summary: 'Any existing UI could be more user/context-aware. I value these project for both lead conversion and customer delight.',
                    image: 'Screenshot 2020-01-22 21.06.36.png',
                    slides: [],
                },
                {
                    id: 'mobile',
                    title: 'Mobile UX',
                    summary: 'Great pure mobile UX goes beyond just ensuring all web presence is responsive. But the process reveals core features.',
                    image: 'Screenshot 2020-01-22 21.07.14.png',
                    slides: [],
                },
                {
                    id: 'data-metrics-testing-optimize',
                    title: 'Analysis Optimized',
                    summary: 'Smattering of examples of analyzing and building metrics, running behavior tests, and checking asumptions.',
                    image: 'doodle-3.png',
                    slides: [],
                },
                {
                    id: 'open-source',
                    title: 'Open Source',
                    summary: 'The best tech stacks are heavily open source, participation is implied. One contribution is this portfolio template.',
                    image: 'doodle-3.png',
                    slides: [],
                },
            ],
        },
        {
            id: 'art',
            menu: 'Artsy',
            headline: 'Sparks & Crafts',
            subhead: 'Artwork, installs and collaboration.',
            projects: [
                {
                    id: 'crystal-experiment',
                    title: 'Crystal Experiment',
                    summary: 'Arcade machine performing a faux study on crystal powers. The results can be seen here crystal-experiment.web.app (butten presses are logged via WiFi).',
                    image: '2019-12-13 00.00.57.jpg',
                    slides: [],
                },
                {
                    id: 'final-approach-motel',
                    title: 'Final Approach Motel',
                    summary: 'Tiny bar styled as a mid-century, up-scale, lobby. This “roach motel” features morphing wallpaper, resin wing chandelier, and cockroach staff. Golden Guy, BRC 2019.',
                    image: '2019-09-03 23.34.37.jpg',
                    slides: [],
                },
                {
                    id: 'popagenda',
                    title: 'POP-AGENDA',
                    summary: 'Mini food-truck that serves popcorn and a DJ booth, complete with aprons and bow ties. This can be found at popagenda.org, CascadiaNW, and SeaCompression.',
                    image: '49039435743_6dd24480bc_o.jpg',
                    slides: [],
                },
                {
                    id: 'light-skirmish',
                    title: 'Light Skirmish',
                    summary: 'Interactive two-player game based on the vintage Ringer arcade. A circle of wifi-controlled LED stage lights and two wireless nautical steering wheels let players face off.',
                    image: '2017-06-18 20.15.05.jpg',
                    slides: [],
                },
                // {
                //     id: 'stormbrella',
                //     title: 'Stormbrella',
                //     summary:
                //         'Provides a mobile stormy light show. A clear umbrella is lined with addressable LEDs on the spines, which display a random rain simulation. Occasionally thunder will strike at random intervals and strength. Care was taken to ensure natural effects. Useful to improve friends finding you.',
                //     image: 'doodle-3.png',
                //     slides: [{ href: 'https://www.youtube.com/embed/DrYusomXhdg' }],
                // },
                {
                    id: 'night-ballons',
                    title: 'Night Balloons',
                    summary: 'A string of controllable balloon lanterns connected with ethernet. This install was at Burien Arts-A-Glow.',
                    image: '2016-01-26 16.13.55.jpg',
                    slides: [],
                },
            ],
        },
    ],
    footer: {
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
        background: '',
    },
}

export default (state = initState, action) => {
    return state
}
