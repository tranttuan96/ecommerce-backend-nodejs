import app from "@Src/app";
import configuration from "@Config/configuration";

const port = configuration.app.port || 4000;

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Close Server"));
});
