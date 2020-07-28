const PinLocation = require('../models/pinlocation');

module.exports = {
  findAll(req, res, next) {
    res.send({hi:'there'})
      .catch(next);
  },
  create(req, res, next){
    const pinLocationProps = req.body;

    PinLocation.create(pinLocationProps)
      .then(pinlocation => res.send(pinlocation))
      .catch(next);
  },
  // edit(req, res, id){
  //   res.send({edit: 'edit ${id} here'})
  // },
  // delete(req, res, id){
  //   res.send({delete: `will delete ${id}`})
  // }
};