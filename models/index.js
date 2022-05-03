const Category = require('./Category')
const Product = require('./Product')
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)


/* Category Model */
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

/* Product Model */
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id"
})

// ProductTag.hasMany(Product, {
//   foreignKey: 'product_id '
// })

/* Tag Model */
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id"
})

module.exports = { Category, Product, Tag, ProductTag }