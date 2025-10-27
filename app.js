import express from "express";
import cors from "cors";
import studentRoutes from "./routes/students.routes.js";
// import userRoutes from "./routes/user.routes.js";
const app = express();
app.use(cors());
app.use(express.json())
app.use("/students", studentRoutes);
// app.use("/user", userRoutes);

app.get("/", (req, res)=>{
  let temp =`<h1 style="text-align:center">
    <span style='color:darkgreen'>Great!</span> 
    Node application running successfully!!</h1>`
  res.send(temp)
})

export default app;
