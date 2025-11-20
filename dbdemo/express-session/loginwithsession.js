// server.js
import express from "express";
import session from "express-session";
import {User} from "../models/user.js";
import dotenv from 'dotenv';

import { connectDB } from "../config.js";


const app = express();

dotenv.config();


connectDB();
app.use(session({
    
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 } // 1 hour
}));

app.use(express.json());

// Parse URL‑encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {    
    res.send("Welcome to the session-based login system");
}   );

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
 console.log(username,password,user);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Save user info in session
  req.session.user = { id: user._id, username: user.username };
  res.json({ message: "Logged in with session" });
});

app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json({ user: req.session.user });
});
app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
    });
