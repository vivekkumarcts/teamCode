function Tasks($scope)
{
    $scope.Tasks = [
        {type:'Earthquake',reported:'05/01/2014',time:'6:36 PM',duration:'3hrs ago', ImgUrl: 'Icon_Active_Crisis.svg',crisisData:'8.2',navigation:'crisisDetailView.html'},
        {type:'Earthquake',reported:'05/01/2014',time:'6:36 PM',duration:'3hrs ago', ImgUrl: 'Icon_Active_Crisis.svg',crisisData:'5.2',navigation:'crisisDetailView.html'},
        {type:'Earthquake',reported:'05/01/2014',time:'6:36 PM',duration:'3hrs ago', ImgUrl: 'Icon_Active_Crisis.svg',crisisData:'3.2',navigation:'crisisDetailView.html'}
    ];
    $scope.getNavigation = function(task) {
        location.href=task.navigation;
    };
}
