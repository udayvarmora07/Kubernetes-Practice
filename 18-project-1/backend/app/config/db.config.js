import dotenv from 'dotenv';
dotenv.config();

export default {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DB: process.env.MYSQL_DATABASE,
    PORT: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

// export default {
//     HOST: "database-1.cbwaeykesql2.ap-south-1.rds.amazonaws.com",
//     USER: "admin",
//     PASSWORD: "Hemal2004",
//     DB: "tutorial",
//     PORT: 3306,
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },
// };