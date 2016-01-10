interface IMockService {
    setHttpBackend(): void;
}

class mockService implements IMockService {
    static $inject = ['$httpBackend', 'dataService'];

    constructor(private httpBackend: any, private dataService: IDataService) {
        
    }

    setHttpBackend(): void {
        var _this = this;
        this.httpBackend.whenGET('/persons').respond(function (method, url, data) {
            var persons = _this.dataService.getPersons();
            return [200, persons, {}];
        });

        this.httpBackend.when('PUT', /\/persons\/\d+/).respond(function (method, url, data) {
            var person = _this.dataService.updatePerson(<IPerson>JSON.parse(data));
            return [200, person, {}];
        });

        this.httpBackend.when('DELETE', /\/persons\/\d+/).respond(function (method, url, data) {
            var id = parseInt((<string>url).split('/')[2]);
            var person = _this.dataService.deletePerson(id);
            return [200, {}, {}];
        });

        this.httpBackend.whenPOST('/persons').respond(function (method, url, data) {
            
            var person = _this.dataService.addPerson(<IPerson>JSON.parse(data));
            return [200, person, {}];
        });
    }

    
}

angular.module('resourceApp').service('mockService', mockService);