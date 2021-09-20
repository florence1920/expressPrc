import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect('mongodb+srv://admin:admin@cluster0.snwm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(()=> { console.log('MongoDB Connected');})
  .catch(err => {console.log(err);})