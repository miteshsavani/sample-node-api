import { v4 as uuidv4 } from 'uuid';

let employees = [
	{
		id: uuidv4(),
		name: 'Mitesh Savani',
		dept: 'FrontEnd',
	},
];

const getAllEmployees = (req, res) => {
	return res.json(employees);
};

const addEmployee = (req, res) => {
	const newEmployee = req.body;

	if (!newEmployee.name || !newEmployee.dept) {
		return res.json({ message: 'Please provide employee name and dept' });
	}

	const empWithID = { ...newEmployee, id: uuidv4() };
	employees = [...employees, empWithID];

	return res.json({
		message: `Employee ${newEmployee.name} added successfully. \n Emp Id: ${empWithID.id}`,
	});
};

const deleteEmployee = (req, res) => {
	const reqId = req.body.id;

	if (!reqId) {
		return res.json({ message: 'Please provide employee id to delete' });
	}

	employees = employees.filter((emp) => emp.id !== reqId);

	return res.json({
		message: `Employee with id ${reqId} is deleted successfully !`,
	});
};

const getEmployee = (req, res) => {
	const reqId = req.params.id;

	if (!reqId) {
		return res.json({ message: 'Please provide employee id to get details' });
	}

	const employee = employees.find((emp) => emp.id === reqId);

	if (employee) {
		return res.json(employee);
	}

	return res.json({
		message: `Employee with id ${reqId} is not present in database`,
	});
};

export { getAllEmployees, addEmployee, deleteEmployee, getEmployee };
