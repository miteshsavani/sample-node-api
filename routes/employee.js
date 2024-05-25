import express from 'express';
import * as empController from '../controller/employee.js';

const employeeRoute = express.Router();

employeeRoute
	.route('/')
	.get(empController.getAllEmployees)
	.post(empController.addEmployee)
	.delete(empController.deleteEmployee);

employeeRoute.route('/:id').get(empController.getEmployee);

export default employeeRoute;
