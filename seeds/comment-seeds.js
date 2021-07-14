const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is so cool!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "I am impressed."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "It`s the bee`s knees."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I can`t believe we have followers!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This should be bigger news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "My mom even looks at this!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Its a useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;