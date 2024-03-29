import mongoose from "mongoose";
import { countConnect } from "../helpers/check.connect";

const connectUri =
  process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";

class Database {
  private static instance: Database;

  private constructor() {
    this.connect();
  }

  connect() {
    //dev
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectUri, {
        maxPoolSize: 50,
      })
      .then((_) => {
        console.log("Connected MongoDB Success");
        countConnect();
      })
      .catch((err) => console.log("Connect Error:", err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const initDatabase = () => {
  Database.getInstance();
};

export default initDatabase;
