/*!
 * 	hbs-form-helpers 1.0.0
 * 	Victor Bastos - victorwpbastos@gmail.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("underscore"), require("handlebars/runtime"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["underscore", "handlebars/runtime", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["FormHelpers"] = factory(require("underscore"), require("handlebars/runtime"), require("jquery"));
	else
		root["FormHelpers"] = factory(root["underscore"], root["handlebars/runtime"], root["jquery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	if(false) {
	    _ = window._;
	    Handlebars = window.Handlebars;
	} else {
		var _ = __webpack_require__(1);
	    var Handlebars = __webpack_require__(2);
	}

	_.templateSettings = {
	    interpolate: /\{\{(.+?)\}\}/g
	};

	Handlebars.registerHelper('input', __webpack_require__(3));
	Handlebars.registerHelper('select', __webpack_require__(9));
	Handlebars.registerHelper('checkbox', __webpack_require__(6));
	Handlebars.registerHelper('radio', __webpack_require__(8));
	Handlebars.registerHelper('textarea', __webpack_require__(10));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	if(false) {
	    $ = window.$;
	    _ = window._;
	    Handlebars = window.Handlebars;
	} else {
	    var $ = __webpack_require__(4);
	    var _ = __webpack_require__(1);
	    var Handlebars = __webpack_require__(2);
	}

	module.exports = function(attrs) {
	    if(attrs.hash.type === 'checkbox' || attrs.hash.type === 'radio') {
	        return __webpack_require__(5)("./" + attrs.hash.type)(attrs);
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
	            var value = __webpack_require__(7)(attrs.data.root, params.name);

	            if(value !== undefined) {
	                params.value = value;
	            }
	        }

	        params.element = element.attr(_.omit(params, ['label', 'cols', 'wrapped']))[0].outerHTML;
	        template = $(_.template(template)(params));

	        return new Handlebars.SafeString(template[0].outerHTML);
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./checkbox": 6,
		"./checkbox.js": 6,
		"./input": 3,
		"./input.js": 3,
		"./radio": 8,
		"./radio.js": 8,
		"./select": 9,
		"./select.js": 9,
		"./textarea": 10,
		"./textarea.js": 10
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 5;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	if(false) {
	    $ = window.$;
	    _ = window._;
	    Handlebars = window.Handlebars;
	} else {
	    var $ = __webpack_require__(4);
	    var _ = __webpack_require__(1);
	    var Handlebars = __webpack_require__(2);
	}

	module.exports = function(attrs) {
	    var params = attrs.hash;
	    var element = $('<input type="checkbox"/>');
	    var template = ['{{element}}'];

	    params.id = params.id || _.uniqueId('field_');

	    if(params.inline === undefined) {
	        params.inline = true;
	    }

	    if(params.inline.toString() === 'true') {
	        if(params.disabled === true || params.disabled === 'true') {
	            template = '<label class="checkbox-inline disabled">{{element}} {{label}}</label>';
	        } else {
	            template = '<label class="checkbox-inline">{{element}} {{label}}</label>';
	        }
	    } else {
	        if(params.disabled === true || params.disabled === 'true') {
	            template = '<div class="checkbox disabled"><label>{{element}} {{label}}</label></div>';
	        } else {
	            template = '<div class="checkbox"><label>{{element}} {{label}}</label></div>';
	        }
	    }

	    if(params.cols) {
	        template = '<div class="col-md-{{cols}}">' + template + '</div>';
	    }

	    if(!_.isEmpty(attrs.data.root) && params.name) {
	        var value = __webpack_require__(7)(attrs.data.root, params.name);

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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	if(false) {
	    _ = window._;
	} else {
	    var _ = __webpack_require__(1);
	}

	module.exports = function(obj, path) {
	    var hasIndex = /\d/.test(path);

	    path = path.split('.');

	    _(path).some(function(p, index) {
	        try {
	            obj = obj[p];

	            if(_.isArray(obj) && !hasIndex) {
	                if(path[index + 1]) {
	                    obj = _(obj).pluck(path[index + 1]);
	                }
	                return true;
	            }
	        } catch(err) {}
	    });

	    return obj;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	if(false) {
	    $ = window.$;
	    _ = window._;
	    Handlebars = window.Handlebars;
	} else {
	    var $ = __webpack_require__(4);
	    var _ = __webpack_require__(1);
	    var Handlebars = __webpack_require__(2);
	}

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
	        var value = __webpack_require__(7)(attrs.data.root, params.name);

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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	if(false) {
	    $ = window.$;
	    _ = window._;
	    Handlebars = window.Handlebars;
	} else {
	    var $ = __webpack_require__(4);
	    var _ = __webpack_require__(1);
	    var Handlebars = __webpack_require__(2);
	}

	module.exports = function(attrs) {
	    var params = attrs.hash;
	    var element = $('<select class="form-control"/>');
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

	    if(attrs.fn) {
	        var options = attrs.fn(this);

	        if(!_.isEmpty(attrs.data.root) && params.name) {
	            var value = __webpack_require__(7)(attrs.data.root, params.name);

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

	    params.element = element.attr(_.omit(params, ['label', 'cols', 'wrapped']))[0].outerHTML;
	    template = $(_.template(template)(params));

	    return new Handlebars.SafeString(template[0].outerHTML);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	if(false) {
	    $ = window.$;
	    _ = window._;
	    Handlebars = window.Handlebars;
	} else {
	    var $ = __webpack_require__(4);
	    var _ = __webpack_require__(1);
	    var Handlebars = __webpack_require__(2);
	}

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
	        var value = __webpack_require__(7)(attrs.data.root, params.name);

	        if(value !== undefined) {
	            element.html(value);
	        }
	    }

	    params.element = element.attr(_.omit(params, ['label', 'cols', 'wrapped']))[0].outerHTML;
	    template = $(_.template(template)(params));

	    return new Handlebars.SafeString(template[0].outerHTML);
	};

/***/ }
/******/ ])
});
;