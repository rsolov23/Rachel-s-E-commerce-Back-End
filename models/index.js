// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hadMany(products, {
  foreignKey: "product_id",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: "productTag",
  as: "priduct_tags",
  foreignKey: "product_id",
});
// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Product, {
  through: "ProductTag",
  as: "product_tags",
  foreignKey: "tag_id",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};