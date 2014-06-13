var regexp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

exports.hasUrls = function(msg, callback) {
    var matches = msg.match(regexp);

    if (typeof matches !== 'undefined' && matches !== null && matches.length > 0) {
        callback(null, matches);
        return true;
    }

    callback(null, false);
    return false;
};
