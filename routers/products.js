const { Router } = require("express");

const router = new Router();

const Products = require("../models").products;

router.get("/", async (req, res, next) => {
  try {
    const products = await Products.findAll({ raw: true });
    res.status(200).send(products);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const specificProduct = await Products.findByPk(id);
    if (!specificProduct) {
      res.status(404).send("The Product is not found");
    } else {
      res.status(200).send(specificProduct);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
