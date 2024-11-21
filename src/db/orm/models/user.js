import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
      // Example: this.belongsTo(models.AnotherModel);
      // this.hasMany(models.AnotherModel);
      this.hasMany(models.Event, {
        foreignKey: 'organizer_id',
        as: 'organized_events',
      });

      this.hasMany(models.Registration, {
        foreignKey: 'user_id',
        as: 'registrations',
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'attendee',
        validate: {
          isIn: [['admin', 'attendee']],
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users', // Optional: Specify table name explicitly
      timestamps: true, // Enable createdAt and updatedAt
      paranoid: true, // Enable soft deletes (deletedAt column)
      underscored: true, // Use snake case for column names
    }
  );

  return User;
};