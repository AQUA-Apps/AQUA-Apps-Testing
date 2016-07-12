angular.module('AQUA Apps', ['ngMaterial', 'ngSanitize', 'apps'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange')
        .dark();
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();

    $mdThemingProvider.definePalette('socialPalette', { '50': 'FD9827', '100': 'FD9827', '200': 'FD9827', '300': 'FD9827', '400': 'FD9827', '500': 'FD9827', '600': 'FD9827', '700': 'FD9827', '800': 'FD9827', '900': 'FFFFFF', 'A100': 'FFFFFF', 'A200': 'FFFFFF', 'A400': 'FFFFFF', 'A700': 'FFFFFF', 'contrastDefaultColor': 'light', 'contrastDarkColors': ['50'], 'contrastLightColors': undefined });
    $mdThemingProvider.theme('social').backgroundPalette('socialPalette');
}).controller('SiteCtrl', function($scope, $mdDialog, $mdMedia) {
    globalScope = $scope;
    $scope.showLegal = function(isPrivacy) {
        $mdDialog.show({
            templateUrl: './res/legal/' + (isPrivacy ? 'privacy' : 'tos') + '.html',
            openFrom: angular.element(isPrivacy ? btnPrivacy : btnTerms), closeTo: angular.element(isPrivacy ? btnPrivacy : btnTerms), parent: angular.element(document.body), clickOutsideToClose: true, controller: DialogController
        });
    };
});

function DialogController($scope, $mdDialog) {
    $scope.hide = function() { $mdDialog.hide(); };
    $scope.cancel = function() { $mdDialog.cancel(); };
}

var globalScope;
angular.element(document).ready(function () {
    if (window.location.search.substring(1) == "privacy") globalScope.showLegal(true);
    else if (window.location.search.substring(1) == "tos") globalScope.showLegal(false);
});
