# Bitbucket Status API

<p>This app monitors the status of the Bitbucket Status API, and associated services.</p>
<p><a href="https://bitbucket.status.atlassian.com/api#status" target="_blank" rel="noopener noreferrer">Atlassian Bitbucket Status API Documentation and Functionality</a></p>
<p>The following API endpoints are used in this app:</p>
<ul>
    <li><span>Status</span> - gets the status rollup for the whole page - <span class="api-endpoint">https://bqlf8qjztdtr.statuspage.io/api/v2/status.json</span></li>
    <li><span>Components</span> - gets the components for the page - <span class="api-endpoint">https://bqlf8qjztdtr.statuspage.io/api/v2/components.json</span></li>
    <li><span>Unresolved Incidents</span> - gets a list of any unresolved incidents - <span class="api-endpoint">https://bqlf8qjztdtr.statuspage.io/api/v2/incidents/unresolved.json</span></li>
    <li><span>All Incidents</span> - gets a list of the 50 most recent incidents - <span class="api-endpoint">https://bqlf8qjztdtr.statuspage.io/api/v2/incidents.json</span></li>
</ul>
            
## To build the project:
<ul>
  <li>Clone or download from Github</li>
  <li>In the project directory do npm install to build the node_modules directory and download the project dependencies</li>
  <li>Follow the <strong>Build</strong> instructions below
</ul>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
