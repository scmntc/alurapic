angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

    // Artefato para utilizar o redirecionamento automatico do HTML5.
    // É necessário que o back-end esteja preparado.
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/fotos.html',
        controller: 'FotoController'
    });

    // Redireciona para o arquivo mencionado.
    $routeProvider.otherwise({ redirectTo: '/fotos'});
});