crisisMgmtApp.controller('crisisDetailController', function($scope,crisisDetailFactory) {

    $scope.crisisDetailInformation= undefined;
    $scope.crisisDetails= undefined;
    $scope.locationInfo = undefined;
    $scope.pointsOfContact = undefined;
    $scope.crisisUpdates = undefined;

    crisisDetailFactory.getCrisisDetails()
        .then(function (response) {
           $scope.crisisDetailInformation = response.crisisDetailInformation;
            $scope.crisisDetails= $scope.crisisDetailInformation.crisisDetails;
            $scope.locationInfo=$scope.crisisDetailInformation.locationInfo;
            $scope.crisisUpdates = $scope.crisisDetailInformation.crisisUpdates;
            $scope.pointsOfContact=$scope.crisisDetailInformation.pointsOfContact;
        }, function (error) {
            console.error(error);
        });

    $scope.setAccordionState = function (section) {

        switch (section) {
            case "locationContacts":

                $scope.locationInfo.isExpanded = !$scope.locationInfo.isExpanded
                if ($scope.locationInfo.isExpanded) {
                    $scope.pointsOfContact.isExpanded = !$scope.locationInfo.isExpanded
                    $scope.crisisUpdates.isExpanded = !$scope.locationInfo.isExpanded
                }

                break;
            case "POC":
                $scope.pointsOfContact.isExpanded = !$scope.pointsOfContact.isExpanded
                if ($scope.pointsOfContact.isExpanded) {
                    $scope.locationInfo.isExpanded = !$scope.pointsOfContact.isExpanded
                    $scope.crisisUpdates.isExpanded = !$scope.pointsOfContact.isExpanded

                }

                break;
            case "updates":
                $scope.crisisUpdates.isExpanded = !$scope.crisisUpdates.isExpanded
                if ($scope.crisisUpdates.isExpanded) {
                    $scope.locationInfo.isExpanded = !$scope.crisisUpdates.isExpanded
                    $scope.pointsOfContact.isExpanded = !$scope.crisisUpdates.isExpanded

                }


                break;

        }
    }
});
