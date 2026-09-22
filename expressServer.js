import express from "express";
import cors from "cors";
const app = express();

// Middleware to read JSON data
app.use(cors());
app.use(express.json());

const userData = [
    {
        id: 101,
        name: "Abc",
        email: "cm@abes.call.in"
    }
];

// GET route
app.get("/msg", (req, res) => {
    res.status(200).json({
        message: "welcome user"
    });
});

// POST route
app.post("/create", (req, res) => {

    try {
        const { id, name, email } = req.body;

        const newUser = {
            id,
            name,
            email
        };

        userData.push(newUser);

        console.log("New User:", newUser);

        res.status(201).json({
            message: "User created successfully",
            user: newUser
        });

    } catch (err) {
        console.error("Error:", err.message);

        res.status(500).json({
            message: "Server error"
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});