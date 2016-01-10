var dataService = (function () {
    function dataService() {
        this.persons = [
            { personId: 1, name: 'Manu' },
            { personId: 2, name: 'Brad' },
            { personId: 3, name: 'John' }
        ];
    }
    dataService.prototype.getPersons = function () {
        return this.persons;
    };
    dataService.prototype.addPerson = function (person) {
        var lastid = (this.persons.length > 0) ?
            this.persons[this.persons.length - 1].personId : 0;
        person.personId = lastid + 1;
        this.persons.push(person);
        return person;
    };
    dataService.prototype.updatePerson = function (person) {
        var putPerson;
        for (var i = 0; i < this.persons.length; i++) {
            if (this.persons[i].personId === person.personId) {
                this.persons[i] = person;
                break;
            }
        }
    };
    dataService.prototype.deletePerson = function (personId) {
        for (var i = 0; i < this.persons.length; i++) {
            if (this.persons[i].personId === personId) {
                this.persons.splice(i, 1);
                break;
            }
        }
    };
    dataService.$inject = [];
    return dataService;
})();
angular.module('resourceApp').service('dataService', dataService);
//# sourceMappingURL=dataService.js.map