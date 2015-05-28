/**
 * Created by iemam on 15/01/2015.
 */
angular.module('biospeak.clinical')

    .directive('clTree',function(){
        return{
            restrict:'E',
            scope:{
                observations:'=',
                getChartingOpts:'&'
            },
            template:
                '<div class="clinicalTree row ">'+
                    '<div class="col-md-12">'+
                        '<button class="btn btn-sm btn-block">'+
                            '<span>Clinical Observations</span>'+
                        '</button>'+
                    '</div>'+
                    '<cl-tree-class ng-repeat="class in observations" class="class" plot-obs="plotObs({obs:obs})" ></cl-tree-class>'+
                '</div>',
            link: function(scope, element, attrs){
            }
        }
    })

    .directive('clTreeClass', function(){
        return{
            restrict:'EA',
            /*scope:{
              class:'=',
              plotObs:'&'
            },*/
            template:
                '<div class="col-md-4">'+
                    '<div class="connecting-line"></div>'+
                        '<button type="button" class="btn btn-sm btn-block" style="background-color: #00afbc;border-radius:30px">{{class.class}}</button>'+
                    '<div class="connecting-line"></div>'+
                    '<cl-tree-obs-grp ng-repeat="domain in class.domains" group="domain"  get-charting-opts="getChartingOpts()"></cl-tree-obs-grp>'+

                    '</div>'
        }
    })

    .directive('clTreeObsGrp', function(){
        return{
            restrict:'EA',
            scope:{
                group:'=',
                getChartingOpts:'&'
            },
            template:
                '<div class="btn-group btn-block">'+
                    '<button class="col-md-1 btn btn-sm node-toggle" data-toggle="collapse" href="#{{group.code}}">'+
                        '<span class="caret"></span>'+
                    '</button>'+
                    '<button class="tree-node col-md-11 btn btn-sm tree-node" id="deny">'+
                        '<span>{{group.name}}</span>'+
                    '</button>'+
                '</div>'+
                '<div id="{{group.code}}"  class="collapse col-md-offset-1">'+
                    '<cl-tree-obs ng-repeat="obs in group.observations" <!--observation="obs" plot-obs="plotObs({obs:obs})"-->></cl-tree-obs>'+
                '</div>'
        }
    })

    .directive('clTreeObs',function($compile){
        return{
            restrict:'EA',
            /*scope:{
              observation:'=',
              plotObs:'&'
            },*/
            template:
                '<button id="obs_{{obs.code}}" ' +
                    'class="btn btn-sm tree-leaf"  '+
                    'charting-button ' +
                    'val="{{obs.code}}" ' +
                    'obsid="{{obs.id}}" ' +
                    'domain="{{obs.domainCode}}"'+
                    'obsrv="{{obs.code}}"'+
                    'active="{{isActive}}"'+
                    'container="{{chartContainerId}}"'+
                    'grp="{{TP}}"'+
                    'chart-service="{{chartService}}"'+
                    //'ng-class="{'': !isActive, 'active': isActive}"
                    'ng-init="isActive = false"'+
                    'ng-click="isActive = !isActive">' +
                    '<span>{{obs.name}}</span>'+
                '</button>',
            link: function (scope, element, attrs) {

                if (angular.isArray(scope.obs.observations)) {
                    $compile("<cl-tree-obs-grp group='obs' get-charting-opts='getChartingOpts()'></cl-tree-obs-grp>")(scope, function(cloned, scope){
                        element.replaceWith(cloned);
                    });
                }else{
                    //console.log(scope.getChartingOpts())
                    scope.chartContainerId = scope.getChartingOpts().container
                    scope.chartService = scope.getChartingOpts().chartingServiceName
                }
            }
        }
    })


