var app = angular.module('app', ['ngRoute', 'react']);
app.controller('loginCtrl', ['$scope', '$window', function ($scope, $window) {
    var flag = 0;
    $scope.person = { fname: '', pass: '' };
    $scope.workers = [{ name: "Yakov", password: "123" },
                     { name: "David", password: "456" },
                     { name: "Moshe", password: "321" },
                     { name: "Or", password: "451" },
                     { name: "Lior", password: "655" }];
    $scope.userNotFound = false;
    $scope.checkUser = function () {
        for (var i = 0; i < $scope.workers.length; i++){
            if ($scope.workers[i].name == $scope.person.fname && $scope.workers[i].password == $scope.person.pass)
            {
                $window.location.href = '../index.html';
                flag = 1;
                $scope.userNotFound = false;
            }

        }
        if (flag == 0)
            $scope.userNotFound = true;
    }  
}])

var Hello = React.createClass({
    propTypes: {
        fname: React.PropTypes.string.isRequired

    },
    render: function ($scope) {
        return React.DOM.span(null,
          'Hello ' + this.props.fname
        );
    }
});
app.value("Hello", Hello);
app.directive('hello', function (reactDirective) {
    return reactDirective(Hello);
});