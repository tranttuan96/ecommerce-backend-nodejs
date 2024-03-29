import compression from "compression";
import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";

const app: Express = express();

// init middlewares
app.use(
  morgan(
    "[:date[iso]] :remote-addr HTTP/:http-version :method :url HTTP-Code: :status Size: :res[content-length] bytes - Response-time: :response-time ms"
  )
);
app.use(helmet())
app.use(compression())

// init db

// init routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome!",
  });
});

// handling errors

export default app;
