# angular-resource-typescript (outdated)
Angular Resource + PUT Action decriptor using Typescript and generics

As far as I know angular-resource doesn't have the PUT action decriptor because not everyone use this HTTP verb for their CRUD operations.
I wanted to use angular resource to create a CRUD Services with my RESTful webapi (which uses PUT),  without coding a resource factory for every entity and I came up with this project.

Using typescript and generics we can achieve it. Have a look to crud-angular.resource.ts file of this <a href="https://github.com/manuelreina/npm-crud-angular-resource">repository<a/> and you will see.

I have used angular-mocks and a dataService for the backend.
In order to give a little bit of life to the page I used angular-material.

You can see a running example <a href="http://manuelreina.github.io/angular-resource-typescript/">here</a>:
