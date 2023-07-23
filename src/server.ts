import { app } from "./app";

app.listen({
  port: 3000,
}).then(() => {
  console.log('HTTP Server Running on: http://localhost:3000')
});
