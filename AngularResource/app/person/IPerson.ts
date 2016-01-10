interface ICrudResource<T> extends ng.resource.IResource<T> {
    edit: boolean;
}

interface IPerson extends ICrudResource<IPerson> {
    personId: number;
    name: string;
} 

