var expect = require('chai').expect,
    url = require('../lib/url');

describe('url', function() {
    describe('.hasUrls()', function() {
        it('should return array of urls in a given string', function() {
            url.hasUrls('lorem ipsum http://google.com/ dolor sit amet http://youtube.com/', function(err, url) {
                expect(err).to.be.null;
                expect(url).to.be.instanceof(Array);
            });
        });

        it('should return false when there is no urls in a string', function() {
            url.hasUrls('no urls in this string', function(err, url) {
                expect(err).to.be.null;
                expect(url).to.be.false;
            });
        });
    });
});
