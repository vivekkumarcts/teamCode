function crisisRespond($scope)
{
    $scope.Tasks = [
        {name: 'Active my crisis Management team', ImgUrl: '../images/respondCrisis/Icon_ActivemyCMteam.svg',navigation:'listView.html'},
        {name: 'Schedule crisis Management meeting', ImgUrl: '../images/respondCrisis/Icon_ScheduleCMmeeting.svg',navigation:'respondToCrisis.html'},
        {name: 'Request enterprise resiliency support', ImgUrl: '../images/respondCrisis/Icon_requestResiliency.svg',navigation:'home.html'},
        {name: 'Call the central security control', ImgUrl: '../images/respondCrisis/Icon_callCSC.svg',navigation:'home.html'}];

    $scope.getNavigation = function(task) {
        location.href=task.navigation;
    };
}

