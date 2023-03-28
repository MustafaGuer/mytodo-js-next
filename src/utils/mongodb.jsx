import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

const dbConnect = async () => {
  if (cached.conn) {
    // console.log("DB Verbindung aktiv!");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, opts)
      .then((mongoose) => {
        // console.log("DB Verbindung gestartet!");
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

const dbDisconnect = async () => {
  await mongoose.disconnect();
  // console.log("DB Verbindung getrennt!");
};

const mongodb = { dbConnect, dbDisconnect };
export default mongodb;
