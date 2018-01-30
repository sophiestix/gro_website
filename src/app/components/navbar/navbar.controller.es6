class NavbarController {
    constructor ($window) {
        this.sections = [
            {
                name: 'home',
                url: ''
            },
            {
                name: 'about',
                url: ''
            },
            {
                name: 'songs',
                url: ''
            },
            {
                name: 'contact',
                url: ''
            }
        ];

        let topOfPage = $window;
        const headerTop = angular.element(document.getElementById('main-nav'));

        // function toggleBackground () {
        //     if ($window.pageYOffset > 100) {
        //         headerTop.addClass('main-nav-bg');
        //     } else {
        //         headerTop.removeClass('main-nav-bg');
        //     }
        // };

        // function toggleBackground () {
        //     if ($window.pageYOffset > 50) {
        //         this.addClass('main-nav-bg');
        //     } else {
        //         this.removeClass('main-nav-bg');
        //     }
        // };

        function toggleBackground () {
            return function($scope, $element, $attr) {
                angular.element($window).bind("scroll", function() {
                    if (this.pageYOffset > 50) {
                        // scope.boolChangeClass = true;
                         headerTop.addClass('main-nav-bg');
                     } else {
                        // scope.boolChangeClass = false;
                        // console.log('Header is in view.');
                        headerTop.removeClass('main-nav-bg');
                     }
                    $scope.$apply();
                });
            };
        }


        // return function(scope, element, attrs) {
        //     topOfPage.bind("scroll", function() {
        //         if (this.pageYOffset >= 100) {
        //             //  scope.boolChangeClass = true;
        //              headerTop.addClass('main-nav-bg');
        //          } else {
        //             //  scope.boolChangeClass = false;
        //             //  console.log('Header is in view.');
        //             headerTop.removeClass('main-nav-bg');
        //          }
        //         $scope.$apply();
        //     });
        // };
    }

    $onInit() {}
}

export default NavbarController;

//when ancher the nav options to parts of the page:
// https://docs.angularjs.org/api/ng/service/$anchorScroll
// https://stackoverflow.com/questions/17284005/scrollto-function-in-angularjs
// https://jsfiddle.net/brettdewoody/y65G5/

// angular.module('anchorScrollOffsetExample', [])
// .run(['$anchorScroll', function($anchorScroll) {
//   $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
// }])
// .controller('headerCtrl', ['$anchorScroll', '$location', '$scope',
//   function($anchorScroll, $location, $scope) {
//     $scope.gotoAnchor = function(x) {
//       var newHash = 'anchor' + x;
//       if ($location.hash() !== newHash) {
//         // set the $location.hash to `newHash` and
//         // $anchorScroll will automatically scroll to it
//         $location.hash('anchor' + x);
//       } else {
//         // call $anchorScroll() explicitly,
//         // since $location.hash hasn't changed
//         $anchorScroll();
//       }
//     };
//   }
// ]);
