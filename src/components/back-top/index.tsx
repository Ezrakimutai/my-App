import React, { useEffect } from 'react'
import $ from 'jquery'
import './style.scss'

export default () => {
    useEffect(() => {
        $('.back-to-top').click(function() {
            const VX_DURATION_MS = 1500
            $('html, body').animate({ scrollTop: 0 }, VX_DURATION_MS, 'easeInOutExpo')
            return false
        })
        window.addEventListener('scroll', () => {
            const OFFSET_VAL = 100
            const backToTopSelector = document.querySelector('.back-to-top') as HTMLElement
            if (backToTopSelector !== null) {
                if (window.pageYOffset > OFFSET_VAL) {
                    backToTopSelector.classList.remove('fadeOut')
                    backToTopSelector.style.display = 'block'
                    backToTopSelector.classList.add('fadeIn')
                } else {
                    backToTopSelector.classList.remove('fadeIn')
                    backToTopSelector.classList.add('fadeOut')
                }
            }
        })
    })

    return (
        <a href="#" className="back-to-top animated">
            <i className="fa fa-chevron-up"></i>
        </a>
    )
}
