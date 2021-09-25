const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema( {
	pmtId: Number,
	project: String,
	details: String,
	files:String,
	status:String,
	satge:String,
	username:String,
	date:{
		type: Date,
		default: Date.now
	}
}),
User = mongoose.model('task_management', userSchema);
module.exports = User;