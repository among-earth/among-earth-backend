const sinon = require('sinon');
const axios = require('axios');

const Controller = require('../routes/controllers/directions.controller');

describe('/products (controller)', () => {
  let req;
  let res;
  let next;
  let expectedResult;

  describe('GET /products/search', () => {
    let sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      req = { query: { lat: 111, lng: 222, id: 333 } };
      res = { status: sinon.stub().returns({ json: sinon.spy() }) };
      next = sinon.spy();
      expectedResult = [{}, {}, {}];
    });

    afterEach(() => sandbox.restore());

    it('should return nearest places list', async () => {
      sandbox.stub(axios, 'get').resolves(expectedResult);

      await Controller.getNearestPlaces(req, res, next);

      sinon.assert.calledWith(res.status, 200);
      sinon.assert.match(res.status().json.args[0][0], expectedResult);
    });
  });
});
