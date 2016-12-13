app.controller('ProfileController', ['httpService', function(httpService) {
  var vm = this;
  vm.users = [{
    id: 'fabpot',
    name: 'Fabien Potencier'
  }, {
    id: 'mhevery',
    name: 'Miško Hevery'
  }, {
    id: 'weierophinney',
    name: 'Matthew Weier'
  }, {
    id: 'rkh',
    name: 'Konstantin Haase'
  }, {
    id: 'GrahamCampbell',
    name: 'Graham Campbell'
  }];
}]);