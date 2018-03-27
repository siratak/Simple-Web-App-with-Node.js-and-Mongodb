var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var GuruSchema = new mongoose.Schema({  
    nama: String,
    lokasi: String,
    biaya: Number
});

GuruSchema.plugin(autoIncrement.plugin,'Guru');
module.exports = mongoose.model('Guru', GuruSchema);  