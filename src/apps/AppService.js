(function() {
    'use strict';
    angular.module('apps').service('appService', ['$q', AppService]);

    function AppService($q) {
        var apps = [
            {
                name: 'Learn Basic Latin',
                icon: 'ic-latin',
                color: "#B41F23",
                colorLight: "#DE4145",
                colorDark: "#711316",
                description: 'Learn the basics of Latin grammar: questions, conjugations, declensions and more',
                fullDescription: 'Learn basic Latin! This app gives you the opportunity to learn the way Latin grammar works. With this skill, learning other languages such as Spanish, French, Italian and many others will become easier!<br><br>This course includes Latin grammar notes which include the 1st, 2nd and 3rd declension and all 4 conjugations.<br><br>Over 30 grammar notes included. Conjugate verbs easily with the conjugator tool',
                legal: '',
                google: 'https://play.google.com/store/apps/details?id=com.mra.one.free',
                amazon: 'http://www.amazon.com/AQUA-Apps-Learn-Basic-Latin/dp/B00E7QVRZA/'
            },
            {
                name: 'Triplanner',
                icon: 'ic-triplanner',
                color: "#1377BA",
                colorLight: "#309FEA",
                colorDark: "#0c4973",
                description: 'Planning a holiday? Use Triplanner to plan everything. It\'s simple and fast!',
                fullDescription: 'Planning a holiday? Use Triplanner to plan everything. It\'s simple and fast! Set the start time of the event, how long it will last, and the locations. See each day\'s overview at a glance, and just tap an event to see more detail.<br><br>Using Google\'s Material design, combined with an intuitive interface, this trip planner makes organizing your holiday fast, simple and painless.',
                legal: '',
                google: 'https://play.google.com/store/apps/details?id=com.aqualabs.triplanner',
                amazon: 'http://www.amazon.com/AQUA-Apps-Triplanner/dp/B00QSWCMLE/'
            },
            {
                name: 'Squash',
                icon: 'ic-squash',
                color: "#FB8E25",
                colorLight: "#FCB570",
                colorDark: "#814002",
                description: 'Search for squash players in New Zealand and view their points, grade and matches',
                fullDescription: 'This is an Android™ app for viewing information for squash players and matches in New Zealand<ul><li>Search for players</li><li>View matches</li><li>Points calculator</li><li>Watchlist</li></ul>',
                legal: '',
                google: 'https://play.google.com/store/apps/details?id=com.aqualabs.isquash',
                amazon: ''
            },
            {
                name: 'Convert',
                icon: 'ic-convert',
                color: "#469E4A",
                colorLight: "#71C074",
                colorDark: "#285A2A",
                description: 'Need a simple to use and lightweight unit converter? Download Convert now!',
                fullDescription: 'Need a simple to use and lightweight unit converter? Download Convert now! This Material Design app has over 20 converters with more to come soon<ul><li>Over 20 converters in 6 categories (basic, digital, electricity, engineering, waves, other)</li><li>Search through converters</li><li>Auto detect (beta<sup class="legal-sup">1</sup>): don\'t know exactly what unit you want to convert? Type it into auto detect, and let the app figure it out!</li><li>Text replace<sup class="legal-sup">2</sup>: when you\'re browsing the web, or having a conversation, simply highlight the text you want to convert, and press "Convert." If it\'s in an editable text field, you can even replace the text with the converted units. Never leave an app to convert a unit again</li><li>Material design</li><li>Tablet UI</li></ul>',
                legal: '<sup class="legal-sup">1</sup> This feature is currently being tested, and the reliability of detecting units cannot be guaranteed<br><sup class="legal-sup">2</sup> Available on Android 6.0 (Marshmallow) or newer',
                google: 'https://play.google.com/store/apps/details?id=co.aquaapps.convert',
                amazon: 'http://www.amazon.com/AQUA-Apps-Convert/dp/B01CMHECXY/'
            }
        ];

        return {
            loadAllApps : function() {
                return $q.when(apps);
            }
        };
    }
})();