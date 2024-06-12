
import app from "./app.js";

app.listen(process.env.PORT, () => {
    console.log( `Server listening on port ${process.env.PORT} `);
});



// index.js
import express from 'express';
import mongoose from 'mongoose';
import adminRegisterRouter from './router/adminRegisterRouter.js';


app.use(express.json());
app.use('/api/auth', adminRegisterRouter);

const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Database connection error:', err);
});
