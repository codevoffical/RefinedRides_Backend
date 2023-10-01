module.exports = {
	basePath: (endpoint) => {
		endpoint = endpoint.substring(1);
		return `/api/refined-rides/${endpoint}`;
	}
};
