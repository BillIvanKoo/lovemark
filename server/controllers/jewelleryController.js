var Jewellery= require('../models/jewellery');

getAllJewelleries = (req, res) => {
  Jewellery.find({}).then((jewelleries)=>{
    res.send(jewelleries)
  })
}

getOneJewellery = (req, res) => {
  Jewellery.findOne({_id: req.params.id})
  .then((jewellery)=>{
    res.send(jewellery)
  })
}

addJewellery = (req, res) => {
  var newJewellery = new Jewellery({
    itemCode: req.body.itemCode,
    goldWeight: req.body.goldWeight,
    diamondQuantity: req.body.diamondQuantity,
    diamondCarats: req.body.diamondCarats,
    productName: req.body.productName,
    description: req.body.description,
    price: req.body.price,
    images: req.body.images
  });
  newJewellery.save((err, jewellery)=>{
    if(err)res.send(err)
    res.send(jewellery)
  })

}

updateJewellery = (req, res) => {
  Jewellery.findOne({_id: req.params.id}, (err, jewellery)=>{
    if(err)res.send(err);
    jewellery.itemCode= req.body.itemCode || jewellery.itemCode;
    jewellery.goldWeight= req.body.goldWeight || jewellery.goldWeight;
    jewellery.diamondQuantity= req.body.diamondQuantity || jewellery.diamondQuantity;
    jewellery.diamondCarats= req.body.diamondCarats || jewellery.diamondCarats;
    jewellery.productName= req.body.productName || jewellery.productName;
    jewellery.description= req.body.description || jewellery.description;
    jewellery.price= req.body.price || jewellery.price;
    jewellery.images= req.body.images || jewellery.images;
    jewellery.save((err, jewellery)=>{
      if(err) res.send(err)
      res.send(jewellery)
    })
  })
}

removeJewellery = (req, res) => {
  Jewellery.remove({_id: req.params.id}, (err, response)=>{
    if(err) res.send(err)
    res.send(response)
  })
}

module.exports = {
  getAllJewelleries,
  getOneJewellery,
  addJewellery,
  updateJewellery,
  removeJewellery
};