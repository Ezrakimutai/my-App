import React from 'react'
import ReactDOM from 'react-dom'

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
import './style.scss'

// Browser JS
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery.easing'

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
