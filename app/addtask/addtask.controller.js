app.controller('AddController', ['taskService', function(taskService) {
  var vm = this;
  vm.priorities = [1, 2, 3, 4, 5];

  vm.addTask = function() {
    taskService.addTask(vm.user);
    vm.user = {};
    alert('Task Added');
  };

  vm.reset = function() {
    vm.user = {};
  };
}]);