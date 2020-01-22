import React from 'react'
import ReactDOM from 'react-dom'
import DocumentMeta from 'react-document-meta'

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

// Components
import Navbar from './components/navbar'
import Intro from './components/intro'
import Resume from './components/resume'
import Portfolio from './components/portfolio'
import Footer from './components/footer'
import BackToTop from './components/back-top'
import Preloader from './components/preloader'

// Style
import 'normalize.css'
import './libs/animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import './img/icons/css/ionicons.css'
import './img/font-awesome/css/font-awesome.css'
import 'lightbox2/dist/css/lightbox.min.css'
import './style.scss'

// Browser JS
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import './libs/easing'
import 'lightbox2/dist/js/lightbox.min'

// Data
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
const store = createStore(rootReducer, {})

const App = () => {
    const meta = {
        title: 'Josh Lind - Portfolio',
        description: "All the info you need to know if I'm the right cadidate.",
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'react,meta,document,html,tags',
            },
        },
    }

    return (
        <DocumentMeta {...meta}>
            <Provider store={store}>
                <Navbar />
                <Intro />
                <Resume />
                <Portfolio />
                <Footer />
                <BackToTop />
                <Preloader />
            </Provider>
        </DocumentMeta>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'))
