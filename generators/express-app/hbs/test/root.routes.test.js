import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import { STATUS_CODES } from '../server/constants';

chai.should();
chai.use(chaiHttp);

describe('Root Route', () => {
  describe('GET /', () => {
    it('should get OK status', (done) => {
      chai
        .request(app)
        .get('/')
        .end((_err, res) => {
          res.should.have.status(STATUS_CODES.OK);
          done();
        });
    });
  });
});
