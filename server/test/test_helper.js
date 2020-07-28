const mongoose = require('mongoose');

// essential for setting up test connection to database that will be dropped after every run
before(done=>{
  mongoose.connect('mongodb://localhost/googlemaps_test');
  mongoose.connection
    .once('open', ()=>done())
    .on('error', err => {
      console.warn('Warning', error);
    })
})

// this will drop test db after every run
beforeEach(done => {
  const { pinlocations } = mongoose.connection.collections;
  pinlocations.drop()
    .then(() => done())
    .catch(() => done());
//  this catch is essential as the first run through has no instance of the collection, so it will return an error
});