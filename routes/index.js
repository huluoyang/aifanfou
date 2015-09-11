var express = require('express');
var router = express.Router();
var user = require('../database/db').user;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/*Provide validateEmail interface. */
router.route('/email').post(function(req,res,next){
	var email = req.body.email;
	var query = {email:email};
	user.count(query,function(err,doc){
		if(doc == 0){
			res.send({status:404});
		}else{
			res.send({status:300});
		}
	})
})

/*Provide validateName interface. */
router.route('/name').post(function(req,res,next){
	var name = req.body.name;
	var query = {name:name};
	user.count(query,function(err,doc){
		if(doc == 0){
			res.send({status:404});
		}else{
			res.send({status:300});
		}
	})
})

/*Provide register interface. */
router.route('/register').post(function(req,res,next){
	var email = req.body.email;
	var name = req.body.name;
	var password = req.body.password;
	var obj = {email:email,name:name,password:password};
	var kitty = new user(obj);
	console.log(kitty);
	console.log(obj);
	kitty.save(function(err){
		if(err){
			console.log(err);
		}
		user.count(obj,function(err,doc){
			console.log(doc);
			if(doc == 1){
				console.log('注册成功');
				res.send({status:200});
			}else{
				console.log('注册失败');
				res.send({status:300});
			}
		})		
	});
})
/*Provide login interface. */
router.route('/login').post(function(req,res,next){
	var email = req.body.email;
	var password = req.body.password;
	var obj = {email:email,password:password};
	user.count(obj,function(err,doc){
		console.log(doc);
		if(doc == 1){
			console.log('登录成功');
			res.send({status:200});
		}else{
			console.log('登录失败');
			res.send({status:300});
		}
	})
})
module.exports = router;
