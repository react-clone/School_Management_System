import express from "express";
import sql from "mssql";
import { sqlConfig } from "../config/db.js";

const router = express.Router();


router.get("/marks", async (req, res) => {
    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request().execute("sp_GetMarks");

        res.json(result.recordset);
    } catch (error) {
        console.error("GET MARKS ERROR:", error);
        res.status(500).json({ error: "Failed to fetch marks" });
    }
});




router.get("/attendance", async (req, res) => {
    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request().execute("sp_GetAttendance");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




router.post("/attendance", async (req, res) => {
    try {
        const { studentId, status } = req.body;


        const teacherId = 2;

        const pool = await sql.connect(sqlConfig);
        await pool.request()
            .input("StudentId", sql.Int, studentId)
            .input("Status", sql.NVarChar(20), status)
            .execute("sp_AddAttendance");

        res.json({ message: "Attendance added successfully" });
    } catch (error) {
        console.error("ADD ATTENDANCE ERROR:", error);
        res.status(500).json({ error: error.message });
    }
});




router.post("/marks", async (req, res) => {
    try {
        const { studentId, subject, marks } = req.body;

        const teacherId = 2;

        const pool = await sql.connect(sqlConfig);
        await pool.request()
            .input("StudentId", sql.Int, studentId)
            .input("TeacherId", sql.Int, teacherId)
            .input("Subject", sql.NVarChar(50), subject)
            .input("Marks", sql.Int, marks)
            .execute("sp_AddMarks");

        res.json({ message: "Marks added successfully" });
    } catch (error) {
        console.error("ADD MARKS ERROR:", error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
