const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
      model: Product,
      as: 'product_tags',
      attributes: ["stock", "product_name", "id", , "price"],
    },
  }).then((dbProductData) => res.json(dbProductData));
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({{
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
        attributes: ["product_tag"],
      },
  }).then((dbProductData) => res.json(dbProductData));
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then((dbProductData) => res.json(dbProductData));
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
    id: req.params.id
    }
  });
}).then((dbProductData) => res.json(dbProductData));

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((dbProductData) => res.json(dbProductData));
});

module.exports = router;
