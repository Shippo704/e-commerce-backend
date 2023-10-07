const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{model: Product}]
    });

    res.status(200).json(tags);
  }
  catch (error) {
    res.status(500).json({message: 'Server error. Find all tags failed'});
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });

    // if tag doesn't exist
    if (!tag) {
      res.status(404).json({message: 'Tag not found.'});
    }

    // tag found successfully
    res.status(200).json(tag);
  }
  catch (error) {
    res.status(500).json({message: 'Server error. Find tag failed'});
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  }
  catch (error) {
    res.status(500).json({message: 'Server error. Create tag failed'})
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    // use request body data to update the tag
    // use params to find the tag
    const updateTag = await Tag.update(req.body, {
      where: {id: req.params.id}
    });

    // if tag doesn't exist
    if (!updateTag) {
      res.status(404).json({message: 'Tag not found. Update tag failed'});
      return;
    }

    // update tag successfully
    res.status(200).json(updateTag);
  }
  catch (error) {
    res.status(500).json({message: 'Server error. Update tag failed'})
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    // use params to find and destroy tag
    const deleteTag = await Tag.destroy({
      where: {id: req.params.id}
    });

    // if tag doesn't exist
    if (!deleteTag) {
      res.status(404).json({message: 'Tag not found. Delete tag failed'});
      return;
    }

    // delete tag successfully
    res.status(200).json(deleteTag);
  }
  catch (error) {
    res.status(500).json({message: 'Server error. Delete tag failed'})
  }
});

module.exports = router;
