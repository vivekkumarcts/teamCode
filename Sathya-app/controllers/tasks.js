function Tasks($scope)
{
$scope.Tasks = [
        {name: 'Active Crisis Info', ImgUrl: '../images/Icon_Active_Crisis.svg',navigation:'map.html'},
        {name: 'Respond to a Crisis', ImgUrl: '../images/Icon_RespondtoCrisis.png',navigation:'home.html'},
        {name: 'CM Policies and Procedures', ImgUrl: '../images/Icon_CMPolicies.png',navigation:'home.html'},
        {name: 'View Wallet Card', ImgUrl: '../images/Icon_WalletCard.png',navigation:'home.html'}];

    $scope.getNavigation = function(task) {
        location.href=task.navigation;
    };
}

