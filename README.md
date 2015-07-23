# incident-manager

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## To check Node and NPM version
node --version && npm --version

## Upgrade to the latest version by running:
npm install -g npm

## Installing yo and some generators
npm install -g yo bower grunt-cli gulp

## To scaffold a web application, you'll need to install the generator-webapp generator:
npm install -g generator-webapp

## This is the default web application generator that will scaffold out a project containing HTML5 Boilerplate, jQuery, Modernizr, and Bootstrap. You'll have a choice during the interactive prompts to not include many of these. 
This generator will use Grunt, while others may use Gulp or other alternative set of build tools. Now that the generator is installed, create a directory for your new project
mkdir my-yo-project
cd my-yo-project

## Now Run the following command
yo webapp

## Install AngularJS
# npm install -g generator-angular
# yo angular

## Add Controllers, Directive, Fitlers and Service
yo angular:controller incidentController
yo angular:directive incidentDirective
yo angular:filter incidentFilter
yo angular:service incidentService

## Grunt commands to execute
npm install -g grunt
npm install -g grunt-cli
npm install -g bower
npm install
bower install
grunt build
