import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Navbar, Nav } from 'react-bootstrap'
import { Section } from '../../models/section'
import $ from 'jquery'
import './style.scss'

export interface MyNavProps {
    menu: any
    sections: Section[]
}

export const MyNav: React.FC<MyNavProps> = props => {
    const smoothScroll = (event: any, hash: string) => {
        event.preventDefault()

        const navbar = document.querySelector('.navbar') as HTMLElement
        const hashElm = document.getElementById(hash) as HTMLElement

        if (hash && hashElm) {
            $('html, body').animate(
                {
                    scrollTop: hashElm.offsetTop - (navbar.offsetHeight + 20),
                },
                800,
                'easeInOutExpo'
            )
        }
    }

    useEffect(() => {
        const navbar = document.querySelector('.navbar') as HTMLElement
        const body: any = $('body')
        if (!navbar) return

        // Change style for load and top.
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > navbar.offsetHeight) {
                navbar.classList.add('navbar-scroll')
                navbar.classList.remove('navbar-top')
            } else {
                navbar.classList.add('navbar-top')
                navbar.classList.remove('navbar-scroll')
            }
        })

        // Auto-advance menu.
        body.scrollspy({
            target: '.navbar.fixed-top',
            offset: navbar.offsetHeight,
        })
    })

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar-top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" defaultActiveKey="#home">
                    <Nav.Link
                        href="#home"
                        onClick={(e: any) => smoothScroll(e, 'home')}
                    >
                        {props.menu.home}
                    </Nav.Link>
                    <Nav.Link
                        href="#about"
                        onClick={(e: any) => smoothScroll(e, 'about')}
                    >
                        {props.menu.about}
                    </Nav.Link>
                    {props.sections.map(section => (
                        <Nav.Link
                            key={section.id}
                            href={'#' + section.id}
                            onClick={(e: any) => smoothScroll(e, section.id)}
                        >
                            {section.menu}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        menu: state.portfolio.menu,
        sections: state.portfolio.sections,
    }
}

export default compose(connect<{}, {}, any, any>(mapStateToProps))(MyNav)
