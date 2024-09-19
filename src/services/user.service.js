const {UserSchema} = require('../models')

//create user 
const creatUser = async (user) => {
    return await UserSchema.create(user);
};

const findUserByEmail = async (email) => {
    return await UserSchema.findOne({ where: { email } });
  };
  

module.exports = {
    creatUser,
    findUserByEmail
}