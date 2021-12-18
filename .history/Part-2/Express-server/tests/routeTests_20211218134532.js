const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const allGames = require('../allGames');

chai.should()

chai.use(chaiHttp);

describe('Games API', () => {


    //// GET Route tests

    describe('GET /allGames', () => {
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
    describe('GET /allGames/:_id', () => {
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
                    res.body.should.have.property('name').eq("Bloodborne");
                    res.body.should.have.property('img').eq("https://image.api.playstation.com/vulcan/img/rnd/202010/2614/NVmnBXze9ElHzU6SmykrJLIV.png");
                    res.body.should.have.property('cross_platform').eq(false);
                    res.body.should.have.property('price').eq(20);
                    res.body.should.have.property('genres').to.have.length(2);
                    res.body.should.have.property('_id').eq(id);
                    done();
                })
        })
    })

    ///////// POST Route Tests
    describe('POST /allGames', () => {
        it("It should add a new game to the database", (done) => {
            const newGame = {
                name: "Breath of The Wild",
                img: "https://www.nintendo.com//content/dam/noa/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/the-legend-of-zelda-breath-of-the-wild-switch-hero.jpg",
                cross_platform: false,
                price: 60,
                genres: ["RPG", "Adventure", "Action"]
            }
            chai.request(server)
                .post('/allGames')
                .send(newGame)
                .end((err, res, req) => {
                    res.should.have.status(201);
                    res.body.should.have.property('name').eq(newGame.name);
                    res.body.should.have.property('img').eq(newGame.img);
                    res.body.should.have.property('cross_platform').eq(newGame.cross_platform);
                    res.body.should.have.property('price').eq(newGame.price);
                    res.body.should.have.property('genres').to.have.length(3);
                    res.body.should.have.property('_id');
                    done();

                })

        })
    })


    ///// PATCH Route Tests
    describe('PATCH /allGames/update/:_id', () => {
        it("It should update one property of a game", (done) => {
            const newName = {name: "League of Legends"}
            const portal2Id = allGames[2]._id
            chai.request(server)
                .patch('/allGames/update/' + portal2Id)
                .send(newName)
                .end((err, res) => {
                    console.log(res);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name').eq(newName.name)
                    res.body.should.have.property('img').eq(allGames[2].img)
                    res.body.should.have.property('cross_platform').eq(allGames[2].cross_platform)
                    res.body.should.have.property('price').eq(allGames[2].price)
                    res.body.should.have.property('genres').eq(allGames[2].genres)
                    res.body.should.have.property('_id').eq(portal2Id)
                    done();
                })

        })
    })



    ///// Delete Route Tests

});