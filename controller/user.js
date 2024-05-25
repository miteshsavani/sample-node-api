import { v4 as uuidv4 } from 'uuid';

function successResult(response, message) {
	return response.status(200).json({
		success: {
			message: message,
		},
	});
}

function errorMessage(response, responseStatus, message) {
	return response.status(responseStatus).json({
		error: {
			message: message,
		},
	});
}

function sendResponse(response, result) {
	return response.json({
		data: result
	})
}


let users = [{ id: uuidv4(), firstname: 'Mitesh', lastname: 'Savani', age: '32' }];

export const getAllUsers = (req, res) => {
	return sendResponse(res, users);
};

export const createUser = (req, res) => {
	const newUser = req.body;

	if (!newUser.firstname || !newUser.lastname) {
		return errorMessage(res, 400, 'You must supply firstname and lastname');
	}

	const userWithId = { ...newUser, id: uuidv4() };

	users = [...users, userWithId];

	return successResult(res, 'New User added into Database!');
};

export const updateUserInfo = (req, res) => {
	const reqUser = req.body;
	const reqUserId = req.params.id;
	console.log('reqUserId', reqUserId);

	const user = users.find((user) => user.id === reqUserId);

	if (!user) {
		return errorMessage(res, 400, `User not present with id: ${reqUserId}`);
	}

	if (reqUser.firstname) user.firstname = reqUser.firstname;
	if (reqUser.lastname) user.lastname = reqUser.lastname;
	if (reqUser.age) user.age = reqUser.age;

	return successResult(res, 'User details upadted successfully!');
};

export const deleteUser = (req, res) => {
	const reqUserId = req.params.id;
	console.log('reqUserId', reqUserId);

	users = users.filter((user) => user.id !== reqUserId);

	return successResult(res, 'User deleted!!!');
};
