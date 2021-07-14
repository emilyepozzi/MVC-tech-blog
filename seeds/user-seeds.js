const { User } = require('../models');

const userData = [
    {
        username: "emily_p",
        twitter: "emilyp",
        github: "emilyepozzi",
        email: "epozzi@gmail.com",
        password: "1234"
    },
    {
        username: "katiej",
        twitter: "katiej",
        github: "katiejbreazeale",
        email: "katiep@gmail.com",
        password: "1234"
    },
    {
        username: "mikec",
        twitter: "mikec",
        github: "mikecp",
        email: "mikec@gmail.com",
        password: "1234"
    },
    {
        username: "jennyz",
        twitter: "jennyz",
        github: "jennyzeely",
        email: "jennyz@gmail.com",
        password: "1234"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;