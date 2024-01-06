const port = 4000;
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
app.set("view engine", "hbs");
const secset = path.join(__dirname, "./files");
app.set("views", secset);
hbs.registerPartials(path.join(__dirname, "./partials"));
app.use(express.static(path.join(__dirname, "./files")));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/skill", (req, res) => {
  res.render("skil");
});
app.get("/about", (req, res)=> {
    res.render("about");
});
app.get("/Contect", (req, res)=> {
  res.render("Contect");
})

app.listen(port, "127.0.0.1", () => {
  console.log("server is startng");

});
