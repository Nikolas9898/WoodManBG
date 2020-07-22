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
  const createdBy = req.body.createdBy;
  const imagePath = req.body.imagePath;

  console.log(req.body);

  Product.find().then((products) => {
    products.map((product) => {
      console.log("drbr");
    });
  });

  const newProduct = new Product({
    title,
    description,
    slug,
    createdBy,
    imagePath,
  });

  newProduct
    .save()
    .then(() => res.json(newProduct))
    .catch((err) => {
      console.log(err);
      // if (err.code === 11000) {
      //   error.msg = "User already exists";
      //   error.status = "400";
      //   res.status(400).json(error);
      // } else {
      //   res.status(400).json("Error: ", err);
      // }
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

module.exports = router;
