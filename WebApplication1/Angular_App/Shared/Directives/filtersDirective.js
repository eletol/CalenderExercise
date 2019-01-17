'use strict';

angular.module('AssistanceApp.shared').directive('filtersDirective', ['$filter', function ($filter) {
    return {
        restrict: 'A',
        scope: {
            basicAppliedFilters: '=',
            rangeAppliedFilters: '=',
            basicFilters: '=',
            rangeFilters: '=',
            refreshItem: '&'
        },
        templateUrl: '/Angular_App/Shared/HTML/filters.html',
        link: function (scope) {
            scope.ClearFilterItem = function (itemName) {
                //console.log(itemName);
                angular.forEach(scope.basicFilters, function (filter) {
                    if (filter.Key == itemName) {
                        filter.Value = null;
                        filter.item = null;
                    }
                });
                scope.refreshItem();// loaditems();
            };
            scope.ClearRangeFilterItem = function (itemName) {
                //console.log(itemName);
                angular.forEach(scope.rangeFilters, function (filter) {
                    if (filter.Key == itemName) {
                        filter.ValueFrom = null;
                        filter.ValueTo = null;
                    }
                });
                scope.refreshItem();
            };
            scope.anyFiltersApplied = function () {
                //console.log($filter('filter')(scope.rangeAppliedFilters, { ValueFrom: '!!' }).length);
                //console.log($filter('filter')(scope.basicAppliedFilters, { Value: '!!' }).length);
                if (scope.rangeAppliedFilters && scope.basicAppliedFilters && $filter('filter')(scope.rangeAppliedFilters, { ValueFrom: '!!' }).length == 0
                    && $filter('filter')(scope.basicAppliedFilters, { Value: '!!' }).length == 0) {
                    //$filter('filter')(item.Offers, { OfferStatusId: 2 }).length
                    return true;
                }
                return false;
            };
        }
    };
}]);