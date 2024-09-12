const User = require('../models/user');

const seedRoles = async () => {
  await User.bulkCreate([
    {
      username: 'superadmin',
      email: 'superadmin@example.com',
      password: await bcrypt.hash('superadminpass', 10),
      role: 'super_admin',
    },
    {
      username: 'admin1',
      email: 'admin1@example.com',
      password: await bcrypt.hash('adminpass1', 10),
      role: 'admin',
    },
    {
      username: 'user1',
      email: 'user1@example.com',
      password: await bcrypt.hash('userpass1', 10),
      role: 'user',
    },
  ]);
};

module.exports = seedRoles;
