import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI as string; // Asegúrate de que la URI esté bien definida

    if (!mongoURI) {
      console.error("❌ MONGO_URI no está definida");
      process.exit(1);
    }

    // Conexión a MongoDB sin las opciones obsoletas
    await mongoose.connect(mongoURI);

    console.log("✅ MongoDB Conectado");
  } catch (error) {
    console.error("❌ Error en la conexión a MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
