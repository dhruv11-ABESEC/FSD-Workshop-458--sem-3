import { useEffect, useState } from "react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchStudent from "./components/SearchStudent";

import "./App.css";

function App() {

    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [search, setSearch] = useState("");

    const fetchStudents = async () => {

        const response = await fetch(
            "http://localhost:3000/api/students"
        );

        const data = await response.json();

        setStudents(data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) {
            return;
        }

        const response = await fetch(
            `http://localhost:3000/api/students/${id}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        alert(data.message);

        fetchStudents();
    };

    const handleEdit = (student) => {

        setSelectedStudent(student);
    };

    const filteredStudents = students.filter((student) => {

        return (
            student.name.toLowerCase().includes(search.toLowerCase()) ||
            String(student.id).includes(search)
        );

    });

    return (

        <div className="container">

            <h1>Student Management System</h1>

            <StudentForm
                selectedStudent={selectedStudent}
                onSuccess={() => {
                    setSelectedStudent(null);
                    fetchStudents();
                }}
            />

            <hr />

            <SearchStudent
                search={search}
                setSearch={setSearch}
            />

            <h2>All Students</h2>

            <StudentList
                students={filteredStudents}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

        </div>
    );
}

export default App;