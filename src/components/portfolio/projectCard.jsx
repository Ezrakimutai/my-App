import React from 'react'

import aguaDeLuz from '../../img/aguaDeLuz.png'
import aguaDeLuz1 from '../../img/aguaDeLuz-1.png'
import aguaDeLuz2 from '../../img/aguaDeLuz-2.png'
import aguaDeLuz3 from '../../img/aguaDeLuz-3.png'
import aguaDeLuz4 from '../../img/aguaDeLuz-4.png'

export default props => {
    return (
        <React.Fragment>
            <a href={aguaDeLuz} data-lightbox="gallery-aguadeluz">
                <div className="work-img">
                    <img src={aguaDeLuz} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                    <div className="row">
                        <div className="col-sm-8">
                            <h2 className="w-title">{props.title}</h2>
                            <div className="w-more">
                                <span className="w-ctegory">{props.summary}</span>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="w-like">
                                <span className="ion-ios-plus"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href={aguaDeLuz1} data-lightbox="gallery-aguadeluz" style={{ display: 'none' }}>
                jsx-a11y/anchor-has-content warning
            </a>
            <a href={aguaDeLuz2} data-lightbox="gallery-aguadeluz" style={{ display: 'none' }}>
                jsx-a11y/anchor-has-content warning
            </a>
            <a href={aguaDeLuz3} data-lightbox="gallery-aguadeluz" style={{ display: 'none' }}>
                jsx-a11y/anchor-has-content warning
            </a>
            <a href={aguaDeLuz4} data-lightbox="gallery-aguadeluz" style={{ display: 'none' }}>
                jsx-a11y/anchor-has-content warning
            </a>
        </React.Fragment>
    )
}
