import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class Registration extends Model {
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'user',
            });
            this.belongsTo(models.Event, {
                foreignKey: 'event_id',
                as: 'event',
            });
        }
    }

    Registration.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
            },
            event_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Events',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: 'Registration',
            tableName: 'registrations',
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

    return Registration;
};