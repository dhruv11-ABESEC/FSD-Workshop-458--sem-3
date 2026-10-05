import { useState } from "react";

function StudentForm({ selectedStudent, onSuccess }) {

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        branch: "CSE",
        semester: "",
        mobile: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const url = selectedStudent
            ? `http://localhost:3000/api/students/${selectedStudent.id}`
            : "http://localhost:3000/api/students";

        const method = selectedStudent ? "PUT" : "POST";

        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {
            setFormData({
                id: "",
                name: "",
                email: "",
                branch: "CSE",
                semester: "",
                mobile: ""
            });

            onSuccess();
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="number"
                name="id"
                placeholder="Student ID"
                value={formData.id}
                onChange={handleChange}
                disabled={selectedStudent}
                required
            />

            <input
                type="text"
                name="name"
                placeholder="Student Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
            >
                <option value="CSE">CSE</option>
                <option value="CS">CS</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
            </select>

            <input
                type="number"
                name="semester"
                placeholder="Semester"
                min="1"
                max="8"
                value={formData.semester}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
            />

            <button type="submit">
                {selectedStudent ? "Update Student" : "Add Student"}
            </button>

        </form>
    );
}

export default StudentForm;