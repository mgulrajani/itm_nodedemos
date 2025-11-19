import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(3000, () => console.log('Server running on port 3000'));
