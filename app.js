var irc = require('irc'),
    title = require('./lib/title'),
    url = require('./lib/url');

var bot = new irc.Client('irc.quakenet.org', 'psykedelia', {
    channels: ['#psykedelia']
});

bot.addListener('error', function(message) {
    console.log('Error: %s', error);
});

bot.addListener('message', function(from, to, message) {
    url.hasUrls(message, function(err, urls) {
        if (err) console.log(err);

        if (urls !== false) {
            urls.forEach(function(url) {
                title.grabTitle(url, function(err, title) {
                    if (!err) {
                        bot.say(to, title);
                    }
                });
            });
        }
    });
});


