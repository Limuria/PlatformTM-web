/**
 * Created by iemam on 06/04/2017.
 */
'use strict'
function dashboardController($scope, $state, $stateParams,projectService, exportService, cartService, checkoutService ) {
    var vm = this;

    var date = new Date();
    var hrs = date.getHours();
    var greet;
    if(hrs<12)
        vm.greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        vm.greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        vm.greet = 'Good Evening';

    vm.projects = {}

    projectService.getProjectResource.get(function(response){
        vm.projects = response;
    });

    exportService.getUserDatasets().then(function(response){
        vm.datasets = response.datasets;
        console.log(vm.datasets.length)
        vm.loaded = true;
    });

    cartService.getUserQueries(vm.projectId).then(function(response){
        //console.log(response);
        vm.queries = response.queries;
    });

    vm.refreshDatasets = function(){
        exportService.getUserDatasets().then(function(response){
            vm.datasets = response.datasets;
            //console.log(vm.datasets.length)
            vm.loaded = true;
        });
    };

    vm.goToActivity = function(activity,edit){
        if(activity.isAssay)
            $state.go('admin.assay',{ projectId:vm.projectId, assayId: activity.id, edit:edit})
        else
            $state.go('admin.activity',{ projectId:vm.projectId, activityId: activity.id, edit:edit})
    }

    vm.downloadDataset = function(ds){
        if(ds.fileStatus === 0){
            ds.fileStatus = 1;
            checkoutService.prepareDataset(ds.id);
            vm.refreshDatasets();
        }else if(ds.fileStatus === 2)
            checkoutService.downloadDataset(ds.id);

    }

}
angular.module('biospeak.app')
    .controller('DashboardCtrl',['$scope', '$state','$stateParams','projectService','exportService','cartService','checkoutService',dashboardController])