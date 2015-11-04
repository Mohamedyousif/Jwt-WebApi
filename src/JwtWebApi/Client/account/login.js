﻿(function() {

    "use strict";

    angular.module("jwtWebApp")
        .controller("LoginCtrl", function($scope, $window, $http, $state) {

            var storage = $window.localStorage;
            debugger;
            $scope.submit = function() {

                var url = "signin";

                var user = {
                    email: $scope.email,
                    password: $scope.password
                };

                $http.post(url, user)
                    .success(function(res) {
                        console.log(res);
                        console.log(res.dbUser);
                        console.log(res.token);
                        storage.setItem("token", res.token);
                        $state.go("books");
                    })
                    .error(function(err) {
                        console.log("warning", "Opps!", "Could not register" + err);
                    });

            };
        });
})();