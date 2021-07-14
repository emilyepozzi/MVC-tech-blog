const { Post } = require('../models');

const postData = [
    {
        title: "Karp-E Diem is 2021`s biggest hit!",
        post_content: "Karp-E Diem is named 2021`s coolest game so far. Rated as a positive hit with friends who like to compete against other friends",
        user_id: 3
    },
    {
        title: "Budget Tracker is the reason I am no longer broke!",
        post_content: "By installing the new Budget Tracker app I can now save for my kids college fund and still buy alcohol!",
        user_id: 1
    },
    {
        title: "Employee Tracker now makes it so my employees really have no lives!",
        post_content: "A simple tool to keep track of my employees every move in and out of work.. Best thing since emojis!",
        user_id: 2

    },
    {
        title: "Just Tech News gives me news I actually like!",
        post_content: "A tech news blog site that has real tech ALL the time. ",
        user_id: 5
    },
    {
        title: "Portfolio Generator makes it so I dont even have to think when I am at work.",
        post_content: "The generator that can do no wrong. Reads and writes portfolios for people that cant!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;