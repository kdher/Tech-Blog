const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', async (req, res) => {
   const apost = await Post.findAll({
      attributes: ['id', 'title', 'created_at'],
      order: [['created_at', 'DESC']],
    });
    res.status(200).json(apost);
  });

// POST: /api/post
router.post("/", async (req, res) => {
	
// create a new Post
	try {
		const newPost = await Post.create(req.body);
        res.status(200).json({ message: 'Successfully Created New Post', 
        newCategory });
       } catch (err){
         res.status(400).json(err);
       }
      });

// PUT: /api/post
router.put("/", async (req, res) => {
	let response;

	try {
		const updatePost = await Post.update(
			{
				title: req.body.title,
				content: req.body.content,
			},
			{
				where: {
					id: req.body.post_id,
					user_id: req.body.user_id,
				},
			}
		);
		if (!updatePost) {
			response = {
				status: res.status,
				error: true,
				message: "Unable to update post, try again.",
			};
			return res.status(200).json(response);
		}

		response = {
			error: false,
			message: "Post successully updated!",
		};
		return res.status(201).json(response);
	} catch (error) {
		response = {
			error: true,
			...req.body,
			message:
				"Something went wrong while updating your post! Please try again.",
		};

		return res.status(408).json(response);
	}
});

// DELETE: /api/post
router.delete("/", async (req, res) => {
	  // delete a category by its `id` value
      const apost = await Post.destroy({
		where: {
			id: req.params.id,
		},
	});
  if (!apost) {
    res.status(404).json({ message: 'No Post found with this id!' });
    return;
  }
	res.status(200).json({ message: 'Successfully Deleted the Post' });
});

module.exports = router;
