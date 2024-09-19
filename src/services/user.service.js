const {UserSchema} = require('../models')

//create user 
const creatUser = async (user) => {
    return await UserSchema.create(user);
};

const findUserByEmail = async (email) => {
    return await UserSchema.findOne({ where: { email } });
  };
  
const findUserById = async (id) => {
    return await UserSchema.findOne({where: {id}})
}


module.exports = {
    creatUser,
    findUserByEmail,
    findUserById
}