var Category = require('../models/category');

getAllCategories = (req, res) => {
  Category.find({}).then((categories)=>{
    res.send(categories)
  })
}

createCategory = (req, res) => {
  let newCategory = new Category({
    title: req.body.title
  })
  newCategory.save((err, category)=>{
    if(err)res.send(err)
    res.send(category)
  })
}

removeCategory = (req, res) => {
  Category.remove({_id: req.params.id})
  .then((err, category)=>{
    if(err)res.send(err)
    res.send(category)
  })
}

updateCategory = (req, res) => {
  Category.findOne({_id: req.params.id}, (err, category)=>{
    if(err)res.send(err)
    category.title= req.body.title || category.title
    category.save((err, updatedCategory)=>{
      if(err)res.send(err)
      res.send(updatedCategory)
    })
  })
}

module.exports = { getAllCategories, createCategory, removeCategory, updateCategory };