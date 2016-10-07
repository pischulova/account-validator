import angular from 'angular';
import 'angular-mocks';
import {MaskFilter} from './MaskFilter';

describe('Mask filter', () => {
  var filter;

  beforeEach(() => {
    angular
      .module('app', [])
      .filter('mask', MaskFilter);
    angular.mock.module('app');
  });

  beforeEach(angular.mock.inject($filter => {
    filter = $filter('mask');
  }));

  it('should mask an input', function () {
    var input = '111111111111111';

    expect(filter(input)).toEqual('111*********111');
  });
})
