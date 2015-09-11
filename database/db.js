var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/aifanfou');//连接数据库
var Schema = mongoose.Schema;//创建模型

var userSchema = new Schema({
	email:String,
	name:String,
	password:String
});//定义了一个新的模型，但是此模型还未和users集合有关联
exports.user = db.model('users',userSchema);//与users集合关联