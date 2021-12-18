const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should()

chai.use(chaiHttp);

describe('Games API', () => {

    describe('GET /allGames', () => {
        it("It should return all of the games", (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.equal(4);
                done();

                })

        })
    })

});