import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngRoute from 'angular-route';

import routing from './home.routes';
import HomeController from './home.controller';
import HomeService from './home.service';

import 'firebase';
import angularFire from 'angularfire';

import homeLogin from './directives/home_login';
import homeLogout from './directives/home_logout';
import homeFilter from './directives/home_filter';
import homeForm from './directives/home_form';
import homeTasks from './directives/home_tasks';



export default angular.module('app.home', [uirouter,ngRoute,angularFire])
  .config(routing)
  .service('HomeService',HomeService)
  .controller('HomeController', HomeController)
  .directive('homeLogin', homeLogin)
  .directive('homeLogout', homeLogout)
  .directive('homeFilter', homeFilter)
  .directive('homeForm', homeForm)
  .directive('homeTasks', homeTasks)
  .name;