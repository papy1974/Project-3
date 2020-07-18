module.exports = function(sequelize, DataTypes) {
    return sequelize.define('order', {
      order_id: {
        type: DataTypes.INTEGER,
        // AllowNull is a flag that restricts a todo from being
        // entered if it doesn't have a text value
        allowNull: false,
        // len is a validation that checks that our todo is
        // between 1 and 140 characters
        validate: {
          len: [1],
        },
      },
      paypal_pay_id: {
        type: DataTypes.INTEGER,
        // AllowNull is a flag that restricts a todo from being
        // entered if it doesn't have a text value
        allowNull: false,
        // len is a validation that checks that our todo is
        // between 1 and 140 characters
        validate: {
          len: [1],
        },
      },
      
        user_name: {
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
      user_address: {
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
  };
  