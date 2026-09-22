import { useState } from "react";

function App() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: Number(id),
        name: name,
        email: email
      })
    });

    const data = await response.json();

    console.log(data);

    alert("User created successfully!");

    setId("");
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>

        <label>ID:</label>
        <br />
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <br /><br />

        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;