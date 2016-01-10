interface IResourceService {
    crudResource<T>(restURL: string, parameterID: any): ICrudResourceClass<T>;
}

interface ICrudResourceClass<T> extends ng.resource.IResourceClass<T> {
    update(person: IPerson): IPerson;
}

class resourceService implements IResourceService {
    static $inject = ['$resource'];

    constructor(private resourceService: ng.resource.IResourceService) {
        
    }

    updateAction: ng.resource.IActionDescriptor = {
        method: 'PUT',
        isArray: false
    }

    crudResource<T>(restURL: string, parameterID: any): ICrudResourceClass<T> {
        var resourceClass = <ICrudResourceClass<T>>this.resourceService<T>(restURL, parameterID , {
            update: this.updateAction
        });
        return resourceClass;
    }
}

angular.module('resourceApp').service('resourceService', resourceService);