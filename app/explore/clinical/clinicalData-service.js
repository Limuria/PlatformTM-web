/**
 * Created by iemam on 19/02/2015.
 */
angular.module('biospeak.clinical')
    .factory('ClinicalDataResource',function($resource){

        //Get Datatree

        //Get DataToPlot

        /*return $resource('/api/datasets/:datasetId')*/
        return $resource('../data/domain-tree.json');
    })


    .factory('clinicalDataService',['$http','$q','ngAppConfig', function($http,$q,ngAppConfig) {
        var serviceBase = ngAppConfig.apiServiceBaseUri;

        return {
            getObservations: function(studyId,observations) {
                console.log(angular.toJson(observations))

                return $http({
                    url:serviceBase+'api/studies/'+studyId+'/data/clinical/observations',
                    method:'POST',
                    data: angular.toJson(observations)
                })
                    .then(
                    function (response) {
                        return {
                            findingsTbl: (response.data.findingsTbl),
                            eventsTbl: (response.data.eventsTbl),
                            findingsTblHeader: (response.data.findingsTblHeader),
                            eventsTblHeader: (response.data.eventsTblHeader)
                        }
                    },
                    function (httpError) {
                        // translate the error
                        throw httpError.status + " : " +
                            httpError.data;
                    });
            },

            getClinicalDataTree: function(projectId){
                return $http({
                    url: serviceBase+'api/visualise/clinicalTree/'+projectId,
                    method:'GET'
                }).then(
                        function (response){
                            return {
                                treeData: (response.data)
                            }
                        }
                    )
            }
        }
    }])

