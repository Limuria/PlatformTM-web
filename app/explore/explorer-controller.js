/**
 * Created by iemam on 08/07/2014.
 */
'use strict';

/* Controllers */

angular.module('eTRIKSdata.explorer')


    .controller('ExportCtrl',['$scope','ExportCriteria',function($scope,ExportCriteria) {
        $scope.criteria = ExportCriteria.criteria;
        //console.log($scope.criteria.showClinicalSection)
        $scope.number = 4;

        $scope.$on('filterApplied', function(event, ExportCriteria) {

            console.log("boradcast ok")
            console.log(ExportCriteria)
            $scope.number = ExportCriteria;
        });



    }])
