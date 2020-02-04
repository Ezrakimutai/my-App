import Job from './job'
import Tool from './tool'
import Section from './section'

export default interface Portfolio {
    meta: {
        title: string
        description: string
        icon: string
    }
    menu: {
        home: string
        about: string
    }
    intro: {
        headline: string
        typed: string[]
    }
    resume: {
        headline: string
        summary: string[]
        jobsHeadline: string
        jobs: Job[]
        toolsHeadline: string
        tools: Tool[]
    }
    sections: Section[]
    footer: {
        social: object[]
        footerMessage: string
        background: string
    }
}
