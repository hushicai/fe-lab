var finder = {
    run: function (records) {
        var self = this;
        setTimeout(function () {
            records.push(3, 4);
           self.emit('done', records);
        }, 1000);
    }
};
var processor = {
    run: function (records) {
        var self = this;
        setTimeout(function () {
            records.push(5, 6);
            self.emit('done', records);
        }, 1000);
    }
};

var EventEmitter = require('events').EventEmitter;

// mixin
finder.__proto__ = EventEmitter.prototype;
processor.__proto__ = EventEmitter.prototype;

// 
finder.on('done', function (records) {
    processor.run(records);
});
processor.on('done', function (records) {
    console.log(records);
});

// run
finder.run([1, 2]);