var mockService = (function () {
    function mockService(httpBackend, dataService) {
        this.httpBackend = httpBackend;
        this.dataService = dataService;
    }
    mockService.prototype.setHttpBackend = function () {
        var _this = this;
        this.httpBackend.whenGET('/persons').respond(function (method, url, data) {
            var persons = _this.dataService.getPersons();
            return [200, persons, {}];
        });
        this.httpBackend.when('PUT', /\/persons\/\d+/).respond(function (method, url, data) {
            var person = _this.dataService.updatePerson(JSON.parse(data));
            return [200, person, {}];
        });
        this.httpBackend.when('DELETE', /\/persons\/\d+/).respond(function (method, url, data) {
            var id = parseInt(url.split('/')[2]);
            var person = _this.dataService.deletePerson(id);
            return [200, {}, {}];
        });
        this.httpBackend.whenPOST('/persons').respond(function (method, url, data) {
            var person = _this.dataService.addPerson(JSON.parse(data));
            return [200, person, {}];
        });
    };
    mockService.$inject = ['$httpBackend', 'dataService'];
    return mockService;
})();
angular.module('resourceApp').service('mockService', mockService);
//# sourceMappingURL=mockService.js.map