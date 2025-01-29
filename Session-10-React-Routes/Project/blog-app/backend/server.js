const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const DATA_FILE = './blogs.json';


// Endpoint untuk mendapatkan semua blog

app.get('/blogs', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data file');
    }
    res.send(JSON.parse(data || '[]')); // Kirim data JSON sebagai respons
  });
});



// Endpoint untuk menambahkan blog baru


app.post('/blogs', (req, res) => {

  const newBlog = req.body; // Dapatkan blog baru dari permintaan

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {

    if (err) {
      return res.status(500).send('Error reading data file');
    }
    const blogs = JSON.parse(data || '[]'); // Parse file menjadi array
    newBlog.id = blogs.length + 1; // Tambahkan ID ke blog baru
    blogs.push(newBlog); // Tambahkan blog baru ke array

    fs.writeFile(DATA_FILE, JSON.stringify(blogs, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing to data file');
      }
      res.status(201).send(newBlog); // Kirim blog baru sebagai respons
    });
  });

});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));