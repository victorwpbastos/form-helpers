if(IS_TESTING) {
    _ = window._;
} else {
    var _ = require('underscore');
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