// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// use foreign key in Product model
// N:1
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
// use foreign key in Product model
// 1:N
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
// use relationship table ProductTag
// use foreign key from Product model
// N:N
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
// use relationship table ProductTag
// use foreign key from Tag model
// N:N
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
