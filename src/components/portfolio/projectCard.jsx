import React from 'react'

import Card from 'react-bootstrap/Card'

import sampleImage from '../../img/sample.png'

export default props => {
    const imagePath = props.image ? 'img/' + props.image : sampleImage

    return (
        <React.Fragment>
            <a href={imagePath} data-lightbox={'gallery-' + props.project}>
                <Card>
                    <Card.Img variant="top" src={imagePath} alt={props.title} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.summary}</Card.Text>
                    </Card.Body>
                </Card>
            </a>
            {props.slides.map(slide => (
                <a href={imagePath} data-lightbox="gallery-portfolio" style={{ display: 'none' }}></a>
            ))}
        </React.Fragment>
    )
}
