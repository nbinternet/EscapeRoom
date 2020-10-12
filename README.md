# Escaperoom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Dependencies

For the required additional components. Install in the project root `/escaperoom`

`npm install --save-dev ng-maphilight`

`npm install --save-dev ngx-countdown`

## Development server

Run `ng serve --liveReload=false` for a dev server (for latest versions of `ng` remove `--liveReload` if error). Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## To set up the initial Development Environment

#### Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

Verify that you are running at least node 6.9.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine.

#### Then install the Angular CLI globally.

`npm install -g @angular/cli`

### Create a new project

Open a terminal window.

Generate a new project and skeleton application by running the following commands:

`ng new my-app`

Patience please. It takes time to set up a new project, most of it spent installing npm packages.

### Serve the application

Go to the project directory and launch the server.

`cd my-app`

`ng serve --open`

The `ng serve` command launches the server, watches your files, and rebuilds the app as you make changes to those files.

Using the `--open` (or just `-o`) option will automatically open your browser on `http://localhost:4200/`.

Note as this project uses a singleton service to store and maintain state you should also
include the flag `--liveReload=false` so that the server does not reload any pages and reinitialise
any services.

### Upgrading Angular

`npm install -g @angular/cli@latest`

To upgrade the local project

`npm install --save-dev @angular/cli@latest`

`npm install`
