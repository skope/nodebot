var expect = require('chai').expect,
    title = require('../lib/title');

describe('title', function() {
    describe('.grabTitle()', function() {
        it('should grab the title from given url', function() {
            title.grabTitle('http://google.com/', function(err, title) {
                expect(err).to.be.null;
                expect(title).to.equal('String');
            });
        });

        it('should return error message when title is not found', function() {
            title.grabTitle('http://thisurldoesnotexist.com/', function(err, title) {
                expect(title).to.be.null;    
                expect(err).to.have.string('Title not found.');
            });
        });
    });
});
