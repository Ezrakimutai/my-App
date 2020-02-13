import Portfolio from '../../models/portfolio'

export const initState: Portfolio = {
    meta: {
        title: 'My Portfolio',
        description: 'Lots of info about you.',
        showRepoLink: true,
    },
    menu: {
        home: 'Hello',
        about: 'Resume',
    },
    intro: {
        headline: "Hi. Let's talk.",
        typed: [
            "I'm a front-end developer",
            'who can edit JSON',
            'and deploy it.',
        ],
    },
    resume: {
        headline: 'Describe yourself in one quick sentence',
        summary: [
            'Expand on that information in more depth in a few short paragraphs',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        ],
        jobsHeadline: 'Employment',
        jobs: [
            {
                title: 'VP of Something',
                company: 'Fancy LLC',
                timeframe: '2015-2020',
                summary:
                    "List all the cool stuff you did here. Don't be shy, but be honest and specific.",
            },
            {
                title: 'Director of Stuff',
                company: 'Neato Inc.',
                timeframe: '2010-2015',
                summary:
                    'Highlight some accomplishments in these descriptions. Sometimes people even read them.',
            },
            {
                title: 'Developer',
                company: 'WorkJob Co.',
                timeframe: '2005-2010',
                summary:
                    'Action works and quantified results help explain what you really did in a job.',
            },
        ],
        toolsHeadline: 'Skills',
        tools: [
            {
                name: 'Software',
                list: 'Something, Another, Expertise',
            },
            {
                name: 'Awards & Publications',
                list: 'LookieLookie 2018, BigTime Magazine',
            },
            {
                name: 'Utilities',
                list: 'Git, npm, at least',
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
                    id: 'section-1-project-1',
                    title: 'My Cool Project',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                    links: [
                        {
                            label: 'Example',
                            url:
                                'https://github.com/doublejosh/react-portfolio',
                        },
                    ],
                },
                {
                    id: 'section-1-project-2',
                    title: 'Another One',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
                {
                    id: 'section-1-project-3',
                    title: 'Something Neat',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
            ],
        },
        {
            id: 'more',
            menu: 'More',
            headline: 'Hobbies',
            subhead: 'Another section of work, or extra hobbies, etc.',
            projects: [
                {
                    id: 'section-2-project-1',
                    title: 'Project 1',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
                {
                    id: 'section-2-project-2',
                    title: 'Project 2',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
                {
                    id: 'section-2-project-3',
                    title: 'Project 3',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
            ],
        },
    ],
    footer: {
        social: [
            {
                service: 'tumblr',
                link: 'https://www.tumblr.com',
            },
            {
                service: 'github',
                link: 'https://github.com',
            },
            {
                service: 'linkedin',
                link: 'https://www.linkedin.com',
            },
        ],
        footerMessage: 'Thanks for reading.',
        background: '',
    },
}

export default (state: Portfolio = initState) => {
    return state
}
