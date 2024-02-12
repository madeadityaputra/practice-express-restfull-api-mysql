//* berfungsi untuk membuat fungctions ---------

import usersModels from "../models/users.js";

const getAllUsers = async (req, res) => {
	try {
		//* const [rows, fields] -- fields dihapus, dan rows diganti dengan nama data
		const [data] = await usersModels.getAllUsers();

		res.json({
			message: "GET all users successfully",
			data: data,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server error !",
			serverMaessage: error,
		});
	}
};

const createNewUser = async (req, res) => {
	const { body } = req;

	try {
		await usersModels.createNewUser(body);
		res.json({
			message: "CREATE new user successfully",
			data: body,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server error !",
			serverMaessage: error,
		});
	}
};

const updateUser = async (req, res) => {
	const { id } = req.params;
	const { body } = req;

	try {
		await usersModels.updateUser(id, body);
		res.json({
			message: "UPDATE user successfully",
			data: {
				id: id,
				...body,
			},
		});
	} catch (error) {
		res.status(500).json({
			message: "Server error !",
			serverMaessage: error,
		});
	}
};

const deleteUser = async (req, res) => {
	const { id } = req.params;

	try {
		await usersModels.deleteUser(id);
		res.json({
			message: "DELETE user successfully",
			data: null,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server error !",
			serverMaessage: error,
		});
	}
};

export default { getAllUsers, createNewUser, updateUser, deleteUser };
