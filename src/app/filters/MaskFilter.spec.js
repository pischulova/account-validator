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

  it('should not mask an empty or undefined input', function () {
    expect(filter('')).toBeFalsy();
    expect(filter(undefined)).toBeFalsy();
  });

  it('should not mask an input with length not equal to 15', function () {
    expect(filter('11')).toBeFalsy();
    expect(filter('1111111111111111111')).toBeFalsy();
  });
})
