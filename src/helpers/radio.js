var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars/runtime');

module.exports = function(attrs) {
    var params = attrs.hash;
    var element = $('<input type="radio"/>');
    var template = ['{{element}}'];

    params.id = params.id || _.uniqueId('field_');

    if(params.inline === undefined) {
        params.inline = true;
    }

    if(params.inline.toString() === 'true') {
        if(params.disabled === true || params.disabled === 'true') {
            template = '<label class="radio-inline disabled">{{element}} {{label}}</label>';
        } else {
            template = '<label class="radio-inline">{{element}} {{label}}</label>';
        }
    } else {
        if(params.disabled === true || params.disabled === 'true') {
            template = '<div class="radio disabled"><label>{{element}} {{label}}</label></div>';
        } else {
            template = '<div class="radio"><label>{{element}} {{label}}</label></div>';
        }
    }

    if(params.cols) {
        template = '<div class="col-md-{{cols}}">' + template + '</div>';
    }

    if(!_.isEmpty(attrs.data.root) && params.name) {
        var value = require('../utils/walker')(attrs.data.root, params.name);

        if(value !== undefined) {
            if(_.isArray(value)) {
                if(_.contains(value, params.value.toString())) {
                    params.checked = true;
                }
            } else {
                value = value.toString();
                if(value === params.value.toString()) {
                    params.checked = true;
                }
            }
        }
    }

    params.element = element.attr(_.omit(params, ['label', 'cols', 'wrapped']))[0].outerHTML;
    template = $(_.template(template)(params));

    return new Handlebars.SafeString(template[0].outerHTML);
};