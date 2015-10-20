if(IS_TESTING) {
    $ = window.$;
    _ = window._;
    Handlebars = window.Handlebars;
} else {
    var $ = require('jquery');
    var _ = require('underscore');
    var Handlebars = require('handlebars/runtime');
}

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

Handlebars.registerHelper('input', require('./helpers/input'));
Handlebars.registerHelper('select', require('./helpers/select'));
Handlebars.registerHelper('checkbox', require('./helpers/checkbox'));
Handlebars.registerHelper('radio', require('./helpers/radio'));
Handlebars.registerHelper('textarea', require('./helpers/textarea'));