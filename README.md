# MyStore

This is an Angular/Typescript frontend e-commerce application developed for the Udacity Mentorship program. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1 and styled using Bootstrap version 4.6.

The application reads the data from a local json file, and dynamically populates the product list. User can browse items, add them to the cart and checkout. The project simulates a basic e-commerce flow from start to end, demonstrating key Angular concepts throughout the whole process.

Users can add a product directly from the homepage, or by clicking on the product image and adding the product upon redirection to the product details page. Additionally, users can edit the amount both in the homepage and in the cart, and remove products by clicking on the remove link or by setting the product's quantity to 0. Using a service, the cart and total should automatically update whenever there are changes.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
