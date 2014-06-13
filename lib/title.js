var request = require('request'),
    cheerio = require('cheerio');

exports.grabTitle = function(url, callback) {
    request(url, function(error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html)
                title = $('title').html();

            if (title && title.length > 0) {
                callback(null, title);
                return true;
            }

            callback('Title not found.', null);
            return false;
        }

        callback('Title not found.', null);
        return false;
    });
};
