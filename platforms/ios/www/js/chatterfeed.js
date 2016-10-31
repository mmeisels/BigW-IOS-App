angular.module('nibs_ibeacon.chatterfeed', ['openfb'])
    // Routes
    .config(function ($stateProvider) {

        $stateProvider

            .state('app.chatterfeed', {
                url: "/chatterfeed",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/chatterfeed.html"
                    }
                }
            })
    })
