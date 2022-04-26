const router = require("express").Router();
const { Post, User } = require("../models");

// GET: /dashboard
router.get("/", async (req, res) => {
	
	try {
		const userPostsData = await Post.findAll({
			where: {
				user_id: req.session.user.id,
			},
			order: [["id", "DESC"]],
			include: [{ model: User, attributes: ["username"] }],
		})
        if (!userPostsData) {
            res.status(404).json({ message: 'No Post found with this id!' });
            return;
          }
      
          res.status(200).json(userPostsData);
        } catch (err) {
          res.status(500).json(err);
        }
      
});

// GET: /dashboard/:id
router.get("/:id", async (req, res) => {
	let singlePost;
	try {
		const singlePostData = await Post.findByPk(req.params.id, {});
		singlePost = singlePostData.get({ plain: true });
	} catch (error) {
		singlePost = null;
	}
	res.render("dashboard", {
		userData: req.session.user,
		loggedIn: req.session.loggedIn,
		singlePost,
		editPost: true,
	});
});
module.exports = router;
