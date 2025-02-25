import express from "express";
import userRouter from "./routes/user.route"; 

const app = express();

app.use(express.json()); 
app.use("/api/user", userRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;


