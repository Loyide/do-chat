const Sequelize = require('sequelize');
const db = require('database');
const User = require('./User');

const UserProfile = db.define('user_profile', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  display_name: {
    type: Sequelize.STRING,
    unique: true
  },
  short_bio: Sequelize.STRING,
  thumbnail: Sequelize.STRING
});

UserProfile.associate = function associate() {
  UserProfile.belongsTo(User, { foreignKey: 'fk_user_id', onDelete: 'restrict', onUpdate: 'restrict' });
};

UserProfile.findByUserId = function findByUserId(userId) {
  return this.findOne({
    where: {
      fk_user_id: userId
    }
  });
};

module.exports = UserProfile;