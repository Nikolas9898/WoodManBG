const router = require("express").Router();
let User = require("../models/user/user.model");
let jwt = require("jsonwebtoken");
router.route("/").post((req, res) => {
  User.find()
    .then((users) => {
      let user = users.filter((user) => user.username === req.body.username);

      user = user[0];
      let auth = user.password === req.body.password;

      const token = jwt.sign(
        {
          id: user._id,
        },
        "somesecretkeyforjsonwebtoken"
      );

      let username = user.username;
      let createdAt = user.createdAt;
      auth
        ? res.json({
            token,
            user: {
              username,
              createdAt,
            },
          })
        : res.status(400).json("Wrong email or password");
    })
    .catch((err) => {
      console.log(err.message);

      res.status(400).json("Error: " + err);
    });
});

module.exports = router;
