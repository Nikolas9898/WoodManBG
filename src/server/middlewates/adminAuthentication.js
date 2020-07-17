let jwt = require("jsonwebtoken");
let User = require("../models/user/user.model");

function auth(req, res, next) {
  let token = req.headers.authorization;

  // Check for token
  if (!token)
    return res.status(401).json({ msg: "No token, authorizaton denied" });

  token = token.split(" ").pop();

  try {
    let id = jwt.decode(token).id;
    User.findOne({ _id: id }).then((user) => {
      if (user.isAdmin === true) {
        next();
      } else {
        res.status(400).json({ msg: "You are not admin" });
      }
    });
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}
module.exports = auth;
