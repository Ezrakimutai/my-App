import React, { useEffect } from 'react'

import $ from 'jquery'

export default () => {
    useEffect(() => {
        $(window).on('load', function() {
            if ($('#preloader').length) {
                $('#preloader')
                    .delay(100)
                    .fadeOut('slow', function() {
                        $(this).remove()
                    })
            }
        })
    })

    return <div id="preloader"></div>
}
