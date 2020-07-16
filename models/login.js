const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
    const Login = sequelize.define('login', {
      email: {
        type: DataTypes.STRING,
        // AllowNull is a flag that restricts a todo from being
        // entered if it doesn't have a text value
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        // AllowNull is a flag that restricts a todo from being
        // entered if it doesn't have a text value
        allowNull: false,
        // len is a validation that checks that our todo is
        // between 1 and 140 characters
        validate: {
          len: [1,256],
        },
      },
    },
    
    {
      freezeTableName: true,
    });

    Login.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User
    // Model lifecycle. In this case, before a User is created, we will
    // automatically hash their password
    Login.addHook('beforeCreate', function(user) {
      user.password =
        bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    
  
    return Login;
  };
  