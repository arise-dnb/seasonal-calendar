/* eslint-disable no-unused-vars */
var express = require("express");
var router = express.Router();
const { knex } = require("../knexExport");

/* GET home page. */
router.get("/", function(req, res, next) {
  //res.status(500).send("Error");
  req["user"] = "User1";
  next();
  //res.send({ test: "Hello World", time: new Date() });
});

router.get("/", function(req, res) {
  if (req.user === "User1") res.send("Hello " + req.user);
});

router.get("/users", function(req, res) {
  let users = {};
  users["admin"] = "ich";
  users["user"] = "du";
  res.send(users);
});

router.get("/test", async function(req, res) {
  try {
    const users = await knex.select("*").from("users");
    console.log(users);

    let arr = [];
    users.forEach(element => {
      arr.push(element.name);
    });

    res.send(arr);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/", function(req, res) {
  console.log(req.body);
});

module.exports = router;
