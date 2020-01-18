import React from 'react';
import ReactDOM from 'react-dom';

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import './libs/easing';
import 'lightbox2/dist/js/lightbox.min';

//import components
import Navbar from './components/navbar';
import Intro from './components/intro';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import BackToTop from './components/back-top';
import Preloader from './components/preloader';

// data backend
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
const store = createStore(rootReducer, {})

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<Navbar />
			<Intro />
			<Resume />
			<Portfolio />
			<Contact />
			<BackToTop />
			<Preloader />
		</Provider>
	</React.Fragment>,
	document.getElementById('root')
);
