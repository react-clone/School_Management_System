import sql from "mssql";


export const register = async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;

        const request = new sql.Request();
        request.input("FullName", sql.NVarChar, fullName);
        request.input("Email", sql.NVarChar, email);
        request.input("Password", sql.NVarChar, password);
        request.input("Role", sql.NVarChar, role);

        await request.execute("sp_RegisterUser");

        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const request = new sql.Request();
        request.input("Email", sql.NVarChar, email);
        request.input("Password", sql.NVarChar, password);

        const result = await request.execute("sp_LoginUser");

        if (result.recordset.length === 0) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json(result.recordset[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
