import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// import normalizeCss from 'normalize-css';
// import {routeConfig} from './app.routes';
import Components from './components';

angular
    .module('website', [
        uiRouter
    ])
    .directive('scroll', function($window) {
        return function(scope, element, attrs) {
            let topOfPage = $window;
            let headerTop = angular.element(document.getElementById('main-nav'));
            angular.element($window).bind("scroll", function() {
                 if (this.pageYOffset >= 100) {
                     headerTop.addClass('main-nav-bg');
                 } else {
                    headerTop.removeClass('main-nav-bg');
                 }
                scope.$apply();
            });
        };
    })

// Create all components
Object.keys(Components).forEach(componentName => {
    angular
        .module('website')
        .component(componentName, Components[componentName]);
})

// navbar
// class NavbarAnimationDirective {
//     constructor() {}

//     onInit($window) {
//         let topOfPage = $window;
//         const headerTop = angular.element(document.getElementById('main-nav'));

//         function toggleBackground () {
//             return function($scope, $element, $attr) {
//                 angular.element($window).bind("scroll", function() {
//                     if (this.pageYOffset > 50) {
//                         // scope.boolChangeClass = true;
//                          headerTop.addClass('main-nav-bg');
//                      } else {
//                         // scope.boolChangeClass = false;
//                         // console.log('Header is in view.');
//                         headerTop.removeClass('main-nav-bg');
//                      }
//                     $scope.$apply();
//                 });
//             };
//         }
//     }
// }

// angular.module('website').directive('navbar', () => new NavbarAnimationDirective)