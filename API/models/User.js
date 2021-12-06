const User = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        firstName: DataTypes.STRING,
    });
};

module.exports = User;