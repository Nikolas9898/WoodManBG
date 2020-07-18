const router = require("express").Router();
let Category = require("../models/category/category.model");
let adminAuth = require("../middlewates/adminAuthentication");
const slugify = require("slugify");

router.route("/").get((req, res) => {
  Category.find()
    .then((categories) => res.json(categories))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/create").post(adminAuth, (req, res) => {
  let title = req.body.title;
  let slug = slugify(req.body.title);

  // if (req.body.isAdmin) {
  //     isAdmin = true;
  // }
  let error = { msg: "", status: "" };

  const newCategory = new Category({ title, slug });
  newCategory
    .save()
    .then(() => res.json(newCategory))
    .catch((err) => {
      if (err.code === 11000) {
        error.msg = "Category already exists";
        error.status = "400";
        res.status(400).json(error);
      } else {
        res.status(400).json("Error: ", err);
      }
    });
});
module.exports = router;
