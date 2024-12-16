const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;


// Middleware

app.use(bodyParser.json());
app.use(cors());


// Database Setup

const db = new sqlite3.Database("./movies.db", (err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});


// Create Movies Table

db.run(
  `CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    genre TEXT,
    description TEXT,
    poster TEXT,
    trailer TEXT
  )`
);


// Routes
// GET /movies - Get all movies

app.get("/movies", (req, res) => {
  db.all("SELECT * FROM movies", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});


// GET /movies/:id - Get a single movie by ID

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM movies WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(row);
  });
});


// POST /movies - Add a new movie

app.post("/movies", (req, res) => {
  const { title, genre, description, poster, trailer } = req.body;
  db.run(
    "INSERT INTO movies (title, genre, description, poster, trailer) VALUES (?, ?, ?, ?, ?)",
    [title, genre, description, poster, trailer],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});


// PUT /movies/:id - Update a movie

app.put("/movies/:id", (req, res) => {
  const { id } = req.params;
  const { title, genre, description, poster, trailer } = req.body;
  db.run(
    "UPDATE movies SET title = ?, genre = ?, description = ?, poster = ?, trailer = ? WHERE id = ?",
    [title, genre, description, poster, trailer, id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: "Movie not found" });
      }
      res.json({ message: "Movie updated successfully" });
    }
  );
});


// DELETE /movies/:id - Delete a movie

app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM movies WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json({ message: "Movie deleted successfully" });
  });
});


// Start Server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});