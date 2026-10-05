const express = require("express");

const router = express.Router();

let students = [
    {
        id: 101,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        branch: "CSE",
        semester: 3,
        mobile: "9876543210"
    }
];

// GET all students
router.get("/", (req, res) => {
    res.json(students);
});

// GET student by ID
router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// ADD student
router.post("/", (req, res) => {

    const { id, name, email, branch, semester, mobile } = req.body;

    if (!id || !name || !email || !branch || !semester || !mobile) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const existingStudent = students.find(student => student.id === Number(id));

    if (existingStudent) {
        return res.status(400).json({
            message: "Student ID already exists"
        });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }

    if (!/^\d{10}$/.test(String(mobile))) {
        return res.status(400).json({
            message: "Mobile number must contain 10 digits"
        });
    }

    if (Number(semester) < 1 || Number(semester) > 8) {
        return res.status(400).json({
            message: "Semester must be between 1 and 8"
        });
    }

    const newStudent = {
        id: Number(id),
        name,
        email,
        branch,
        semester: Number(semester),
        mobile: String(mobile)
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

// UPDATE student
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, email, branch, semester, mobile } = req.body;

    if (!name || !email || !branch || !semester || !mobile) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    students[index] = {
        id,
        name,
        email,
        branch,
        semester: Number(semester),
        mobile: String(mobile)
    };

    res.json({
        message: "Student updated successfully",
        student: students[index]
    });
});

// DELETE student
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

module.exports = router;