const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /search.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/").get(function (req, res) {
  res.render("Jsdf");
});

// This section will help you get a list of all the records.
recordRoutes.route("/search").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("repoDetails")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//"@fortawesome/fontawesome-svg-core": "^1.3.0",

// This section will help you get a single record by id
recordRoutes.route("/search").post(function (req, res) {
  let db_connect = dbo.getDb();
  let wordToSearch = req.body.searchValue;
  let myquery={};
  if (wordToSearch) {
  myquery= { title: wordToSearch };
  }
  console.log(myquery);
  db_connect
    .collection("repoDetails")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    title: req.body.title,
    description: req.body.description,
    tags: req.body.tags,
    link: req.body.link,
    dateAdded :  Date.now(),
  };

  db_connect.collection("repoDetails").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      link: req.body.link
    },
  };
  db_connect.collection("repoDetails").updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");  
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  console.log(myquery)
  db_connect.collection("repoDetails").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
