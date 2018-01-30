const routeConfig = ($stateProvider, $urlRouterProvider) => {
    $urlProvider.otherwise('/');

    $stateProvider
        .state('navbar', {
            url: '/',
            component: 'navbar'
        })
}

export default routeConfig;
