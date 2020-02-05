import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel, { Modal, ModalGateway } from 'react-images'
import ProjectCard from './projectCard'
import Project from '../../models/project'
import Section from '../../models/section'
import TitleBox from '../titleBox'
import sampleImage from '../../img/sample.png'

export const ProjectSet: React.FC<Section> = props => {
    const [modalIsOpen, setModal] = useState(false)
    const [selectedId, setSelected] = useState(0)

    const toggleModal = (selectedId: number) => {
        setModal(!modalIsOpen)
        setSelected(selectedId)
    }

    const images: object[] = []
    const makePath = (image: string) => {
        return image ? 'img/' + image : sampleImage
    }

    return (
        <Container className="section-wrapper">
            <Row id={props.id} className="text-center">
                <TitleBox headline={props.headline} subhead={props.subhead} />
            </Row>
            <Row>
                {props.projects.map((project: Project, i: number) => {
                    images.push({ source: makePath(project.image) })

                    return (
                        <Col
                            xl={4}
                            md={6}
                            className="mb-4"
                            key={project.id}
                            onClick={() => toggleModal(i)}
                        >
                            <ProjectCard {...project} />
                        </Col>
                    )
                })}
            </Row>
            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={toggleModal}>
                        <Carousel views={images} currentIndex={selectedId} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Container>
    )
}

export default ProjectSet
