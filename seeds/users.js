const { User } = require("../models");

const users = [
	{
		id: 1,
		name: "Eder",
		email: "edher.fca@gmail.com",
		password: "FCA1210_inf",
	},
	{
		id: 2,
		name: "Luis",
		email: "jossluss.dorantes2@gmail.com",
		password: "password",
	},
	{
		id: 3,
		name: "Nicolas",
		email: "nicolas@gmail.com",
		password: "nicol32",
	},
	{
		id: 4,
		name: "Ale",
		email: "Alejandro@gmail.com",
		password: "password",
	},
];

const seedUser = () => User.bulkCreate(users);

module.exports = seedUser;
