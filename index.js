const hapi = require('hapi');
const mongoose = require('mongoose');
const Painting = require('./models/Painting');

const server = hapi.server({
	port: 4000,
	host: 'localhost'
});

mongoose.connect('mongodb://gillenha:Q97eEXt3@ds147890.mlab.com:47890/harrydb');

mongoose.connection.once('open', () => {
	console.log('connected to database');
});

const init = async () => {
	server.route([
	{
		method: 'GET',
		path: '/',
		handler: function(request, reply) {
			return `<h1>My modern api</h1>`;
		}
	},
	{
		method: 'GET',
		path: '/api/v1/paintings',
		handler: (req, reply) => {
			return Painting.find();
		}
	},
	{
		method: 'POST',
		path: '/api/v1/paintings',
		handler: (req, reply) => {
			const { name, url, techniques } = req.payload;
			const painting = new Painting({
				name,
				url,
				techniques
			});

			return painting.save();
		}
	}
]);

	await server.start();
	console.log(`Server is running at: ${server.info.uri}`);
};

init();