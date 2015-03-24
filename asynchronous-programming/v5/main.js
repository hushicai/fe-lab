var Q = require('q');

function finder(records){
    var deferred = Q.defer();
    setTimeout(function () {
        records.push(3, 4);
        deferred.resolve(records);
    }, 500);
    return deferred.promise;
}
function processor(records) {
     var deferred = Q.defer();
    setTimeout(function () {
        records.push(5, 6);
        deferred.resolve(records);
    }, 500);
    return deferred.promise;
}

finder([1, 2])
    .then(processor)
    .then(function(records) {
        console.log(records);
    });

