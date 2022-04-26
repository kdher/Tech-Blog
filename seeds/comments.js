const { Comment } = require("../models");

const comments = [
	{
		id: 3,
		content: "that's right.... ",
		post_id: 2,
		user_id: 2,
	},
	{
		id: 1,
		content: "I hope learn to....",
		post_id: 3,
		user_id: 1,
	},
	{
		id: 2,
		content: "I want to say you..",
		post_id: 1,
		user_id: 3,
	},
	{
		id: 4,
		content: "hooooo!! OMG!!",
		post_id: 2,
		user_id: 1,
	},
	{
		id: 6,
		content: "This is true!!",
		post_id: 1,
		user_id: 2,
	},
	{
		id: 5,
		content: "Thanks for your comments..",
		post_id: 4,
		user_id: 3,
	},
];

const seedComment = () => Comment.bulkCreate(comments);

module.exports = seedComment;
