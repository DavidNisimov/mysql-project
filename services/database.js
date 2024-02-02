import Sequelize from 'sequelize';


const sequelize = new Sequelize(
    "gadgetdb",//Database name
    "root",//Database username
    "123456",//Database password
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)


export default sequelize;