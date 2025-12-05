import mongoose from 'mongoose';
import app from './app';
import config from './config/config';
import { Server } from 'http';

let server: Server;
async function startServer() {
  try {
    server = app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
    await mongoose
      .connect(config.MONGO_URL || 'mongodb://127.0.0.1:27017/test')
      .then(() => {
        console.log('Connected to MongoDB');
      });
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
}

startServer();

process.on('SIGINT', async signal => {
  console.log(`${signal} signal received: closing HTTP server`);
  console.log('Reason: User interrupted the process (Ctrl+C)');

  if (server) {
    server.close(err => {
      if (err) {
        console.log('Error closing server:', err.message);
      } else {
        console.log('HTTP server closed gracefully');
      }
    });
  }

  await mongoose.disconnect();
  console.log('MongoDB disconnected');
  process.exit(0);
});
