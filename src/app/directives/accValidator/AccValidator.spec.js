// import angular from 'angular';
// import 'angular-mocks';
// import {AccValidator} from './AccValidator';

// const serverUrl = 'server/api/validate';

// describe('AccValidator directive', () => {
//   var directiveElem,
//       scope,
//       httpBackend,
//       compile;

//   beforeEach(() => {
//     angular
//       .module('app', ['app/directives/accValidator/AccValidator.html'])
//       .directive('accValidator', AccValidator);
//     angular.mock.module('app');

//     angular.mock.inject(($rootScope, $httpBackend, $compile) => {
//       scope = $rootScope.$new();
//       httpBackend = $httpBackend;
//       compile = $compile;
//     })

//   });

//   it('should render correctly', () => {
//     var element = compile('<acc-validator></acc-validator>')(scope);
//     scope.$digest();
//     expect(element.html()).not.toEqual('');

//     const form = element.find('form');
//     expect(form.attr('name')).toEqual('valForm');
//   });

//   it('should make request to server when validate method is triggered', function() {

//     var element = compile('<acc-validator></acc-validator>')(scope);
//     scope.$digest();
//     scope = element.isolateScope();

//     scope.accNumber = {};
//     scope.$digest();

//     httpBackend.expectPOST(serverUrl).respond(200, {'valid': 'true'});

//     scope.validate();

//     httpBackend.flush();
//   })
// })


