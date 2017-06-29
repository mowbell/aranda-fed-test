module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      component: 'component.main',
      abstract:true
    })
    .state('app', {
      parent: 'main',
      url: '/',
       views:{
         nav:{
          component:'component.nav'
        },
        content:{
          component:'component.list'
        }
      }
    });
}
