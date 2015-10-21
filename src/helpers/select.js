var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars/runtime');

module.exports = function(attrs) {
    var params = attrs.hash;
    var element = $('<select/>');
    var template = '{{element}}';

    if(params.name && !params.id) {
        params.id = params.name;
    }

    if(params.label) {
        template = '<label for="{{id}}" class="control-label">{{label}}</label>{{element}}';
    }

    if(params.wrapped !== 'false') {
        template = '<div class="form-group">' + template + '</div>';
    }

    if(params.cols) {
        template = '<div class="col-md-{{cols}}">' + template + '</div>';
    }

    if(attrs.fn) {
        var options = attrs.fn(this);

        if(!_.isEmpty(attrs.data.root) && params.name) {
            var value = require('../utils/walker')(attrs.data.root, params.name);

            if(value !== undefined) {
                options = options.replace(/\n/g, '');
                options = options.replace(/\s+</g, '<');
                options = options.replace(/>\s+/g, '>');
                options = options.replace(/></g, '>|<');
                options = options.split('|');

                _(options).each(function(option, index) {
                    if(params.multiple && params.multiple.toString() === 'true') {
                        if(_.isArray(value)) {
                            if(_.contains(value, $(option).val())) {
                                options[index] = option.replace('>', ' selected>');
                            }
                        } else {
                            if(value.toString() === $(option).val()) {
                                options[index] = option.replace('>', ' selected>');
                            }
                        }
                    } else {
                        if(!_.isArray(value) && $(option).val() === value.toString()) {
                            options[index] = option.replace('>', ' selected>');
                        }
                    }
                });
            }
        }

        element.html(options);
    }

    params.element = element.attr(_.omit(params, ['label', 'cols', 'wrapped'])).addClass('form-control')[0].outerHTML;
    template = $(_.template(template)(params));

    return new Handlebars.SafeString(template[0].outerHTML);
};