module.exports = {
  findAll(req, res) {
    res.send({hi:'there'});
  },
  create(req, res){
    console.log(req.body);
    res.send({create: 'pinlocation'})
  },
  // edit(req, res, id){
  //   res.send({edit: 'edit ${id} here'})
  // },
  // delete(req, res, id){
  //   res.send({delete: `will delete ${id}`})
  // }
};