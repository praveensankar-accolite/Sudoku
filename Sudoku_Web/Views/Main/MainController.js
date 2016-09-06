mainModule.controller('MainController',['$scope','$window',function($scope,$window){

    $scope.test = "Test";
    $scope.Question = [
        [' '  ,' '  ,' '  ,2,6,' '  ,7,' '  ,1],
        [6,8,' '  ,' '  ,7,' '  ,' '  ,9,' '  ],
        [1,9,' '  ,' '  ,' '  ,4,5,' '  ,' '  ],
        [8,2,' '  ,1,' '  ,' '  ,' '  ,4,' '  ],
        [' '  ,' '  ,4,6,' '  ,2,9,' '  ,' '  ],
        [' '  ,5,' '  ,' '  ,' '  ,3,' '  ,2,8],
        [' '  ,' '  ,9,3,' '  ,' '  ,' '  ,7,4],
        [' '  ,4,' '  ,' '  ,5,' '  ,' '  ,3,6],
        [7,' '  ,3,' '  ,1,8,' '  ,' '  ,' '  ]
    ];

    $scope.flag = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]
    ];

    $scope.flag1 = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]
    ];


    //$scope.Question = [
    //    [4, 3, 5, 2, 6, 9, 7, 8, 1],
    //    [6, 8, 2, 5, 7, 1, 4, 9, 3],
    //    [1, 9, 7, 8, 3, 4, 5, 6, 2],
    //    [8, 2, 6, 1, 9, 5, 3, 4, 7],
    //    [3, 7, 4, 6, 8, 2, 9, 1, 5],
    //    [9, 5, 1, 7, 4, 3, 6, 2, 8],
    //    [5, 1, 9, 3, 2, 6, 8, 7, 4],
    //    [2, 4, 8, 9, 5, 7, 1, 3, 6],
    //    [7, 6, 3, 4, 1, 8, 2, 5, 9]
    //];

    //$scope.flag = [
    //    [4, 3, 5, 2, 6, 9, 7, 8, 0],
    //    [6, 8, 2, 5, 7, 1, 4, 9, 3],
    //    [1, 9, 7, 8, 3, 4, 5, 6, 2],
    //    [8, 2, 6, 1, 9, 5, 3, 4, 7],
    //    [3, 7, 4, 6, 8, 2, 9, 1, 5],
    //    [9, 5, 1, 7, 4, 3, 6, 2, 8],
    //    [5, 1, 9, 3, 2, 6, 8, 7, 4],
    //    [2, 4, 8, 9, 5, 7, 1, 3, 6],
    //    [7, 6, 3, 4, 1, 8, 2, 5, 9]
    //];
    //$scope.flag1 = [
    //       [4, 3, 5, 2, 6, 9, 7, 8, 0],
    //       [6, 8, 2, 5, 7, 1, 4, 9, 3],
    //       [1, 9, 7, 8, 3, 4, 5, 6, 2],
    //       [8, 2, 6, 1, 9, 5, 3, 4, 7],
    //       [3, 7, 4, 6, 8, 2, 9, 1, 5],
    //       [9, 5, 1, 7, 4, 3, 6, 2, 8],
    //       [5, 1, 9, 3, 2, 6, 8, 7, 4],
    //       [2, 4, 8, 9, 5, 7, 1, 3, 6],
    //       [7, 6, 3, 4, 1, 8, 2, 5, 9]
    //];
    $scope.Conflicts = [];
    $scope.col = $scope.Question[0].length;
    for (var i = 0; i < $scope.Question.length; i++)
    {
        $scope.Conflicts[i] = new Array($scope.col).fill(0);


    }


   

    $scope.Validate = function () {

       msg = $scope.IsConflict();
        if (!msg)
            $window.alert("success");
        else
            $window.alert("not success");

    };

    $scope.IsConflict = function () {

        var rows = $scope.Question.length;
        var columns = $scope.Question[0].length;
        for(var i=0;i<rows;i++)
        {
            for(var j=0;j<columns;j++)
            {
                if ($scope.Conflicts[i][j] == 1)
                    return true;
            }
        }
        return false;
    };
    
    $scope.DoValidation = function (row, column) {

        
            if (($scope.Question[row][column] >= 1 && $scope.Question[row][column] <= 9)) {
                if ((!$scope.CheckRow(row, column)) && (!$scope.CheckColumn(row, column)) && (!$scope.CheckBox(row, column, row - row % 3, column - column % 3, $scope.Question[row][column]))) {
                    $scope.Conflicts[row][column] = 0;
                }
                else {
                    $scope.Conflicts[row][column] = 1;
                }
                console.log("conflicts : ", row, column, $scope.Conflicts[row][column]);
            }
            else {
                if ($scope.flag1[row][column]!=0) {
                    $window.alert("Enter the value between 1 to 9");
                    $scope.Question[row][column] = '';
                    
                }
                if($scope.flag1[row][column]==0)
                {
                    $scope.flag1[row][column] = 1;
}
}
        };

    $scope.CheckRow = function (row, column) {

        var currentValue = $scope.Question[row][column];
        var NoOfColumns=$scope.Question[row].length;
        for(var i=0;i<NoOfColumns;i++)
        {
            if(i!=column)
            if ($scope.Question[row][i] == currentValue)
                return true;
        }
        return false;
    };

    $scope.CheckColumn = function (row, column) {

        var currentValue = $scope.Question[row][column];
        var NoOfRows = $scope.Question.length;
        for (var i = 0; i < NoOfRows; i++) {
            if(i!=row)
            if ($scope.Question[i][column] == currentValue)
                return true;
        }
        return false;
    };

    $scope.CheckBox = function (currentRow,currentColumn,row,column,currentValue) {

        for(var rowIndex=0;rowIndex<3;rowIndex++)
        {
            for(var colIndex=0;colIndex<3;colIndex++)
            {
                if((rowIndex+row)!=currentRow&&(colIndex+column)!=currentColumn)
                if ($scope.Question[rowIndex+row][colIndex+column] == currentValue)
                    return true;
            }
        }
        return false;

    };

}]);