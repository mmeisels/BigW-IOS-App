angular.module('nibs_ibeacon.oauthcallback', ['openfb'])
    // Routes
    .config(function ($stateProvider) {

        $stateProvider

            .state('app.oauthcallback', {
                url: "/oauthcallback",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/oauthcallback.html"
                    }
                }
            })
    })
