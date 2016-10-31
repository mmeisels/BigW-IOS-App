angular.module('nibs_ibeacon.wave', ['openfb'])
    // Routes
    .config(function ($stateProvider) {

        $stateProvider

            .state('app.wave', {
                url: "/wave",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/wave.html"
                    }
                }
            })
    })
