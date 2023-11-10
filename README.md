# SimpleOrderApp Overview
SimpleOrderApp is an Angular-based web application designed for ordering and managing food orders. Developed using modern web technologies and the Angular framework, it offers an interactive and user-friendly interface for customers.

# Key Features:
## Food Listing: 
Users can view various food options and filter them by categories.
## Food Details and Extras: 
Detailed information and additional options are available for each food item.
## Order Summary: 
Users can view a summary of the foods in their basket, including total cost.
## Dynamic Order Management: 
The application supports dynamic addition, removal, and updating of orders.
# Technologies Used:
# Angular: 
The core framework of the application.
# Angular Material: 
Provides user interface components.
# RxJS: 
A library for reactive programming.
# FormsModule: 
An Angular module for handling forms.
# How to Run:
## Install Dependencies:
After cloning the project to your local machine, install the dependencies by running the following command in the terminal:

npm install
## Start the Application:
To start the application, run the following command in the terminal:

## ng serve
This command will launch the application on localhost:4200.

# Storybook Integration:
SimpleOrderApp includes Storybook integration to visualize and interact with UI components in isolation. Storybook is an open-source tool that helps developers build UI components and pages in isolation from the app's business logic.

Accessing Storybook:
To view the Storybook, run the following command:
arduino
Copy code
npm run storybook
This will start the Storybook server and open it in your default web browser, typically at localhost:6006.
Using Storybook:
Navigate through different components to see their isolated states and variations.
Interact with components' controls to customize their properties and see live changes.
Note:
Ensure you have Angular CLI installed globally to run Angular applications. If not, install it using:

npm install -g @angular/cli

# SimpleOrderApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
