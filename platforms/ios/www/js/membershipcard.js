angular.module('nibs_ibeacon.membershipcard', ['openfb'])
    // Routes
    .config(function ($stateProvider) {

        $stateProvider

            .state('app.membershipcard', {
                url: "/membershipcard",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/membershipcard.html"
                    }
                }
            })
    })
