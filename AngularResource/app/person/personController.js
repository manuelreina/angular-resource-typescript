var personController = (function () {
    function personController(resourceService, mockService, toastService) {
        this.resourceService = resourceService;
        this.mockService = mockService;
        this.toastService = toastService;
        this.mockService.setHttpBackend();
        this.personResource = this.resourceService
            .resource('/persons/:personId', { personId: '@personId' });
        this.persons = this.personResource.query();
    }
    personController.prototype.update = function (person) {
        person.edit = false;
        this.personResource.update(person);
    };
    personController.prototype.delete = function (person, index) {
        var _this = this;
        person.$remove().then(function (data) { return _this.persons.splice(index, 1); });
    };
    personController.prototype.add = function () {
        if (this.newPerson && this.newPerson.name != '') {
            var _this = this;
            var data = this.personResource.save(this.newPerson)
                .$promise.then(function (data) {
                _this.persons.push(data);
                _this.newPerson.name = '';
            });
        }
        else {
            var toast = this.toastService.simple()
                .textContent('Type something please!')
                .action('OK')
                .highlightAction(false).position("right");
            this.toastService.show(toast).then(function (response) {
            });
        }
    };
    personController.$inject = ['crudService', 'mockService', '$mdToast'];
    return personController;
})();
angular.module('resourceApp').controller('personController', personController);
//# sourceMappingURL=personController.js.map