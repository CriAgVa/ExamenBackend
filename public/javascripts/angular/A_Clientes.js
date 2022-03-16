(function(){
    var app = angular.module("ClientsApp", []);

    app.controller("ClientCtrl", function($scope, $http, $timeout){
        $scope.clientes = [];
        $scope.cliente  = {}
        $scope.clienteE = {};
        $scope.status   = "";
        $scope.updt     = false;
        $scope.activo   = {};
        $scope.rfc      = {};
        $scope.fecha    = new Date();
        
        //funcion para obterner la lista de clientes
        $scope.getClientes = function(){
            $http.get("/clientes/")
                 .then(function(respuesta){
                    if(respuesta.data.error != undefined){
                        alert("Ha ocurrido un error...");
                    }else{
                        $scope.clientes = respuesta.data;
                    }
                 });
        }

        //funcion para dar el formato esperado (dd/mm/yy) a la fecha de nacimiento
        $scope.setBD = function(){
            var d,m,y,bd;
            d = $scope.fecha.getDate();
            m = $scope.fecha.getMonth()+1;
            y = $scope.fecha.getFullYear();

            
            if (d == 1 || d == 2 || d == 3 || d == 4 || d == 5 || d == 6 || d == 7 || d == 8 || d == 9){
                d = "0"+d;
            }
            if (m == 1 || m == 2 || m == 3 || m == 4 || m == 5 || m == 6 || m == 7 || m == 8 || m == 9){
                m = "0"+m;
            }
            bd=d+"/"+m+"/"+y;

            $scope.cliente.f_nacimiento = bd;
        }

        //funcion para insertar un cliente a la base de datos
        $scope.createCliente = function(){
            $scope.setBD();

            $http.post("/clientes/", $scope.cliente)
                 .then(function(respuesta){
                    if(respuesta.data.error != undefined){
                        alert("Ha ocurrido un error...");
                    }else{
                        $scope.clientes.push(angular.copy($scope.cliente));
                        $scope.status = "Cliente insertado";
                        $timeout(function(){
                            $scope.status = "";
                        }, 3000);
                        
                        $scope.cliente = {};
                    }
                 });
        }

        //funcion para fijar el cliente a editar dentro de la lista de todos los clientes
        $scope.editCliente = function(idx){
            $scope.clienteE = $scope.clientes[idx];
            $scope.updt = ( $scope.updt == 1 ) ? 0 : 1;
            $scope.activo = idx;
        }

        //funcion para actualizar el cliente elegido
        $scope.updateCliente = function(){
            $http.put("/clientes/"+$scope.clienteE._id, $scope.clienteE)
                 .then(function(respuesta){
                    if(respuesta.data.error != undefined){
                        alert("Ha ocurrido un error...");
                    }else{
                        $scope.clientes[$scope.activo] = angular.copy($scope.clienteE);
                        $scope.clienteE = {};
                        $scope.updt = ( $scope.updt == 1 ) ? 0 : 1;
                    }
                 });
        }

        //funcion para eliminar un cliente
        $scope.deleteCliente = function(idx){
            $http.delete("/clientes/"+$scope.clientes[idx]._id)
                 .then(function(respuesta){
                    if(respuesta.data.error != undefined){
                        alert("Ha ocurrido un error...");
                    }else{
                        $scope.clientes.splice( idx, 1);
                    }
                 });
        }

        $scope.getClientes();
    });
})();