const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../app');

const PinLocation = mongoose.model('pinlocation');

describe('Pin Location Controller', () => {
  it('handles a POST/create request to /api/pinlocation', (done) => {
    PinLocation.count().then(count => {
      request(app)
      .post('/api/pinlocation')
      .send({formatted_address: 'formatted address here'})
      .end((err, response) => {
        PinLocation.count().then(newCount => {
          assert(count + 1 === newCount)
          done();
        })
      })
    })
  })
})
