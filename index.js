var express = require("express");
var app = express();

app.get("/clients", (req, res, next) => {
    res.json(["Mose","Jim","Michael", "Dwight"]);
});

app.get("/products", (req, res, next) => {
    res.json(["Bears","Beets","Battlestar Gallactica"]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});