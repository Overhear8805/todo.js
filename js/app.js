// App logic!
var orgApp = angular.module('noteApp', []);
var notes = [];
var tasks = [];

// Note
orgApp.controller('NoteInputController', function($scope){
    $scope.saveNote = function(){
        var note = noteinput.value; 
        notes.push({"date":Date.now(),
                    "text":note});
        $scope.orderProp = "date";
    };
});

orgApp.controller('NotePrintController', function($scope){
    $scope.notes = notes;
    $scope.orderProp = "date";

    $scope.remove = function(index){
        notes.splice(index, 1); 
    };

});

// TODO
orgApp.controller('TaskInputController', function($scope){
    $scope.saveTask = function(){
        var task = taskinput.value; 
        tasks.push({"date":Date.now(),
                    "text":task});
        $scope.orderProp = "date";
    };
});


orgApp.controller('TaskPrintController', function($scope){
    $scope.tasks = tasks;
    $scope.orderProp = "date";

    $scope.remove = function(index){
        tasks.splice(index, 1); 
    };
});
