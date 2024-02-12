import dbPool from "../config/database.js";

const getAllUsers = () => {
	const sqlQuery = "SELECT * FROM users";

	return dbPool.execute(sqlQuery);
};

const createNewUser = (body) => {
	//* ${body.name}, ${body.email}, ${body.address}
	//! HARUS DI DIDALAM TANDA KUTIP ', STRING'

	const sqlQuery = `INSERT INTO users (name, email, address) VALUES ('${body.name}', '${body.email}', '${body.address}')`;

	return dbPool.execute(sqlQuery);
};

const updateUser = (id, body) => {
	const sqlQuery = `UPDATE users SET name='${body.name}',email='${body.email}', address='${body.address}' WHERE id='${id}'`;

	return dbPool.execute(sqlQuery);
};

const deleteUser = (id) => {
	const sqlQuery = `DELETE FROM users WHERE id="${id}"`;

	return dbPool.execute(sqlQuery);
};

export default { getAllUsers, createNewUser, updateUser, deleteUser };
