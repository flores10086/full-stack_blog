const express = require('express')
const app = express()
const router_user = require('./router/user')


app.use((req,res,next) => {
	res.rr = function (err,status = 1){
		res.send({
			status,
			message: err instanceof Error ? err.message : err
		})
	}
})

app.use('/api', router_user)




app.listen(5362,()=>{
	console.log('api server is running on port 5362')
})