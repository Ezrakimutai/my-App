import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Container } from 'react-bootstrap'
import NavItem from './navItem'
import $ from 'jquery'
import './style.scss'

const NavBar = props => {
    useEffect(() => {
        const nav = $('nav')
        const navHeight = nav.outerHeight()

        $('.navbar-toggler').on('click', function() {
            if (!$('#mainNav').hasClass('navbar-reduce')) {
                $('#mainNav').addClass('navbar-reduce')
            }
        })

        $('body').scrollspy({
            target: '#mainNav',
            offset: navHeight,
        })

        $('.js-scroll').on('click', function() {
            $('.navbar-collapse').collapse('hide')
        })

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                document
                    .querySelector('.navbar-expand-md')
                    .classList.add('navbar-reduce')
                document
                    .querySelector('.navbar-expand-md')
                    .classList.remove('navbar-trans')
            } else {
                document
                    .querySelector('.navbar-expand-md')
                    .classList.add('navbar-trans')
                document
                    .querySelector('.navbar-expand-md')
                    .classList.remove('navbar-reduce')
            }
        })

        $('a.js-scroll[href*="#"]:not([href="#"])').on('click', function() {
            if (
                window.location.pathname.replace(/^\//, '') ===
                    this.pathname.replace(/^\//, '') &&
                window.location.hostname === this.hostname
            ) {
                let target = $(this.hash)
                target = target.length
                    ? target
                    : $('[name=' + this.hash.slice(1) + ']')
                if (target.length) {
                    $('html, body').animate(
                        {
                            scrollTop: target.offset().top - navHeight + 5,
                        },
                        600,
                        'easeInOutExpo'
                    )
                    return false
                }
            }
        })

        $('.js-scroll').on('click', function() {
            $('.navbar-collapse').collapse('hide')
        })
    })

    return (
        <nav
            className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
            id="mainNav"
        >
            <Container>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarDefault"
                    aria-controls="navbarDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div
                    className="navbar-collapse collapse justify-content-end"
                    id="navbarDefault"
                >
                    <ul className="navbar-nav">
                        <NavItem label={props.menu.home} href="#home" />
                        <NavItem label={props.menu.about} href="#about" />
                        {props.sections.map(section => (
                            <NavItem
                                label={section.menu}
                                key={section.id}
                                href={'#' + section.id}
                            />
                        ))}
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

const mapStateToProps = state => {
    return state.portfolio
}

export default compose(connect(mapStateToProps))(NavBar)
