function StudentList({ students, onEdit, onDelete }) {

    if (students.length === 0) {
        return <p>No students available.</p>;
    }

    return (
        <table border="1">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Branch</th>
                    <th>Semester</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>

                {students.map((student) => (

                    <tr key={student.id}>

                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.branch}</td>
                        <td>{student.semester}</td>
                        <td>{student.mobile}</td>

                        <td>

                            <button onClick={() => onEdit(student)}>
                                Edit
                            </button>

                            <button onClick={() => onDelete(student.id)}>
                                Delete
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    );
}

export default StudentList;