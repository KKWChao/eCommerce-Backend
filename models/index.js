const Category = require('./Category')
const Product = require('./Product')
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)


/* Category Model */

//    product
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

//    

/* Product Model */

//    category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

/* Tag Model */

//    product
Tag.belongsToMany(Product, {

})

//    product tag
Tag.belongsToMany(ProductTag, {
  through: Product,
  as: "product_tags",
  foreignKey: "tag_id"
})

/* ProductTag Model */

//    tag
ProductTag.hasMany(Tag, {})

module.exports = { Category, Product, Tag, ProductTag }