var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars/runtime');

module.exports = function(attrs) {
    var params = attrs.hash;
    var element = $('<textarea class="form-control"/>');
    var template = ['{{element}}'];

    if(params.name && !params.id) {
        params.id = params.name;
    }

    if(params.label) {
        template = '<label for="{{id}}">{{label}}</label>{{element}}';
    }

    if(params.wrapped !== 'false') {
        template = '<div class="form-group">' + template + '</div>';
    }

    if(params.cols) {
        template = '<div class="col-md-{{cols}}">' + template + '</div>';
    }

    if(!_.isEmpty(attrs.data.root) && params.name && !params.value) {
        var value = require('../utils/walker')(attrs.data.root, params.name);

        if(value !== undefined) {
            element.html(value);
        }
    }

    params.element = element.attr(_.omit(params, ['label', 'cols', 'wrapped']))[0].outerHTML;
    template = $(_.template(template)(params));

    return new Handlebars.SafeString(template[0].outerHTML);
};