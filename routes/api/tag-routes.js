const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
      model: Product,
      // as: "product_tags",
      attributes: ["product_name"],
    },
  }).then((dbTagData) => res.json(dbTagData));
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      // as: "product_tags",
    },
  }).then((dbTagData) => res.json(dbTagData));
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  }).then((dbTagData) => res.json(dbTagData));
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
      id: req.params.id,
    },
  }).then((dbTagData) => res.json(dbTagData));
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbTagData) => res.json(dbTagData));
});

module.exports = router;
