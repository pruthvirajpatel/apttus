app.service('taskService', [function() {
  var vm = this;
  vm.getTasks = function() {
    return JSON.parse(localStorage.getItem('tasks'));
  };
  vm.addTask = function(data) {
    if (localStorage.length) {
      var list = JSON.parse(localStorage.getItem('tasks'));
      list.push(data);
      localStorage.setItem('tasks', JSON.stringify(list));
      return;
    }
    localStorage.setItem('tasks', JSON.stringify([data]));
  };
  return vm;
}]);