angular.module('nibs_ibeacon.productcat', ['openfb', 'nibs_ibeacon.status', 'nibs_ibeacon.activity', 'nibs_ibeacon.wishlist'])

    .config(function ($stateProvider) {

        $stateProvider

            .state('app.productscat', {
                url: "/productscat",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/productcat.html",
                        controller: "ProductCatCtrl"
                    }
                }
            })

            .state('app.productscatlist', {
                url: "/productscat/:productId",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/product-list.html",
                        controller: "ProductListCtrl"
                    }
                }
            })

    })

    // REST resource for access to Products data
    .factory('Productcat', function ($http, $rootScope) {
        return {
            all: function() {
              console.log("this is all");
                return $http.get($rootScope.server.url + '/productscat');
            },
            get: function(productId) {
              console.log("this is product: ",productId);
                return $http.get($rootScope.server.url + '/productscat/' + productId);
            }
        };
    })

    .controller('ProductCatCtrl', function ($scope, Productcat, OpenFB) {

        Productcat.all().success(function(productscat) {
          console.log("this is 1: ");
            $scope.productscat = productscat;
        });

        $scope.doRefresh = function() {
            Productcat.all().success(function(productscat) {
              console.log("this is 2: ");
                    $scope.productscat = productscat;
                $scope.$broadcast('scroll.refreshComplete');
            });
        }

    })

    .controller('ProductListCtrl', function ($scope, $rootScope, $stateParams, $ionicPopup, Product, OpenFB, WishListItem, Activity, Status) {

      Product.get($stateParams.productId).success(function(product) {
        $scope.product = product;
      });

    });
