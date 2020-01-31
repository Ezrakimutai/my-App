import React from 'react'
import Card from 'react-bootstrap/Card'
import sampleImage from '../../img/sample.png'

export interface ProjectCardProps {
    image: string
    title: string
    summary: string
    project: string
}

export const ProjectCard: React.FC<ProjectCardProps> = props => {
    const imagePath: string = props.image ? 'img/' + props.image : sampleImage

    return (
        <Card className="shadow-sm">
            <Card.Img variant="top" src={imagePath} alt={props.title} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.summary}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
