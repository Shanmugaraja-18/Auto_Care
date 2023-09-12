const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/users");
router.get( "/login", (req, res) => {
  //res.send("<h1>Hello Tutor Joes Salem</h1>");
  res.render("login");
});
router.get("/", (req, res) => {
  //res.send("<h1>Hello Tutor Joes Salem</h1>");
  res.render("frontpage");
});
router.get("/hotel", (req, res) => {
  res.render("hotel");
});
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/rest", (req, res) => {
  res.render("rest");
});
router.get("/profile", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
  // res.render("profile");
});
router.get("/home", userContoller.isLoggedIn, (req, res) => {
  // console.log(req.name);
  // res.render("home");
  if (req.user) {
    // res.render("home", { user: req.user });
  } else {
  	res.render("home", { user: req.user });
    // res.redirect("/login");
  }
});
// router.get(["/", "/login"], (req, res) => {
//   //res.send("<h1>Hello Tutor Joes Salem</h1>");
//   res.render("login");
// });

// router.get("/register", (req, res) => {
//   res.render("register");
// });
// router.get("/profile", userContoller.isLoggedIn, (req, res) => {
//   // if (req.user) {
//   //   res.render("profile", { user: req.user });
//   // } else {
//   //   res.redirect("/login");
//   // }
//   res.render("profile");
// });
// router.get("/home", userContoller.isLoggedIn, (req, res) => {
//   console.log(req.name);
//   res.render("home");
//   // if (req.user) {
//   //   res.render("home", { user: req.user });
//   // } else {
//   //   res.redirect("/login");
//   // }
// });
module.exports = router;