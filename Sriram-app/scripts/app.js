var crisisMgmtApp = angular.module('crisisMgmtApp', []);
var fromPageID=0;
var selectTeamNavigation=
{
        ACTIVATE_CRISIS_TEAM    :0,
        SCHEDULE_MEETING     : 1,
        VIEW_WALLET_CARD  : 2
};

crisisMgmtApp.factory('crisisDetailFactory', function($http) {
    return {
        getCrisisDetails: function() {
            //since $http.get returns a promise,
            //and promise.then() also returns a promise
            //that resolves to whatever value is returned in it's
            //callback argument, we can return that.
            return $http.get('../data/crisisDetail.json').then(function(result) {
                return result.data;
            });
        }
    }
});

crisisMgmtApp.factory('selectTeamFactory', function($http) {
    return {
        getTeamInformation: function() {
            //since $http.get returns a promise,
            //and promise.then() also returns a promise
            //that resolves to whatever value is returned in it's
            //callback argument, we can return that.

            return $http.get('../data/selectTeam.json').then(function(result) {
                return result.data;
            });
        }
    }
});

crisisMgmtApp.factory('setTeamNavigationFactory', function() {
    return {
        setNavigationPage: function(id) {
            fromPageID=id;
        }
    }
});

crisisMgmtApp.factory('getTeamNavigationFactory', function() {
    return {
        getNavigationPage: function() {
                var navigationPage = '';
                switch(fromPageID)
                {
                    case selectTeamNavigation.ACTIVATE_CRISIS_TEAM:
                        navigationPage="sendAlert.html";
                        break;
                    case selectTeamNavigation.SCHEDULE_MEETING:
                        navigationPage="sendAlert.html";
                        break;
                    case selectTeamNavigation.VIEW_WALLET_CARD:
                        navigationPage="walletCard.html";
                        break;
                    default:
                        navigationPage="sendAlert.html";
                        break;
                }
                return navigationPage;
        }
    }
});

/* The sorting and unique alphabets filters for alphabetical filtering of elements*/
crisisMgmtApp.filter('alphabeticalFilter', function() {

    function strStartsWith(str, prefix) {
        return (str+"").indexOf(prefix) === 0;
    }

    return function( items, name) {


        var filtered = [];

        angular.forEach(items, function(item) {
            if(strStartsWith(item.TeamName, name)){
                filtered.push(item);
            }
        });

        return filtered;
    };
});

