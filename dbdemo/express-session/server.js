import express from "express";
import session from "express-session";

const app = express();

app.use(session({
  secret: "yourSecretKey",       // used to sign the session ID cookie
  resave: false,                 // don’t save session if unmodified
  saveUninitialized: false,      // don’t create session until something stored
  cookie: {
    secure: false,               // true if HTTPS
    maxAge: 1000 * 60 * 60       // 1 hour
  }
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

