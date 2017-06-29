var angular = require('angular');

var main = require('./app/main');
var nav = require('./app/components/nav/nav');
var list = require('./app/components/list/list');
require('angular-ui-router');
var routesConfig = require('./routes');

require('normalize.css');
require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('component.main', main)
  .component('component.nav', nav)
  .component('component.list', list);
