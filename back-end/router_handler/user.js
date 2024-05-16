const db = require('../db/index')


exports.reg_login = (req,res) => {
	const userinfo = req.body
	console.log(userinfo)

	const sqlStr_search = 'select * from users where username = ?'
	db.query(sqlStr_search, userinfo.username, (err, results) => {
		if(err){
			return res.rr(err)
		}
		if(results.length > 0){ //用户已存在，验证密码
			if(results[0].password == userinfo.userpassword){
				return res.rr('登录成功',0)
			}
			return res.rr('密码错误')
			}


		else{//用户不存在，注册为新用户
			const sqlStr_insert = 'insert into users set ?'
			//todo添加更多的注册s表单信息
			db.query(sqlStr_insert,{ username: userinfo.username, password: userinfo.userpassword},(err,results) => {
				if (err){
					return res.rr(err)
				}
				if(results.affectedRows != 1){
					return res.rr(err)
				}
				res.rr('注册成功',0)
			})
		}
	})









}
