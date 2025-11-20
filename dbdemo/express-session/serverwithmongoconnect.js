import MongoStore from "connect-mongo";
import express from "express";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 14 * 24 * 60 * 60 // 14 days
    })
  }));
  


app.get("/", (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send("Welcome! Refresh to count views.");
  }
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

