// public/core.js
var myApp = angular.module('myApp', []);

myApp.controller('MainPresentationController',function ($scope, $http) {
    $scope.cursor_type = "cursor";

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.pageX - rect.left,
            y: evt.pageY - rect.top
        };
    }

    $scope.init = function () {
        var drawing_area_canvas = document.querySelector( '#drawing_area' );
        $scope.drawing_area_canvas_ctx = drawing_area_canvas.getContext("2d");
        drawing_area_canvas.addEventListener('mousemove', function (evt) {
                var mouse = getMousePos(drawing_area_canvas, evt);
                if (evt.which == 1)
                    $scope.canvasClicked(mouse);
        });
    };

    $scope.chooseCursor = function () {
        $scope.cursor_type = "cursor";
    };

    $scope.choosePen = function () {
        $scope.cursor_type = "pen";
    };

    $scope.canvasClicked = function(pos) {
        if ($scope.cursor_type == "pen") {
            $scope.drawing_area_canvas_ctx.beginPath();
            $scope.drawing_area_canvas_ctx.arc(pos.x,pos.y,0.1,0,2*Math.PI);
            $scope.drawing_area_canvas_ctx.stroke();
        }
    };
});
