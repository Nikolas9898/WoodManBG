const router = require("express").Router();
let Product = require("../models/product/product.model");
let adminAuth = require("../middlewates/adminAuthentication");
const slugify = require("slugify");

router.route("/").get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const slug = slugify(req.body.slug);
  const category = req.body.category;
  const createdBy = req.body.createdBy;
  const mainImagePath = req.body.mainImagePath;
  const galleryImagesPaths = req.body.galleryImagesPaths;

  const newProduct = new Product({
    title,
    description,
    slug,
    category,
    createdBy,
    mainImagePath,
    galleryImagesPaths,
  });

  Product.findOne({
    title: title,
    description: description,
    slug: slug,
  }).then((product) => {
    if (product) {
      res.status(400).json("Veche sushtestvuva");
    } else {
      newProduct
        .save()
        .then(() => res.json(newProduct))
        .catch((err) => {
          res.status(400).json({ err });
        });
    }
  });
});

router.route("/delete/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:slug").get((req, res) => {
  Product.findOne({ slug: req.params.slug })
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/category/:category_slug").get((req, res) => {
  const category = req.params.category_slug;

  Product.find({ category })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => res.status(400).json("Error: " + err));

  // Product.findOne({ slug: req.params.slug })
  //     .then((product) => res.json(product))
  //     .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
