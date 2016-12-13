app.controller('TaskslistController', ['taskService', function(taskService) {
  var vm = this;
  vm.taskslist = taskService.getTasks();
}]);