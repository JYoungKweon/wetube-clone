import express from "express";

const PORT = 4040;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  //return res.send("lalalal");
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed");
  next();
};

const handleHome = (req, res) => {
  console.log("I'm in the handleHome!");
  return res.send("I love Middleware.");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to private lounge!");
};
//const handleLogin = (req, res) => {
//  return res.end({ message: "Login here." });
//};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);
//app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
