const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// GET
//    ALL
router.get("/", (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ["product_name", "price", "stock", "category_id"],
    },
  })
    .then((dbTagData) => {
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//   SINGLE
router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["product_name", "price", "stock", "category_id"],
    },
  })
    .then((dbTagData) => {
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST
router.post("/", (req, res) => {
  Tag.create({
      tag_name: req.body.tag_name
  })
    .then((dbTagData) => {
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT
router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
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
