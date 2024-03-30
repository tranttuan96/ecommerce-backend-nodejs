import * as dotenv from "dotenv";
dotenv.config();

const configuration = {
  app: {
    port: process.env.PORT,
  },
  mongodb: {
    uri: process.env.MONGO_URI,
  },
};

export default configuration;
