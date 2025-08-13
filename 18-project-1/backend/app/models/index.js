import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";
import Tutorial from "./tutorial.model.js";

const sequelizeMaster = new Sequelize('', dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
    port: dbConfig.PORT,
});

await sequelizeMaster.query(`create database if not exists ${dbConfig.DB}`)
await sequelizeMaster.close()

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
    port: dbConfig.PORT,
});
 
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = Tutorial(sequelize, Sequelize);
 
export default db;