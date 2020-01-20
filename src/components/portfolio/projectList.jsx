import React from 'react'

import ProjectCard from './projectCard'

export default props => {
    return (
        <React.Fragment>
            <div className="row" id={props.id}>
                <div className="col-sm-12">
                    <div className="title-box text-center">
                        <h3 className="title-a">{props.headline}</h3>
                        <p className="subtitle-a">{props.subhead}</p>
                        <div className="line-mf"></div>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                {props.projects.map(project => (
                    <div className="col-md-4" key={project.title}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}
