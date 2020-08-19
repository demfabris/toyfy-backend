import { Column, Table, Model, DataType } from 'sequelize-typescript'

@Table({
    defaultScope: {
        attributes: { exclude: ['deletedAt'] },
    },
    paranoid: true,
    tableName: 'users',
})
export class User extends Model<User> {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER.UNSIGNED,
    })
    id!: number

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    name!: string

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    email!: string

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    password!: string
}
