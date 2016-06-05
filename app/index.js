import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './config';
import home from './features/home';

var ngModule = angular.module('app',[uirouter, home]).config(routing);

// console.log(ngModule);