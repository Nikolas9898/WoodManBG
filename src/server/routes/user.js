const router = require("express").Router();
let User = require("../models/user/user.model");
let adminAuth = require("../middlewates/adminAuthentication");
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

router.route("/").get(adminAuth, (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/register").post((req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  let isAdmin = false;

  if (req.body.isAdmin) {
    isAdmin = true;
  }
  let error = { msg: "", status: "" };

  if (emailRegexp.test(email) === false) {
    error.msg = "Inavalid email";
    error.status = "400";
    res.status(400).json(error);
  }
  User.find().then((users) => {
    users.map((user) => {
      if (user.email === email) {
        error.msg = "Email already exists";
        error.status = "400";
        res.status(400).json(error);
      }
    });
  });

  const newUser = new User({ email, username, password, isAdmin });

  newUser
    .save()
    .then(() => res.json(newUser))
    .catch((err) => {
      console.log(err);
      if (err.code === 11000) {
        error.msg = "User already exists";
        error.status = "400";
        res.status(400).json(error);
      } else {
        res.status(400).json("Error: ", err);
      }
    });
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").put((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.username = req.body.username;
      user.password = req.body.password;
      user.date = Date.parse(req.body.date);

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
