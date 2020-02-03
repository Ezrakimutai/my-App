import $ from 'jquery'

export const smoothScroll = (event: any, hash: string) => {
    // event.preventDefault()

    const navbar = document.querySelector('.navbar') as HTMLElement
    const hashElm = document.getElementById(hash) as HTMLElement
    const scrollTo: number = hashElm.offsetTop - (navbar.offsetHeight + 10)

    if (hash && hashElm) {
        $('html, body').animate({ scrollTop: scrollTo }, 800, 'easeInOutExpo')
    }
}
