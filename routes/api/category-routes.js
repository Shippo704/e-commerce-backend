const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{model: Product}]});
    res.status(200).json(categories);
  }
  catch (error) {
    res.status(500).json({message: 'Server error in get all categories'});
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{model: Product}]});

    // if category doesn't exist
    if (!category) {
      res.status(404).json({message: 'Category id does not exist'});
      return;
    }

    // found category successfully
    res.status(200).json(category);
  }
  catch (error) {
    res.status(500).json({message: 'Server error in get category by id'});
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    // use request body data to create new category
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  }
  catch (error) {
    res.status(400).json({message: 'New category not created'});
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // use request body to carry the update info
    // use params to find the correct category to update
    const updatedCategory = await Category.update(req.body, {
      where: {id: req.params.id}});

    // if category doesn't exist
    if (!updatedCategory[0]) {
      res.status(404).json({message: 'Category not found. Update category failed'})
    }

    // update successful
    res.status(200).json(updatedCategory);
  }
  catch (error) {
    res.status(500).json({message: 'Server error. Update category failed'});
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    // use params to find the category to delete
    const deleteCategory = await Category.destroy({
      where: {id: req.params.id}});

    // if category doesn't exist
    if (!deleteCategory) {
      res.status(404).json({message: 'Category not found. Delete category failed'});
    }

    // delete successful
    res.status(200).json(deleteCategory);
  }
  catch (error) {
    res.status(500).json({message: 'Server error. Delete category failed'})
  }
});

module.exports = router;
