const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//creating user model
class User extends Model {
    //checking password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//table columns and configs
User.init(
    {
        //id column
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //username
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    //password column
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
},
{
    hooks: { 
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        }
    },

    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
}
);

module.exports = User;