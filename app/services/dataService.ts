interface IDataService {
    getPersons(): ng.resource.IResourceArray<IPerson>;
    addPerson(person: IPerson): IPerson;
    updatePerson(person: IPerson): void;
    deletePerson(personId: number): void;
}


class dataService implements IDataService {
    static $inject = [];

    constructor() {
        
    }
    
    
    persons: any[] = [
        { personId: 1, name: 'Manu' },
        { personId: 2, name: 'Brad' },
        { personId: 3, name: 'John' }
    ];

    getPersons(): IPerson[] {
        return <IPerson[]>this.persons;
    }

    addPerson(person: IPerson): IPerson {
        var lastid = (this.persons.length > 0) ?
            this.persons[this.persons.length - 1].personId : 0;
        person.personId = lastid + 1;
        this.persons.push(person);
        return person;
    }

    updatePerson(person: IPerson): void {
        var putPerson: IPerson;
        for (var i = 0; i < this.persons.length; i++) {
            if (this.persons[i].personId === person.personId) {
                this.persons[i] = person;
                break;
            }
        }
        
    }

    deletePerson(personId: number): void {

        for (var i = 0; i < this.persons.length; i++) {
            if (this.persons[i].personId === personId) {
                this.persons.splice(i, 1);
                break;
            }
        }
    }
}

angular.module('resourceApp').service('dataService', dataService);