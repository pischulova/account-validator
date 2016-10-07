import angular from 'angular';
import 'todomvc-app-css/index.css';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {Header} from './app/components/Header';
import {TodoTextInput} from './app/components/TodoTextInput';
import {TodoItem} from './app/components/TodoItem';
import {AccValidator} from './app/directives/accValidator/AccValidator';
import {MaskFilter} from './app/filters/MaskFilter';

import './index.css';

angular
  .module('app', [])
  .service('todoService', TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem)

  .directive('accValidator', AccValidator)
  .filter('mask', MaskFilter);
