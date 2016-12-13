var app  = angular.module('apttus', ['ui.router']);
  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('addtask', {
        url: '/addtask',
        controller: 'AddController as vm',
        templateUrl: 'app/addtask/addtask.html'
      })
      .state('taskslist', {
        url: '/taskslist',
        controller: 'TaskslistController as vm',
        templateUrl: 'app/taskslist/taskslist.html'
      })
      .state('profile', {
        url: '/profile',
        controller: 'ProfileController as vm',
        templateUrl: 'app/profile/profile.html'
      });
     $urlRouterProvider.otherwise('/addtask');
  }]);