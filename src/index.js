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
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import './libs/easing';
import 'lightbox2/dist/js/lightbox.min';

//import components
import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import BackToTop from './components/back-top';
import Preloader from './components/preloader';


ReactDOM.render(
	<React.Fragment>
		<Navbar />
		<Intro />
		<About />
		<Portfolio />
		<Contact />
		<BackToTop />
		<Preloader />
	</React.Fragment>,
document.getElementById('root'));
