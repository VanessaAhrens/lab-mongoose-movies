const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: {type:String, required:true},
  occupation: {type:String},
  catchPhrase: {type: String, required: true}
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);


module.exports = Celebrity;