const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// GET
//    ALL
router.get("/", (req, res) => {
  Tag.findAll({
    attributes: [
      'id',
      'tag_name',
      [sequelize.literal('(SELECT COUNT(*) FROM product WHERE tag.id = product.tag_id'), 'product_count']
    ],
  })
    .then((dbTagData) => {
      res.json(dbTagData)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    });
});

//    SINGLE
router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.body.id
    }
  })
    .then()
    .catch() 
});

// POST
router.post("/", (req, res) => {

});

// PUT
router.put("/:id", (req, res) => {});

// DELETE
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({
          message: "No tag with this id",
        });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
