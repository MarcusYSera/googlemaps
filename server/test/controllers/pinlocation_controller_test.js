const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

describe('Pin Location Controller', () => {
  it('handles a POST/create request to /api/pinlocation', (done) => {
    request(app)
      .post('/api/pinlocation')
      .send({formatted_address: 'formatted address here'})
      .end((err, response) => {
        done();
      })
  })
})