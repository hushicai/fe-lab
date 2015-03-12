/**
 * @file biz
 * @author hushicai(bluthcy@gmail.com)
 */

/* eslint-env node */

// @see: http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript

var injector = require('./injector');

// 注册模块
injector.register('service', require('./service'));
injector.register('router', require('./router'));

var assert = require('expect.js');

var doSomething = injector.resolve(function (service, other, router) {
    assert(service().name).to.be('service');
    assert(router().name).to.be('router');
    assert(other).to.be('other');
});

doSomething('other');
