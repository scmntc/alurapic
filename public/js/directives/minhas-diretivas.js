angular.module('minhasDiretivas', []).directive('meuPainel', function(){

    var ddo = {};

    // A - Atributo
    // E - Elemento
    ddo.restric = "AE";

    ddo.scope = {
        titulo: '@'
    }

    // Transclude é utilizado para que os filhos sejam carregados novamente com a DOM.
    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
}).directive('minhaFoto', function(){

    var ddo = {};

    ddo.restric = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.templateUrl = 'js/directives/minha-foto.html';

    return ddo;
});