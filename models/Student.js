var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var StudentSchema = new mongoose.Schema({
    nama: String,
    batch: String,
    usia: Number,
    gender: String
});

StudentSchema.plugin(autoIncrement.plugin,'Student');
module.exports = mongoose.model('Student', StudentSchema);