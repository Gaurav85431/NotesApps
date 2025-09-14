import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI);
    const conn = await mongoose.connect('mongodb+srv://pushpamgaurav3_db_user:K1w2tuy7SRYMQFTY@cluster0.3d5fymq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
