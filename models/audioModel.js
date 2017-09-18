var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AudioSchema = new Schema({
	    title: String,
	    audioPath: String
    })

module.exports = mongoose.model('Audio', AudioSchema)