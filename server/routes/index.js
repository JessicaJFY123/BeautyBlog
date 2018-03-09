var express = require('express');
var router = express.Router();
var ClassifyModel = require('../Model/Classify')
var ArticleModel = require('../Model/Article')
var CommentModel = require('../Model/Comment')
var RegistModel = require('../Model/Regist')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});
//获取所有数据
router.get('/getclass', function(req, res) {
	ClassifyModel.find({}, function(err, result) {
		if(err) {

		} else {
			res.send(result)
		}
	})
})
//更新数据
router.get('/updateclass', function(req, res) {
	var id = req.query.id;
	var name = req.query.name;
	console.log(id, name)
	var updatestr = {
		name: name
	}
	ClassifyModel.findByIdAndUpdate(id, updatestr, function(err, result) {
		if(err) {
			console.log('Error', err)
		} else {
			ClassifyModel.find({}, function(err, result) {
				if(err) {
					console.log(err)
				} else {
					res.send(result)
				}
			})
		}
	})

})

//添加分类
router.post('/addclass', function(req, res) {
	var classify = req.body.classify;
	var clas = new ClassifyModel({
		name: classify,
		createtime: new Date()
	})

	clas.save(function(err, ress) {
		if(err) {
			console.log(err)
		} else {
			console.log(ress)
			ClassifyModel.find({}, function(err, result) {
				if(err) {
					console.log(err)
				} else {
					res.send(result)
				}
			})
		}
	})
})

//删除接口
router.get('/delclass', function(req, res) {
	var id = req.query.id;
	ClassifyModel.findByIdAndRemove(id, function(err, result) {
		if(err) {
			console.log(err)
		} else {
			ClassifyModel.find({}, function(err, result) {
				if(err) {
					console.log(err)
				} else {
					res.send(result)
				}
			})
		}
	})
})
//发表文章接口
router.post('/publishclass', function(req, res) {
	var articlename = req.body.articlename;
	var articleclassify = req.body.articleclassify;
	var articlecontent = req.body.articlecontent;
	//console.log(articlename, articleclassify, articlecontent)

	var art = new ArticleModel({
		articlename: articlename,
		articleclassify: articleclassify,
		articlecontent: articlecontent,
		createtime: new Date(),
	})
	art.save(function(err, ress) {
		if(err) {
			console.log(err)
		} else {
			res.send({msg:'success'})
		}
	})
})
//获取文章
router.get('/getarticle',function (req,res) {
	ArticleModel.find({}, function(err, result) {
		if(err) {

		} else {
			res.send(result)
		}
	})
})
//删除文章
router.get('/delarticle', function(req, res) {
	var id = req.query.id;
	//console.log(id)
	ArticleModel.findByIdAndRemove(id, function(err, result) {
		if(err) {
			console.log(err)
		} else {
			ArticleModel.find({}, function(err, result) {
				if(err) {
					console.log(err)
				} else {
					res.send(result)
					//console.log(result)
				}
			})
		}
	})
})
//更新文章
router.post('/updatearticle', function(req, res) {
	var obj = req.body.obj;
	console.log(obj)
	var id=req.body.obj.id
	var updatestr = {
		articlename: obj.articlename,
		articleclassify: obj.articleclassify,
		articlecontent:obj.articlecontent,
		createtime: new Date(),
	}
	ArticleModel.findByIdAndUpdate(id, updatestr, function(err, result) {
		if(err) {
			console.log('Error', err)
		} else {
			ArticleModel.find({}, function(err, result) {
				if(err) {

				} else {
					res.send(result)
				}
			})
		}
	})
})
//添加评论
router.post('/addcomment',function (req,res) {
	var content=req.body.content;
	var articleid=req.body.articleid;
	var author=req.body.author;
    
//console.log(req.body)
	var comm=new CommentModel({
		author:'小花',
		content:content,
		createtime:new Date(),
		articleid:articleid
	})
	comm.save(function (err,result) {
		if (err) {
			console.log(err)
		} else{
		
			CommentModel.find({articleid},function (err,result) {
				if (err) {
					console.log(err)
				} else{
					console.log(result)
					res.send(result)
				}
			})
		}
	})
})
//获取评论
router.get('/getcomment',function (req,res) {
	//var content=req.query.content;
	var articleid=req.query.articleid;
	//var author=req.query.author
	CommentModel.find({articleid},function (err,result) {
				if (err) {
					console.log(err)
				} else{
					res.send(result)
				}
			})

})
//注册时查询用户名是否重复
router.get('/confirm',function(req,res){
	//查找数据库说有的数据，给前端响应回去所有的数据
	RegistModel.find({},function(err,ress){
		if(err){
			console.log(err)
		}else{
			res.send(ress)
		}
	})
})

//注册
router.post('/regist',function (req,res) {
	var name=req.body.name;
	var pass=req.body.pass;
	var reg=new RegistModel({
		name:name,
		pass:pass,
	})
	reg.save(function (err,ress) {
		if (err) {
			console.log(err)
		} else{
			res.send({msg:"success"})
		}
	})
	
})

module.exports = router;