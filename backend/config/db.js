import sql from "mssql";
import dotenv from "dotenv";


dotenv.config();

export const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};


export const connectDB = async () => {
    try {
        const pool = await sql.connect(sqlConfig);
        console.log("SQL Server Connected Successfully");
        return pool;
    } catch (error) {
        console.error("DB Connection Failed:", error.message);
    }
};