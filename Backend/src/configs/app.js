import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 7000,
  dbConnectionString:
    process.env.MONGO_DB_URI || "mongodb://localhost:27017/tdcmedical",
  secret: process.env.SECRET || "TDC-CreateForBetter",
};
