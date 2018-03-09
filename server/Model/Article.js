var mongoose=require('../lib/db');

var Schema=mongoose.Schema;

var Article=new Schema({
	articlename:{type:String},
	articlecontent:{type:String},
	articleclassify:{type:String},
	createtime:{type:Date},
})

module.exports=mongoose.model('Article',Article)
