const PinLocationController = require('../controllers/pin_location_controller')

module.exports = (app) => {
  app.get('/api', PinLocationController.greeting);
  // app.post('/api')
  // app.put
  // app.delete
}