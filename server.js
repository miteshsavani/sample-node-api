import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
import employeeRoute from './routes/employee.js';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
	console.log('Called');

	res.send('Welcome to My Sample API');
});

app.use('/users', userRoutes);

//app.use('/employees', employeeRoute);

app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT} port`);
});
