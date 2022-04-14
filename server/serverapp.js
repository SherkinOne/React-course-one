const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

var path = require("path");
// app.set("views", path.join(__dirname, "views"));

// app.use(require("./routes/about"));
app.use(require("./routes/search"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  
  console.log(`Server is running on port: ${port}`);
});

 
app.route('/about')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })


  app.route('/')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })

  // const proxy = require("http-proxy-middleware");
  // module.exports = function(app) {
  //   app.use(proxy("/**", { // https://github.com/chimurai/http-proxy-middleware
  //     target: "http://localhost:5000",
  //     secure: false
  //   }));
  // };


module.exports = app;