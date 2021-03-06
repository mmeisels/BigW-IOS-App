angular.module('nibs_ibeacon.product', ['openfb', 'nibs_ibeacon.status', 'nibs_ibeacon.activity', 'nibs_ibeacon.wishlist'])

    .config(function ($stateProvider) {

        $stateProvider

            .state('app.products', {
                url: "/products/:productId",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/product-list.html",
                        controller: "ProductListCtrl"
                    }
                }
            })

            .state('app.product-detail', {
                url: "/productsdetail/:itemId",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/product-detail.html",
                        controller: "ProductDetailCtrl"
                    }
                }
            })

    })

    // REST resource for access to Products data
    .factory('Product', function ($http, $rootScope) {
        return {
            all: function(productId) {
                console.log("this is all product js: ",productId);
                return $http.get($rootScope.server.url + '/products/' + productId);
            },
            get: function(itemId) {
                console.log("this is get product js : ",itemId);
                return $http.get($rootScope.server.url + '/productsdetail/' + itemId);
            }
        };
    })

    .controller('ProductListCtrl', function ($scope,$stateParams, Product, OpenFB) {

        Product.all($stateParams.productId).success(function(products) {
          console.log("here");
            $scope.products = products;
            console.log($scope.products.name);
        });

        $scope.doRefresh = function() {
            Product.all($stateParams.productId).success(function(products) {
                $scope.products = products;
                $scope.$broadcast('scroll.refreshComplete');
            });
        }

    })

    .controller('ProductDetailCtrl', function ($scope, $rootScope, $stateParams, $ionicPopup, Product, OpenFB, WishListItem, Activity, Status) {

        Product.get($stateParams.itemId).success(function(product) {
            console.log("detail here");
            $scope.product = product;
        });

        $scope.shareOnFacebook = function () {
            Status.show('Shared on Facebook!');
            Activity.create({type: "Shared on Facebook", points: 1000, productId: $scope.product.sfid, name: $scope.product.name, image: $scope.product.image})
                .success(function(status) {
                    Status.checkStatus(status);
                });
        };

        $scope.shareOnTwitter = function () {
            Status.show('Shared on Twitter!');
            Activity.create({type: "Shared on Twitter", points: 1000, productId: $scope.product.sfid, name: $scope.product.name, image: $scope.product.image})
                .success(function(status) {
                    Status.checkStatus(status);
                });
        };

        $scope.shareOnGoogle = function () {
            Status.show('Shared on Google+!');
            Activity.create({type: "Shared on Google+", points: 1000, productId: $scope.product.sfid, name: $scope.product.name, image: $scope.product.image})
                .success(function(status) {
                    Status.checkStatus(status);
                });
        };

        $scope.saveToWishList = function () {
            WishListItem.create({productId: $scope.product.id}).success(function(status) {
                Status.show('Added to your wish list!');
                Activity.create({type: "Added to Wish List", points: 1000, productId: $scope.product.sfid, name: $scope.product.name, image: $scope.product.image})
                    .success(function(status) {
                        Status.checkStatus(status);
                    });
            });
        };

    });
