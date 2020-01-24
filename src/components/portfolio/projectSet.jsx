import React, { useState } from 'react'

import ProjectCard from './projectCard'
import Carousel, { Modal, ModalGateway } from 'react-images'

import sampleImage from '../../img/sample.png'

export default props => {
    const [modalIsOpen, setModal] = useState(false)
    const [selectedId, setSelected] = useState(0)

    const toggleModal = selectedId => {
        setModal(!modalIsOpen)
        setSelected(selectedId)
    }

    let images = []

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
            <div className="row mb-4 pb-4">
                {props.projects.map((project, i) => {
                    const imagePath = project.image ? 'img/' + project.image : sampleImage
                    images.push({ source: imagePath })
                    return (
                        <React.Fragment key={project.title}>
                            <div className="col-xl-4 col-md-6 mb-4" onClick={() => toggleModal(i)}>
                                <ProjectCard {...project} project={project.id} />
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={() => toggleModal()}>
                        <Carousel views={images} currentIndex={selectedId} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </React.Fragment>
    )
}
