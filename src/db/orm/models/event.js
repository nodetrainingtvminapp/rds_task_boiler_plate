import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class Event extends Model {
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: 'organizer_id',
                as: 'organizer',
            });
            this.hasMany(models.Registration, {
                foreignKey: 'event_id',
                as: 'registrations',
            });
        }
    }

    Event.init(
        {
            eventId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "event_id"
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            start_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            end_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            capacity: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            organizer_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                },
            },
            status: {
                type: DataTypes.STRING,
                defaultValue: 'upcoming',
            },
        },
        {
            sequelize,
            modelName: 'Event',
            tableName: 'events',
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

    return Event;
};