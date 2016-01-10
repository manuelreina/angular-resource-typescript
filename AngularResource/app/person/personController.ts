interface IPersonController {
    persons: ng.resource.IResourceArray<IPerson>;
    newPerson: IPerson;
    update(person: IPerson): void;
    delete(person: IPerson, index: number): void;
    add(): void;
}

class personController {
    static $inject = ['resourceService', 'mockService', '$mdToast'];

    constructor(private resourceService: IResourceService,
        private mockService: IMockService,
        private toastService: ng.material.IToastService) {
        
        this.mockService.setHttpBackend();
        this.personResource = this.resourceService
            .crudResource<IPerson>('/persons/:personId', { personId: '@personId' });
        
        this.persons = this.personResource.query();
    }

    personResource: ICrudResourceClass<IPerson>;

    persons: ng.resource.IResourceArray<IPerson>;

    newPerson: IPerson;

    update(person: IPerson): void {
        person.edit = false;
        this.personResource.update(person);
    }

    delete(person: IPerson, index: number): void {
        person.$remove().then(data => this.persons.splice(index, 1));
    }

    add(): void {
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
    }
    
}

angular.module('resourceApp').controller('personController', personController);