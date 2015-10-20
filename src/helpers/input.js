if(IS_TESTING) {
    $ = window.$;
    _ = window._;
    Handlebars = window.Handlebars;
} else {
    var $ = require('jquery');
    var _ = require('underscore');
    var Handlebars = require('handlebars/runtime');
}

module.exports = function(attrs) {
    if(attrs.hash.type === 'checkbox' || attrs.hash.type === 'radio') {
        return require('./' + attrs.hash.type)(attrs);
    } else {
        var params = attrs.hash;
        var element = $('<input type="text" class="form-control"/>');
        var template = '{{element}}';

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
                params.value = value;
            }
        }

        params.element = element.attr(_.omit(params, ['label', 'cols', 'wrapped']))[0].outerHTML;
        template = $(_.template(template)(params));

        return new Handlebars.SafeString(template[0].outerHTML);
    }
};