require('dotenv').config();

module.exports = {
	database: {
	  host: process.env.DB_HOST,
	  username: process.env.DB_USERNAME,
	  password: process.env.DB_PASSWORD,
	},
  };
  