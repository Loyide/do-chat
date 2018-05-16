const { UserProfile, User } = require('./models');

exports.associate = () => {
  UserProfile.associate();
};

exports.sync = () => {
  exports.associate();
  User.sync();
  UserProfile.sync();
};
