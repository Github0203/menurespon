import React from 'react';
import Home from './components/Home';
import Profolio from './components/Profolio';
import About from './components/About';
import Contact from './components/Contact';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/profolio',
        exact : false,
        main : () => <Profolio />
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact />
    },
    {
        path : '/about',
        exact : false,
        main : () => <About />
    }
];

export default routes;