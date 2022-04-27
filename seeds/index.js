const users = require("./users");
const posts = require("./posts");
const comments = require("./comments");

const sequelize = require("../config/connection");

sequelize.sync({ force: true }).then(async () => {
	await users();
	console.log("\n---------DONE SEEDING USERS---------\n");

	await posts();
	console.log("\n---------DONE SEEDING POSTS---------\n");

	await comments();
	console.log("\n---------DONE SEEDING COMMENTS---------\n");

    process.exit(0);
});