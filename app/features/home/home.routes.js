export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/:filter',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}