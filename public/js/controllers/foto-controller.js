angular.module("alurapic").controller("FotoController", function ($scope, $http) {

    $scope.foto = {};
    $scope.mensagem = '';


    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            $http.post('v1/fotos', $scope.foto)
                .success(function () {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                })
                .error(function (error) {
                    $scope.mensagem = 'Erro ao tentar incluir a foto';
                });
        }
    };

});
