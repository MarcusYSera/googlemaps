const PinLocationController = require('../controllers/pin_location_controller')

module.exports = (app) => {
  app.get('/api', PinLocationController.findAll);
  app.post('/api/pinlocation', PinLocationController.create);
  // app.put('/api/pinlocation/id', PinLocationController.edit);
  // app.delete('/api/pinlocation/id', PinLocationController.delete);
}
