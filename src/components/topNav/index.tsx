import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Navbar } from 'react-bootstrap'
import NavMenu from './navMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Portfolio from '../../models/portfolio'
import $ from 'jquery'
import './style.scss'

export const TopNav: React.FC<Portfolio> = props => {
    useEffect(() => {
        const navbar = document.querySelector('.navbar') as HTMLElement
        const body: any = $('body')

        if (!navbar) return

        const toggle = (elm: HTMLElement, added: string, removed: string) => {
            elm.classList.add(added)
            elm.classList.remove(removed)
        }

        // Change nav style for load and top.
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > navbar.offsetHeight) {
                toggle(navbar, 'navbar-light', 'navbar-dark')
            } else {
                toggle(navbar, 'navbar-dark', 'navbar-light')
            }
        })

        // Auto-advance menu.
        body.scrollspy({
            target: '.navbar.fixed-top',
            offset: navbar.offsetHeight + 50,
        })
    })

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            fixed="top"
            className="navbar-dark"
        >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {!!props.meta.showRepoLink && (
                <Navbar.Brand
                    href="https://github.com/doublejosh/react-portfolio"
                    target="_blank"
                    className="ml-3 mt-2"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </Navbar.Brand>
            )}
            <NavMenu {...props} />
        </Navbar>
    )
}

const mapStateToProps = (state: RootState) => {
    return state.portfolio
}

export default compose(connect<{}, {}, any, any>(mapStateToProps))(TopNav)
