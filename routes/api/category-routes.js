const router = require("express").Router();
const { Category, Product } = require("../../models");

// GET
//    ALL
router.get("/", (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
    .then((dbCategoryData) => {
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//    SINGLE
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.body.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock"],
      },
    ],
  }) //,
    // include
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({
          message: "No category with this id found",
        });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST
router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((dbCategoryData) => {
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT
router.put("/");

// DELETE
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({
          message: "No category with this id",
        });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
