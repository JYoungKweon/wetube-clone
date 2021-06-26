import express from "express";

const PORT = 4040;
const app = express();

const routerLogger = (req, res, next) => {
  console.log("PATH", req.path);
  next();
};

const methodLogger = (req, res, next) => {
  console.log("METHOD", req.method);
  next();
};

const home = (req, res) => {
  console.log("last return");
  return res.send("hello World");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(methodLogger, routerLogger);
app.get("/", home);
app.get("/login", login);
//app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
