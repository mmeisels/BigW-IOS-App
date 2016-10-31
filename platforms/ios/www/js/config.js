angular.module('nibs_ibeacon.config', [])


    .constant('SERVER_URL', 'https://bwsloyalty.herokuapp.com')

    .constant('FB_APP_ID','1724400877834320')
    .constant('STATUS_LABELS', [
        'Browser',
        'Quick Dash',
        'Shopoholic'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Browser - Someone that spends their time browsing.',
        'Quick Dash - Get in and get out with out too much pain.',
        'Shopoholic - I live here. This is my world.'
    ]);
