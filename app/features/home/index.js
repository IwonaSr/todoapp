import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngRoute from 'angular-route';

import routing from './home.routes';
import HomeController from './home.controller';
import HomeService from './home.service';

import 'firebase';
import angularFire from 'angularfire';


export default angular.module('app.home', [uirouter,ngRoute,angularFire])
  .config(routing)
  .service('HomeService',HomeService)
  .controller('HomeController', HomeController)
  .name;