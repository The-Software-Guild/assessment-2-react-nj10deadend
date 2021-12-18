const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
// const allGamesRouter = require('../routes/allGamesRouter');
// const gameFinderRouter = require('./routes/gameFinderRouter');
// const patchAndDeleteRouter = require('./routes/patchAndDeleteRouter');

chai.should()

chai.use(chaiHttp);

describe('Games API', () => {

    describe('GET /', () => {
        it("It should return all of the games", (done) => {
            chai.request(server)
                .get('/allGames')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eq(4);
                done();

                })

        })
    })

});