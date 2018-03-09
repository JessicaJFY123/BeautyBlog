var mongoose=require('../lib/db');

var Schema=mongoose.Schema;

var Regist=new Schema({
	name:{type:String},
	pass:{type:String},
	passCheck:{type:String},
})

module.exports=mongoose.model('Regist',Regist)
