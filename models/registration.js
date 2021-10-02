const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema( {
	uname: Number,
	email: String,
	password: String,
	mobile:Number,
	address:String,
	crt_date:{
		type: Date,
		default: Date.now
	}
}),
User = mongoose.model('user_detail', userSchema);
module.exports = User;