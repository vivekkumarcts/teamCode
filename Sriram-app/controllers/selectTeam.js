crisisMgmtApp.controller('selectTeamController', function($scope,selectTeamFactory,getTeamNavigationFactory,$filter) {

    $scope.teamInformation = undefined;
    $scope.teamMembers = undefined;
    $scope.teams = undefined;
    $scope.dataCharacters= undefined;
    $scope.teamDetails= undefined;
    $scope.searchText='';

    selectTeamFactory.getTeamInformation()
        .then(function (response) {
            $scope.teamInformation = response.teamInformation;
            $scope.teams = $scope.teamInformation.teams;
            $scope.teamDetails=$scope.teams.teamDetails
            $scope.dataCharacters=$scope.getUniqueAlphabetsToSort($scope.teamDetails);
            $scope.teamMembers = $scope.teamInformation.teamMembers;
        },
        function (error) {
            console.error(error);
        });

    $scope.getUniqueAlphabetsToSort = function (teamList) {
        var filteredAlphabetList=new Array();
        angular.forEach(teamList, function(team) {
            var alphabet=team.TeamName.charAt(0).toUpperCase();
            if(filteredAlphabetList.indexOf(alphabet)===-1){
                filteredAlphabetList.push(alphabet);
            }
        });
        return filteredAlphabetList.sort();
    }

    $scope.filterSearchResults = function () {

        var trimmedText=$scope.searchText.trim();

        if (trimmedText === null || trimmedText ==='') {
            $scope.teamDetails=new Array();
            $scope.teamDetails=$scope.teamInformation.teams.teamDetails;
            $scope.dataCharacters=$scope.getUniqueAlphabetsToSort($scope.teamDetails);

        }
        else
        {
            //default filter- Will do a contains search
            var firstLevelFilterItems = $filter('filter')($scope.teamInformation.teams.teamDetails, trimmedText);
            $scope.dataCharacters=$scope.getUniqueAlphabetsToSort(firstLevelFilterItems);
            var sortedList=new Array();
            angular.forEach( $scope.dataCharacters, function(item) {
                sortedList=sortedList.concat($filter('alphabeticalFilter')(firstLevelFilterItems, item));
            });

            $scope.teamDetails=sortedList;

        }
    }

    $scope.isSearchBoxEmpty= function(){
        return $scope.searchText.trim() === '';
    }

    $scope.navigateToSubsequentPage= function(teamDetail){
        teamDetail.isSelected = true;
        location.href= getTeamNavigationFactory.getNavigationPage()

    }
});
