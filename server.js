var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db = require('./models')



app.get('/api/audioFiles', function programs_index(req, res){
  db.Program.find({},function(error, audioFiles){
    console.log(programs);
    res.json(programs);
 });
});


app.get('/api/audioFiles/:id', function(req,res){
  db.Program.findOne({ _id:req.params.id
	}, function(err,audioFiles){
	  res.json(program);
  })
})

  // Initialize the app.
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
