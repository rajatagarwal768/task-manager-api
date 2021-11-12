const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express()
const port = process.env.PORT


// Without middleware: new request -> run route handler

// With middleware: new request -> do something -> run route handler
//middleware function
// app.use((req,res,next) => {
// 	// console.log(req.method, req.path);
// 	// next();
// 	if(req.method === 'GET'){
// 		res.send('GET requests are disabled');
// 	} else {
// 		next();
// 	}
// });

// app.use((req,res,next) => {
// 	res.status(503).send('Site is under maintenance');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// const router = new express.Router();
// router.get('/test', (req,res) => {
// 	res.send('This is from my other router');
// });
// app.use(router);

app.listen(port,() => {
	console.log('Server is up on port ' + port);
});


// const bcrypt = require('bcryptjs')

// const myFunction = async () =>{
// 	const password = 'Red12345!';
// 	const hashedPassword = await bcrypt.hash(password, 8);

// 	console.log(password);
// 	console.log(hashedPassword);

// 	const isMatch = await bcrypt.compare('Red12345!',hashedPassword);
// 	console.log(isMatch);
// }

// myFunction();

// const jwt = require('jsonwebtoken')

// const myFunction = async () =>{
// 	const token = jwt.sign({ _id:'abc123' }, 'thisismynewcourse', {expiresIn: '7 days'});
// 	console.log(token);

// 	const data = jwt.verify(token, 'thisismynewcourse');
// 	console.log(data);
// }

// myFunction();


// const Task = require('./models/task')
// const User = require('./models/user')
// const main =  async () => {
// 	// const task = await Task.findById('617deffd6303353da16199fc')
// 	// await task.populate('owner').execPopulate();
// 	// console.log(task.owner);

// 	const user = await User.findById('617dee2cc98b7d3d22a430cb')
// 	await user.populate('tasks').execPopulate();
// 	console.log(user.tasks);
// }
// main();


