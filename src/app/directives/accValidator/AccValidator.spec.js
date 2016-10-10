import angular from 'angular';
import 'angular-mocks';
import {AccValidator} from './AccValidator';

const serverUrl = 'server/api/validate';
const template = '<input type="text" name="number" ng-model="accNumber.number" acc-validator required ng-pattern="/^[0-9]{15}$/"/>';

describe('AccValidator directive', () => {
  var directiveElem,
      scope,
      httpBackend,
      compile;

  beforeEach(() => {
    angular
      .module('app', [])
      .directive('accValidator', AccValidator);
    angular.mock.module('app');

    angular.mock.inject(($rootScope, $httpBackend, $compile) => {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;
      compile = $compile;
    })

  });

  it('should render correctly', () => {
    var element = compile(template)(scope);
    // scope.accNumber = {};
    // scope.$digest();
    // scope.accNumber.number = '111';
    scope.$digest();

console.log('Isolated scope:', element.isolateScope());

    // expect(element.isolateScope().ngModel).toEqual('111');



    // expect(element.html()).not.toEqual('');

    // const form = element.find('form');
    // expect(form.attr('name')).toEqual('valForm');
  });

  // it('should make request to server when validate method is triggered', function() {

  //   var element = compile('<acc-validator></acc-validator>')(scope);
  //   scope.$digest();
  //   scope = element.isolateScope();

  //   scope.accNumber = {};
  //   scope.$digest();

  //   httpBackend.expectPOST(serverUrl).respond(200, {'valid': 'true'});

  //   scope.validate();

  //   httpBackend.flush();
  // })
})


