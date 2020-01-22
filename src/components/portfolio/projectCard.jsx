import React from 'react'

export default props => {
    const imagePath = '/img/' + props.image

    return (
        <div className="work-box">
            <a href={imagePath} data-lightbox={'gallery-' + props.project}>
                <div className="work-img">
                    <img src={imagePath} alt={props.title} className="img-fluid" />
                </div>
                <div className="work-content">
                    <div className="w-like mr-3">
                        <span className="ion-ios-plus"></span>
                    </div>
                    <h2 className="w-title">{props.title}</h2>
                    <div className="w-more">
                        <span className="w-ctegory">{props.summary}</span>
                    </div>
                </div>
            </a>
            {props.slides.map(slide => (
                <a href={imagePath} data-lightbox="gallery-portfolio" style={{ display: 'none' }}></a>
            ))}
        </div>
    )
}
