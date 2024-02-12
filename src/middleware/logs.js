//* untuk membuat middleware ---------

const logRequest = (req, res, next) => {
	console.log("Terjadi Log Request di PATH :", req.path);
	next();
};

export default logRequest;
