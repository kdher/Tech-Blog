const Comment = require('./Comment');
const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.hasMany(Comment, {
  foreignKey: 'user_id'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
Comment.belongsTo(User, {
  foreignKey: 'post_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});
module.exports = { User, Comment, Post };
