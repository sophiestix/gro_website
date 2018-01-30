import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// import normalizeCss from 'normalize-css';
// import {routeConfig} from './app.routes';
import Components from './components';

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
