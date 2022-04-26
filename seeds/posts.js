const { Post } = require("../models");

const posts = [
	{
		id: 1,
		title: "JavaScript",
		contents:
			"What is JavaScript?",
		user_id: 2,
	},
	{
		id: 2,
		title: "HTML",
		contents:
			"learn HTML is......",
		user_id: 3,
	},
	{
		id: 3,
		title: "Comments in JAVA",
		contents:
			"",
		user_id: 1,
	},
	{
		id: 4,
		title: "CSS",
		contents:
			"",
		user_id: 4,
	},
	{
		id: 5,
		title: "Practice More",
		contents:
			"Sometimes it takes writing multiple blog titles to find the perfect one. Perfecting your ability to write effective blog titles is not a race, but a journey, so stay consistent and enjoy the process.",
		user_id: 1,
	},
];

const seedPost = () => Post.bulkCreate(posts);

module.exports = seedPost;
