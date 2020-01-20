import React from 'react'

import aguaDeLuz from '../../img/aguaDeLuz.png'

export default props => {
    return (
        <div className="work-box">
            <a href={aguaDeLuz} data-lightbox="gallery-portfolio">
                <div className="work-img">
                    <img src={aguaDeLuz} alt={props.title} className="img-fluid" />
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
            {props.slides && props.slides.map(slide => <a href={aguaDeLuz} data-lightbox="gallery-portfolio" style={{ display: 'none' }}></a>)}
        </div>
    )
}
