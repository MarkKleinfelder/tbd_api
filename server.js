var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db = require('./models')

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to Mark Kleinfelder's Project 4",
    documentation_url: "",
    base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});




app.get('/api/audios', function audios_index(req, res){
  db.Audio.find({},function(error, audios){
    console.log(audios);
    res.json(audios);
 });
});


app.get('/api/audios/:id', function(req,res){
  db.Audio.findOne({ _id:req.params.id
	}, function(err,audios){
	  res.json(audios);
  })
})

  // Initialize the app.
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
