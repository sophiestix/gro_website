import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import normalizeCss from 'normalize-css';
// import {routeConfig} from './app.routes';
import Components from './components';
// import NavbarComponent from './components/navbar/navbar';

angular
    .module('website', [
        uiRouter
    ])

// Create all components
Object.keys(Components).forEach(componentName => {
    angular
        .module('website')
        .component(componentName, Components[componentName]);
})

// angular
//     .module('website')
//     .component('navbar', Navbar);