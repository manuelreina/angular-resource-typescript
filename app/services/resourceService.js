var resourceService = (function () {
    function resourceService(resourceService) {
        this.resourceService = resourceService;
        this.updateAction = {
            method: 'PUT',
            isArray: false
        };
    }
    resourceService.prototype.crudResource = function (restURL, parameterID) {
        var resourceClass = this.resourceService(restURL, parameterID, {
            update: this.updateAction
        });
        return resourceClass;
    };
    resourceService.$inject = ['$resource'];
    return resourceService;
})();
angular.module('resourceApp').service('resourceService', resourceService);
//# sourceMappingURL=resourceService.js.map