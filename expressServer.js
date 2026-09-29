import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());


// ================================
// HOME
// ================================

app.get("/", (req, res) => {
  res.send("Backend server is running");
});


// ================================
// SIGNUP
// ================================

app.post("/signup", (req, res) => {

  const { username, email, password } = req.body;

  // Check all details
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please enter all details"
    });
  }


  // Read existing signup data
  let users = [];

  if (fs.existsSync("./signup.json")) {

    const data = fs.readFileSync(
      "./signup.json",
      "utf-8"
    );

    if (data) {
      users = JSON.parse(data);
    }
  }


  // Check if email already exists
  const existingUser = users.find(
    (user) => user.email === email
  );

  if (existingUser) {
    return res.status(400).json({
      message: "Email already registered"
    });
  }


  // Create new user
  const newUser = {
    id: users.length + 1,
    username: username,
    email: email,
    password: password
  };


  // Add user
  users.push(newUser);


  // Save to signup.json
  fs.writeFileSync(
    "./signup.json",
    JSON.stringify(users, null, 2)
  );


  // Send response to frontend
  res.status(201).json({
    message: "Account created successfully",
    user: {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email
    }
  });

});


// ================================
// SERVER
// ================================

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});