/**
 * @file 依赖注入器
 * @author hushicai(bluthcy@gmail.com)
 */

var reg = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;

var injector = {
    dependencies: {},
    register: function (k, v) {
        this.dependencies[k] = v;
    },
    // 这个遇到压缩就挂了...
    //
    resolve: function (func, scope) {
        var self = this;
        var args = [];
        var deps = func.toString().match(reg)[1].replace(/ /g, '').split(',');
        scope = scope || {};

        return function () {
            var a = Array.prototype.slice.call(arguments);
            for(var i = 0; i < deps.length; i++) {
                var d = deps[i];
                args.push(
                    self.dependencies[d] && d != '' ? self.dependencies[d] : a.shift()
                );
            }
            func.apply(scope, args);
        };
    }
};

module.exports = injector;
