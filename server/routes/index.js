var express = require('express');
var router = express.Router();
var ClassifyModel = require('../Model/Classify')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});
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

module.exports = router;