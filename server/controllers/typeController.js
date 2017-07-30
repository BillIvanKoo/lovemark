var Type = require('../models/type');

getAllTypes = (req, res) => {
  Type.find({}).then((types)=>{
    res.send(types)
  })
}

createType = (req, res) => {
  let newType = new Type({
    title: req.body.title
  })
  newType.save((err, type)=>{
    if(err)res.send(err)
    res.send(type)
  })
}

removeType = (req, res) => {
  Type.remove({_id: req.params.id})
  .then((err, type)=>{
    if(err)res.send(err)
    res.send(type)
  })
}

updateType = (req, res) => {
  Type.findOne({_id: req.params.id}, (err, type)=>{
    if(err)res.send(err)
    type.title= req.body.title || type.title
    type.save((err, updatedType)=>{
      if(err)res.send(err)
      res.send(updatedType)
    })
  })
}

module.exports = { getAllTypes, createType, removeType, updateType };