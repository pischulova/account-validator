import angular from 'angular';
import 'todomvc-app-css/index.css';

import {App} from './app/containers/App';
import {Header} from './app/components/Header';
import {AccValidator} from './app/directives/accValidator/AccValidator';
import {MaskFilter} from './app/filters/MaskFilter';

import './index.css';

angular
  .module('app', [])
  .component('app', App)
  .component('headerComponent', Header)

  .directive('accValidator', AccValidator)
  .filter('mask', MaskFilter);
