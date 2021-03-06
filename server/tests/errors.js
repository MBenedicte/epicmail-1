process.env.NODE_ENV = 'test';

// api version
import version from './../helpers/version'

//Require the dev-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const should = chai.should();
chai.use(chaiHttp);

// Initial Test
describe('Testing Erros', () => {
   // get a welcome message
   describe('/GET Error', () => {
      it('it should GET an error message', (done) => {
         chai.request(server)
            .get(version+'foo')
            .end((err, res) => {
               should.not.exist(err);
               res.should.have.status(500);
               res.body.should.be.a('object');;
               done();
            });
      });
   });
});

module.exports = server;