var mongoose=require('../lib/db');

var Schema=mongoose.Schema;

var Comment=new Schema({
	author:{type:String},
	content:{type:String},
	createtime:{type:Date},
	articleid:{type:Schema.Types.ObjectId},
	num:{type:String}
})

module.exports=mongoose.model('Comment',Comment)
