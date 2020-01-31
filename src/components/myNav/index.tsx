import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Navbar, Nav } from 'react-bootstrap'
import { Section } from '../../models/section'

export interface MyNavProps {
    menu: any
    sections: Section[]
}

export const MyNav: React.FC<MyNavProps> = props => (
    <Navbar fixed="top" bg="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" defaultActiveKey="#home">
                <Nav.Link href="#home">{props.menu.home}</Nav.Link>
                <Nav.Link href="#about">{props.menu.about}</Nav.Link>
                {props.sections.map(section => (
                    <Nav.Link key={section.id} href={'#' + section.id}>
                        {section.menu}
                    </Nav.Link>
                ))}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

const mapStateToProps = (state: RootState) => {
    return {
        menu: state.portfolio.menu,
        sections: state.portfolio.sections,
    }
}

export default compose(connect<{}, {}, any, any>(mapStateToProps))(MyNav)
