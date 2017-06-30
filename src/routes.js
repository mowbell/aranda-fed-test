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
    .state('home', {
      parent: 'main',
      url: '/?query',
       views:{
         nav:{
          component:'component.nav'
        },
        content:{
          component:'component.list'
        }
      },
      params:{
        query:{
          value:null,
          squash:true
        }
      }
    })
    .state('detail', {
      parent: 'home',
      url: 'detail/{id:int}',
       views:{
        'content@^.^':{
          component:'component.detail'
        }
      }
    });
}
