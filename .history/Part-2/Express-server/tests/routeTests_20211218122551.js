const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const allGames = require('../allGames');


chai.should()

chai.use(chaiHttp);

describe('Games API', () => {


    //// GET Route tests

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
    describe('GET /:_id', () => {
        it("It should return a single game by its ID (_id)", (done) => {
            const id = allGames[0]._id
            chai.request(server)
                .get('/allGames/' + id)
                .end((err, res, req) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('img');
                    res.body.should.have.property('cross_platform');
                    res.body.should.have.property('price');
                    res.body.should.have.property('genres');
                    res.body.should.have.property('_id');

                    done();

                })

        })
    })

    ///////// POST Route Tests
    describe('POST /', () => {
        it("It should add a new game", (done) => {
            chai.request(server)
                .post('/allGames')
                .end((err, res, req) => {
                    res.should.have.status(200);
                    // res.body.should.be.a('array');
                    // res.body.length.should.be.eq(4);
                    req.body.should.be.a('array');
                done();

                })

        })
    })


    ///// PATCH Route Tests



    ///// Delete Route Tests

});