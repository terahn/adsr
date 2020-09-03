import mongoose from 'mongoose';

mongoose
  .connect('mongodb://127.0.0.1:27017/adsr', { useNewUrlParser: true })
  .catch((err) => {
    console.error('Connection error', err.message);
  });

const db = mongoose.connection;

export default db;
