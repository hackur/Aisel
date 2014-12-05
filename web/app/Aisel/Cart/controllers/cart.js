'use strict';

/**
 * @ngdoc overview
 * @name Aisel
 *
 * @description
 * ...
 */
define(['app'], function (app) {
    app.controller('CartCtrl', ['$location', '$scope', 'cartService',
        function ($location, $scope, cartService) {
            // Get cart items

            cartService.getCartItems($scope).success(function (data, status) {
                    $scope.cartItems = data;
                }
            ).error(function (data, status) {
                });

            $scope.total = function() {
                var total = 0;
                angular.forEach($scope.cartItems, function(item) {
                    total += item.qty * item.product.price;
                })
                return total;
            }

        }]);
});