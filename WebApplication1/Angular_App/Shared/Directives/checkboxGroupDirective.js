'use strict';
angular.module('AssistanceApp.shared').directive("checkboxGroup", function () {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            console.log(scope.item.Offer_City);
            // Determine initial checked boxes
            //if (scope.item.Offer_City.indexOf(scope.city.CityId) !== -1) {
            //    elem[0].checked = true;
            //}
            angular.forEach(scope.item.Offer_City, function (selected) {
                if (selected.CityId === scope.city.CityId) {
                    elem[0].checked = true;
                }
            });

            // Update array on click
            elem.bind('click', function () {
                var index = 0;
                angular.forEach(scope.item.Offer_City, function (selected) {
                    if (selected.CityId === scope.city.CityId) {
                        //if (index !== 0) {
                        if (elem[0].checked) {
                            if (index === -1) scope.item.Offer_City.push(scope.city);
                        }
                            // Remove if unchecked
                        else {
                            if (index !== -1) scope.item.Offer_City.splice(index, 1);
                        }
                        //}
                    } else {
                        scope.item.Offer_City.push(scope.city);
                    }
                    index++;
                });
                //var index = scope.item.Offer_City.indexOf(scope.city.CityId);
                //// Add if checked
                //if (elem[0].checked) {
                //    if (index === -1) scope.item.Offer_City.push(scope.city.CityId);
                //}
                //    // Remove if unchecked
                //else {
                //    if (index !== -1) scope.item.Offer_City.splice(index, 1);
                //}
                //// Sort and update DOM display
                //scope.$apply(scope.item.Offer_City.sort(function (a, b) {
                //    return a - b
                //}));
                //console.log(scope.item.Offer_City);
            });
        }
    }
});