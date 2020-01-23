import React from 'react'
import ReactDOM from 'react-dom'

import { ReactTitle } from 'react-meta-tags'

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

// Components
import Document from './components/document'
import Navbar from './components/navbar'
import Intro from './components/intro'
import Resume from './components/resume'
import Portfolio from './components/portfolio'
import Footer from './components/footer'
import BackToTop from './components/back-top'
import Preloader from './components/preloader'

// Style
import 'normalize.css'
import 'animate.css/animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import './img/icons/css/ionicons.css'
import './img/font-awesome/css/font-awesome.css'
import 'lightbox2/dist/css/lightbox.min.css'
import './style.scss'

// Browser JS
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery.easing'
import 'lightbox2/dist/js/lightbox.min'

// Data
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
const store = createStore(rootReducer, {})

const App = () => {
    return (
        <Provider store={store}>
            <Document />
            <Navbar />
            <Intro />
            <Resume />
            <Portfolio />
            <Footer />
            <BackToTop />
            <Preloader />
        </Provider>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'))
