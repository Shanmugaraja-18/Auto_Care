const express = require("express");
const mysql = require("mysql");
const doenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");

const app = express();
// app.get('/',(req,res)=>{
//   res.send("<h1>HELLO</h1>");
// });
doenv.config({
  path: "./.env",
});
const db = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASS,
	database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connection Success");
  }
});
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));


// //console.log(__dirname);
const location = path.join(__dirname, "./public");
app.use(express.static(location));
app.set("view engine", "hbs");

// app.get("/register",(req,res)=>{
//   res.render("register");
// });
// app.get("/",(req,res)=>{
//   res.render("login");
// });

// app.get("/profile",(req,res)=>{
//   res.render("profile");
// });
// app.get("/home",(req,res)=>{
//   res.render("home");
// });

const partialsPath = path.join(__dirname,"./views/partials");
hbs.registerPartials(partialsPath);
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));



app.listen(1727, () => {
  console.log("Server Started @ Port 1727");
});